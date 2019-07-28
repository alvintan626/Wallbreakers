/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  let power = 0
  let result = 0
  while (result < n){
      result = Math.pow(2,power) 
      if (result === n){return true}
      else {power++}
  }
  return false
};