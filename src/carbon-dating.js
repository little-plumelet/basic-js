const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let N = Number(sampleActivity);
  let k = 0.693 / HALF_LIFE_PERIOD;
  let time;
  if (!(typeof sampleActivity === "string") || sampleActivity === undefined) return false;
  else if (isNaN(N) || N <= 0) return false;
  else {
    if (Math.log2(MODERN_ACTIVITY / N) < 0) return false;
    else time = Math.ceil(Math.log2(MODERN_ACTIVITY / N) / k);
  }
  return time;
};
