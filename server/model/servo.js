//const db = require('../util/db.js');

module.exports = class Servo {
  
  /**
  * Updates a servo
  */
  static update(driver, servo) {
    return driver.setPWM(servo.id, 0, servo.value);
  }
}
