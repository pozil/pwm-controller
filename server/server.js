const Winston = require('winston'),
    { PwmDriver } = require('adafruit-i2c-pwm-driver-async'),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    ServoResource = require('./rest/servo.js');


const driver = new PwmDriver({
  address: 0x40,
  device: '/dev/i2c-1',
  debug: true,
  i2cDebug: false,
  isMockDriver: true
});

// Configure logs
Winston.loggers.add('App', {
    console: { level: 'info', colorize: true, label: 'App' }
});
const LOG = Winston.loggers.get('App');

Winston.default.transports.console.level='debug';
Winston.loggers.get('App').transports.console.level='debug';

// Process hooks
process.on('warning', e => console.warn(e.stack));
process.on('unhandledRejection', (reason, p) => {
    LOG.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
});
process.once('SIGINT', () => {
    console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
    driver.stop()
      .then(() => process.exit());
});

// Setup HTTP server
const app = express();
app.set('port', process.env.PORT || 8080);
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
// Setup REST resources
const apiRoot = '/api/';
new ServoResource(app, apiRoot, driver);
// Start HTTP server
app.listen(app.get('port'), () => {
	console.log('Server started on port ' + app.get('port'));
});

driver.init()
  .then(driver.setPWMFreq(50))
  .catch(console.error);
