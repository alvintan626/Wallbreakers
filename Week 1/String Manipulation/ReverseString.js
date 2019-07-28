/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(str) {
  for (let i = 0; i < Math.floor(str.length/2); i++){
      let temp = str[i]
      str[i] = str[str.length - 1 - i]
      str[str.length-1-i] = temp
  }
  return str
};