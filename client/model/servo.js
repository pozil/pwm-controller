import BaseModel from './base-model';

const RESOURCE_URL = '/api/servo';

export default class Servo extends BaseModel {
  static update(servo) {
    return super.update(RESOURCE_URL, servo);
  }
}
