# PWM Controller

Node.js React app that lets you control 6 servos connected to a Raspberry Pi PWM Hat.<br/>
The app leverages the following [driver](https://github.com/pozil/adafruit-i2c-pwm-driver) to control the PWM Hat via the i2c protocol.

<p align="center">
    <img src="screenshots/slider-view.png" alt="PWM controller app screenshot"/>
</p>

## Installation
Before installing the app you need to **enable i2c on the Raspberry Pi**.<br/>
Follow [these steps](http://ozzmaker.com/i2c/) to enable it while ignoring the Python related instructions: you do not need to install `libi2c-dev` and `python-smbus` (first and last set of instructions).

The app can **only be installed or built on a Raspberry Pi**. Installing it or building it in any other environement will fail due to the lack of i2c support.

Run this command build the app:<br/>
`npm install && npm run build`

Run this command to start the app:<br/>
`npm start`

You can then access the app using a web browser:<br/>
`http://RASPBERRY_PI_IP:8080/`
