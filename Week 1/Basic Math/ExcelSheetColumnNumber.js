/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(str) {
    
  let sum = 0
  let multiplier = 1
  for (let i = str.length - 1; i >= 0 ; i--){
      sum += multiplier * (str[i].charCodeAt() - 64)
      multiplier *= 26
  }
  return sum
};