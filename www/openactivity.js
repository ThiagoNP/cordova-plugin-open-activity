/*global cordova, module*/

cordova.define("cordova-plugin-open-activity.OpenActivity", function(require, exports, module) {
    var exec = require('cordova/exec');

    var OpenActivity = function() {
    };

    OpenActivity.open = function(name) {
        exec(null, null, "OpenActivity", name, []);
    };

    module.exports = OpenActivity;
});

