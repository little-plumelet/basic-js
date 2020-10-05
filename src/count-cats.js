//const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let i = 0;
  let count = 0;
  while (i < matrix.length) {
    let k = 0;
    while (k < matrix[i].length) { 
      let j = 0;
        if (matrix[i][k] == null || matrix[i][k][j] == null || matrix[i][k][j].length == null) k++;
        else if (matrix[i][k][j] === '^') {
          j++;
          if (matrix[i][k][j] === '^' && j === matrix[i][k].length - 1) {
            count++;
          }
          k++;
          }
        else k++;
    
  }
  i++;
}
  return count;
};
