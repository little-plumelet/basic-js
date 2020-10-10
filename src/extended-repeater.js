const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let i = 1;
  let res = "";
  str = String(str);
  
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1; 
  }
    while (i <= options.repeatTimes) {
      let j = 1;
      let string = "";
      if (options.additionRepeatTimes === undefined && options.addition !== undefined) {
          string = String(options.addition);
      }
      else {
        while (j <= options.additionRepeatTimes) {
          if (j != options.additionRepeatTimes) {
            if (options.addition === undefined) {
                if (options.additionSeparator === undefined)
                {
                  string += "|";
                }
                else {
                  string += options.additionSeparator;
                }
            }
            else {
            string += String(options.addition) + options.additionSeparator;
            }
          }
          else {
            string += String(options.addition);
          }
          j++;
        }
      }
      
      if (i != options.repeatTimes) {
        if (string != "") {
          res += str + string + options.separator;
        }
        else if (options.separator === undefined) {
          res += str + "+";
        }
        else {
          res += str + options.separator;
        }
      }
      else {
        res += str + string;
      }
      i++;
    }
    return res;
  };
  