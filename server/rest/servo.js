const Servo = require('../model/servo.js');

function ServoResource(app, apiRoot, driver) {
  this.driver = driver;
  const resourceUrl = apiRoot +'servo';
  
  app.put(resourceUrl, (request, response) => {
    Servo.update(this.driver, request.body)
      .then(() => response.status(200).send({}))
      .catch(e => logAndReportError(response, 'Servo.update', e));
	});
}

module.exports = ServoResource;

logAndReportError = (response, calledMethod, e) => {
  console.error(calledMethod, e.stack);
  response.status(500).json(e);
}
