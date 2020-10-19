const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  staticField = true;

  constructor(tr){
    if(tr === false){
      this.staticField = false;
    }
    else this.staticField = true;
  }

  encrypt(message, key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here

    let encryptedMessage = "";
    let i = 0;
    let j = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    while (i < message.length) {
      if (j === key.length) j = 0;
      if (! (message[i] <= "Z" && message[i] >= "A")) {
        encryptedMessage += message[i];
        i++;
      }
      else {
      encryptedMessage += String.fromCharCode(65 + ((message.charCodeAt(i) - 65 + key.charCodeAt(j) - 65) % 26));
      i++;
      j++;
      }
    }
    if (this.staticField === false) {
      i = 0;
      let revertedEncryptedMessage = "";
      while (i < encryptedMessage.length) {
        revertedEncryptedMessage += encryptedMessage[encryptedMessage.length -1 - i];
        i++;
      }
      return revertedEncryptedMessage;
    }
    return encryptedMessage;
  }    
  decrypt(encryptedMessage, key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    key = key.toUpperCase();
    let decryptedMessage = "";
    let i = 0;
    let j = 0;
    while (i < encryptedMessage.length) {
      if (j === key.length) j = 0;
      if (! (encryptedMessage[i] <= "Z" && encryptedMessage[i] >= "A")) {
        decryptedMessage += encryptedMessage[i];
        i++;
      }
      else {
        let c = (encryptedMessage.charCodeAt(i) - 65 - (key.charCodeAt(j) - 65)) % 26;
        if (c >= 0) decryptedMessage += String.fromCharCode(65 + c);
        else decryptedMessage += String.fromCharCode(91 + c)
        i++;
        j++;
      }
    }
    if (this.staticField === false) {
      i = 0;
      let revertedDecryptedMessage = "";
      while (i < decryptedMessage.length) {
        revertedDecryptedMessage += decryptedMessage[decryptedMessage.length -1 - i];
        i++;
      }
      return revertedDecryptedMessage;
  }
  return decryptedMessage;
}
}

module.exports = VigenereCipheringMachine;
