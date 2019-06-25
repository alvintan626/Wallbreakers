/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    
  let res = []
  
  for (let i = left; i <= right; i++ ){
      let temp = i.toString()
      if (i % 10 === 0){continue}
      for (let j = 0; j < temp.length; j++){
          if (i % parseInt(temp[j]) !== 0){
              temp = false
              break;
          }
      }
      if (temp !== false){res.push(i)}
  }
  return res
};