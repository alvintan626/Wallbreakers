/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(arr) {
    
  for (let i = 0; i < arr.length; i++){
      flip(invert(arr[i]))
  }
  return arr
};

function flip(arr){
  for (let i = 0; i < Math.floor(arr.length/2); i++){
      let temp = arr[i]
      arr[i] = arr[arr.length-1-i]
      arr[arr.length-1-i] = temp
  }
  return arr
}

function invert(arr){
  for (let i = 0; i < arr.length; i++){
      if (arr[i] === 0){
          arr[i] = 1
      }
      else {arr[i] = 0}
  }
  return arr
}