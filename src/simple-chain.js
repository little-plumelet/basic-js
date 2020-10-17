const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    //throw new CustomError('Not implemented');
    return this.chain.length;
  },
  addLink(value) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (value === null) this.chain.push("null");
    else if (value !== undefined) this.chain.push(value.toString());
    else if (value) this.chain.push(value);
    else this.chain.push(" ");
    return this;
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (Number.isInteger(position - 1)) {
      if (position >= this.chain.length || position < 0) {
        this.chain.length = 0;
        throw error;
      }
      else {
        this.chain.splice(position - 1, 1);
      }
    }
    else {
      this.chain.length = 0;
      throw error;
    }
    return this;
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let i = 0;
    let temp;
    while (i < Math.floor(this.chain.length / 2)) {
      temp = this.chain[i];
      this.chain[i] = this.chain[this.chain.length - 1 - i];
      this.chain[this.chain.length - 1 - i] = temp;
      i++;
    }
    return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let str = '';
    let i = 0;
    while (i < this.chain.length - 1) {
      str += "( " + this.chain[i] + " )" + "~~";
      i++;
    }
    str += "( " + this.chain[i] + " )";
    this.chain.length = 0;
    return str;
  }
};

module.exports = chainMaker;
