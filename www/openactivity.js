var exec = require('cordova/exec');

var OpenActivity = function() {
};

OpenActivity.open = function(name) {
    exec(null, null, "OpenActivity", name, []);
};

module.exports = OpenActivity;

