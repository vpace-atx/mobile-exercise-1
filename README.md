** Setting up Wdio and Appium **

Prerequisites:
    
    Make sure you have the following installed on your machine:
        
        Node.js version 16, 18, or >18.0.0
            You can check node version by running node -v
        
        Java JDK
            Reference: https://www.oracle.com/java/technologies/downloads/
        
        Appium Inspector
            Reference: https://github.com/appium/appium-inspector/releases
        
        Appium Doctor
            Reference: https://github.com/appium/appium/tree/master/packages/doctor

        Sauce Labs demo app (APK and IPA)
            https://github.com/saucelabs/my-demo-app-android/releases/download/2.2.0/mda-2.2.0-25.apk (android)
            https://github.com/saucelabs/my-demo-app-ios/releases/download/2.1.2/SauceLabs-Demo-App.Simulator.zip (iOS)

Setup:
        
    1. Navigate to root of project directory and run 'npm init -y'
    
    2. Run 'npm install @wdio/cli appium'
        a. run 'npx wdio --version (check version)
    
    3. Run 'npm install -g appiium'
        a. run 'appium -v' (check version)
    
    4. Install appium drivers
        a. run 'appium driver install uiautomator2' to install android driver (uiautomator2)
        b. run 'appium driver install xcuitest' to install iOS driver (xcuitest)

    5. Start Appium server
        a. run 'appium -p {port}
            i. If you didn't specify a port, it will be 4723 by default
            ii. f Appium was started from the command line, -p flag will indicate port
                a. run 'appium --port 8080'

    6. Install Android Studio and set up Android Virtual Device (AVD)
    
    7. Configure ANDROID_HOME and add platform tools to your system's PATH environment variables.
        a. Edit your shell's config file to include 'export PATH=$PATH:/path/to/your/android-sdk/platform-tools'
        b. Run 'abd devices' to start abd server, and display all attached devices
    
    8. If on MacOS, install xcode
        a. run 'xcode-select --install' to install necessary command-line tools
        b. run 'xcrun simctl list devices' to get each simulator device along with device name, UUID, status
            i. Take note of the UUID, will be used in step 9
    
    9. Install native app on devices 
        a. For android, drag and drop .apk file onto emulator
        b. For iOS, run 'xcrun simctl install <device_UUID> <path_to_app_file>' (uuid from step 8)


    Links for reference:     
        For online documentation on Appium installation: https://appium.io/docs/en/2.0/quickstart/install/
        For youtube video on installing Appium with wdio: https://www.youtube.com/watch?v=gGzV8-hm8UE


** Running Tests **

Once you have Appium server running and wdio installed, you can run either individual, or suites of tests in the following ways:

    Running individual tests/test files on your machine)
        
        To run targeted tests through the command line, type:
            'npx wdio run ./wdio.conf.js --spec=./tests/specs/my-test-file.js'

    Running all tests
        
        To run all tests through the command line, type:
            'npx wdio run ./wdio.conf.js'
 
        