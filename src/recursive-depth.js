const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
   // throw new CustomError('Not implemented');
    // remove line with error and write your code here

    let count = 1;
    let i = 0;
    while (i < arr.length) {
      if (Array.isArray(arr[i])) {
        let currentCount = 1;
        currentCount += this.calculateDepth(arr[i]);
        if (count < currentCount) count = currentCount;
      }
      i++;
    }
    return count;
  }
}
