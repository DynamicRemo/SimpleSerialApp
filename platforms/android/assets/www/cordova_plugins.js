cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/fr.drangies.cordova.serial/www/serial.js",
        "id": "fr.drangies.cordova.serial.Serial",
        "clobbers": [
            "window.serial"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "fr.drangies.cordova.serial": "0.0.2"
}
// BOTTOM OF METADATA
});