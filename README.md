
### Overview
Agoraapp-Poc is an app built by React Native and Agora.io API to build a conference app for android and ios devices.
You need to have installed xcode and Cocoapod to run ios, JDK, android studio to run android.
Refer this link for the environment setup
https://reactnative.dev/docs/environment-setup

After setting up environment and installation you can run the app on simulators or real devices and test the app.
Use the samem channel name for testing video  conference.
The app will ask the user to access devices camera and microphone for the video conference.
If you want to test the app on your pc, you need to configure the simulators to access webcam as a video source.


### Installation

Agoraapp-Poc requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ cd ios
$ pod install
$ npm run start
$ npm run ios : for ios
$ npm run android : for android
```

License
----

MIT
