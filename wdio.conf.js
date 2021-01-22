const chai=require('chai');

global.expect=chai.expect;
global.assert=chai.assert;
global.should=chai.should();


// The Perfecto Continuous Quality Lab you work with
const host='<Your_Cloud_Name>.perfectomobile.com'

global.projectName="WDIO_TESTS_SERVICE";



global.STEP_TIMEOUT=900000;
global.IMPLICIT_TIMEOUT=5000;

exports.config = {
    hostname:host,
    path:'/nexperience/perfectomobile/wd/hub/fast',
    port:80,
    specs: ['./test/specs/example.e2e.js'],
    exclude:[],
    sync: true,
   
    logLevel: 'info',
    //
    maxInstances:4,

    capabilities: [{
            "maxInstances":1,
            "browserName": "Chrome",
            "platformName": "Android",
            "repoLocationKey": "android",
            "deviceName": "<Your Device Id>",
            "securityToken": "<Your_Security_token>"
    }],



    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
