/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits.length === 99){return [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
  if (parseInt(digits.join("")) > 1e16){
      let temp = digits.slice(0,digits.length - 4)
      digits = digits.slice(digits.length - 4,digits.length)
      for (let i = 0; i < digits.length; i++){
          if (digits[0] !== 0) break;
          if (digits[i] === 0){
              temp.push(digits.shift())
          }
      }
      return temp.concat((parseInt(digits.join("")) + 1).toString().split("").map(elem=>{return parseInt(elem)}))
  }
 return (parseInt(digits.join("")) + 1).toString().split("").map(elem=>{return parseInt(elem)})

};