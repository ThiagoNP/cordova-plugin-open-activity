/*global cordova, module*/

cordova.define("com.modinify.openactivity", function(require, exports, module) {
    var argscheck = require('cordova/argscheck'),
        utils = require('cordova/utils'),
        exec = require('cordova/exec'),
        channel = require('cordova/channel');

    var OpenActivity = function() {
    };

    OpenActivity.open = function(name) {
        exec(null, null, "OpenActivity", name, []);
    };

    module.exports = OpenActivity;
});

