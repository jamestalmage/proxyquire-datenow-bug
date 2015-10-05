var proxyquire = require('proxyquire');
var assert = require('assert');

var now = proxyquire('./index', {
  'date-now': function() {
    return 3;
  }
});

assert.strictEqual(3, now());
