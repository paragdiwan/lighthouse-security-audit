'use strict';
const Audit = require('lighthouse').Audit;

class StrictTransportSecurityAudit  extends Audit {
  static get meta() {
    return {
      id: 'strict-transport-security',
      title: 'Strict-Transport-Security Header',
      failureTitle: 'Missing `Strict-Transport-Security` in response header.',
      description: 'The HTTP Strict-Transport-Security response header (often abbreviated as HSTS) ' +
        'lets a web site tell browsers that it should only be accessed using HTTPS, instead of using HTTP.. ' +
        '[Learn more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security).',
      requiredArtifacts: ['ResponseHeaders']
    };
  }
  
  static audit(artifacts) {
    const header = artifacts.ResponseHeaders['strict-transport-security'];
    const hasHeader = (typeof header === 'string');
    const hasHSTS = !!header;
    
    return {
      score: hasHeader ? 1 : 0,
    };
  }
}

module.exports = StrictTransportSecurityAudit;