/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(arr) {
  let odds = []
  let evens = []
  for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 0){evens.push(arr[i])}
      else{odds.push(arr[i])}
  }
  return evens.concat(odds)
};