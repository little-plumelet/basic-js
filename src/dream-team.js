const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let i = 0;
  let teamName = [];
  if (!(Array.isArray(members))) return false;
  while (i < members.length) {
    if (!(typeof members[i] === "string")) i++;
    else {
      let j = 0;
      while (members[i][j] === " ") {
        j++;
      }
      teamName.push(members[i][j]);
      i++;
    }
  }
  
  let str = "";
  i = 0;
  while (i < teamName.length) {
    str += teamName[i];
    i++;
  }
  str = str.toUpperCase();
  teamName = Array.from(str);
  teamName.sort();
  i = 0;
  str = "";
  while (i < teamName.length) {
    str += teamName[i];
    i++;
  }
  return str;
};
