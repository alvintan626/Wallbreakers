/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(str) {
  str = str.toLowerCase()
  let revisedStr = ""
  for (let i = 0; i < str.length; i++){
      if (str[i] === " "){continue}
      let temp = str[i].charCodeAt()
      if (temp < 48 || temp > 122 || temp > 57 && temp < 97){continue}
      else {revisedStr += str[i]}
  }
  for (let i = 0; i < Math.floor(revisedStr.length/2); i++){
      if (revisedStr[i] !== revisedStr[revisedStr.length - 1 - i]){return false}
  }
  return true
};