var proxyquire = require('proxyquire');

var now = proxyquire('./index', {
  'date-now': function() {
    return 3;
  }
});

console.log(now())
