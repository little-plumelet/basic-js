const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
let object = {};
object.turns = Math.pow(2, disksNumber) - 1;
object.seconds = Math.floor(object.turns / (turnsSpeed / 3600));
return object;
};
