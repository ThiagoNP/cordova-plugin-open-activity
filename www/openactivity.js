var exec = require('cordova/exec');

var OpenActivity = function() {
};

OpenActivity.open = function(name, callbackOk, callbackFail) {
    exec(callbackOk, callbackFail, "OpenActivity", name, []);
};

module.exports = OpenActivity;

