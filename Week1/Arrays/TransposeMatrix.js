/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(arr) {
  let transposed = []
  for (let i = 0; i < arr[0].length; i++){
      let temp = []
      for (let j = 0; j < arr.length; j++){
          temp.push(arr[j][i])
      }
      transposed.push(temp)
  }
  
  return transposed
};