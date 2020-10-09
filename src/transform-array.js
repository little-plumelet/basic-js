const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!(Array.isArray(arr))) throw error;
  else {
    let res = [];
    let i = 0;
    while (i < arr.length) {
      if (arr[i] !== "--discard-next" && arr[i] !== "--discard-prev" && arr[i] !== "--double-next" && arr[i] !== "--double-prev") {
        res.push(arr[i]);
        i++;
      }
      else if (arr[i] === "--discard-next" && arr[i + 1] !== undefined) {
        i +=2;
      }
      else if (arr[i] === "--discard-prev" && arr[i - 1] !== undefined){
        if (arr[i - 2] !== "--discard-next") {
          res.pop();
          i++;
        }
        else i++;
      }
      else if (arr[i] === "--double-next" && arr[i + 1] !== undefined) {
        res.push(arr[i + 1]);
        res.push(arr[i + 1]);
        i +=2;
      }
      else if (arr[i] === "--double-prev" && arr[i - 1] !== undefined) {
        if (arr[i - 2] !== "--discard-next") {
          res.push(arr[i - 1]);
          i++;
        }
        else i++;
      }
      else i++;
    }
    return res;
  }
};
