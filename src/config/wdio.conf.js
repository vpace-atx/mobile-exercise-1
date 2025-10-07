exports.config = {
    runner: 'local',
    port: 4723,
    maxInstances: 2,
    capabilities: [
        // capabilities for local Appium web tests on an Android Emulator
        {
            platformName: 'Android',
            'appium:App': '/Users/vincentpace/Development/qa/caesars-mobile-exercise/mda-2.2.0-25.apk',
            'appium:deviceName': 'Android GoogleAPI Emulator',
            'appium:platformVersion': '16.0',
            'appium:automationName': 'UiAutomator2',
            'appium:appPackage': 'com.saucelabs.mydemoapp.android',
            'appium:appActivity': 'com.saucelabs.mydemoapp.android.view.activities.SplashActivity',
            specs: ['../tests/specs/android/**/*.js']
        },
        // {
        //     platformName: 'iOS',
        //     'appium:App': '/Users/vincentpace/Development/qa/caesars-mobile-exercise/Payload/My Demo App.ipa',
        //     'appium:deviceName': 'iPhone 17 Pro Max',
        //     'appium:platformVersion': '26.0',
        //     'appium:automationName': 'XCUITest',
        //     'appium:bundleId': 'com.saucelabs.mydemo.app.ios',
        //     port: 4725,
        //     specs: ['../../tests/specs/ios/**/*.js']
        // },

        // capabilities for local Appium web tests on an iOS iPad Pro (12.9-inch) Simulator
        {
            platformName: 'iOS',
            'appium:App': '/Users/vincentpace/Development/qa/caesars-mobile-exercise/Payload/My Demo App.ipa',
            'appium:deviceName': 'iPad Pro (12.9-inch) (6th generation) (16GB)',
            'appium:platformVersion': '26.0',
            'appium:automationName': 'XCUITest',
            'appium:bundleId': 'com.saucelabs.mydemo.app.ios',
            specs: ['../tests/specs/ios/**/*.js']
        }
    ],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            logPath : './',
            args: {
                port: 4723
            },
            command: 'appium',
        }],
        ['appium', {
            logPath : './',
            args: {
                port: 4725
            },
            command: 'appium',
        }],'visual'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    /**
     * Function to be executed after a test (in Mocha/Jasmine only)
     * @param {object}  test             test object
     * @param {object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {*}       result.result    return object of test function
     * @param {number}  result.duration  duration of test
     * @param {boolean} result.passed    true if test has passed, otherwise false
     * @param {object}  result.retries   information about spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (error) {
            // Generate a unique filename for the screenshot
            const screenshotName = `failure_${test.title.replace(/\s/g, '_')}_${Date.now()}.png`;
            const screenshotPath = `./screenshots/${screenshotName}`;

            // Take the screenshot
            await browser.saveScreenshot(screenshotPath);
            console.log(`Screenshot saved for failed test: ${screenshotPath}`);
        }
    },
}