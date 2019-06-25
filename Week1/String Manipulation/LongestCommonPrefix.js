/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  //     if (strs === []){return ""}
  //     console.log(strs)
  //     let i = strs.length - 1
  //     let letterCheck = 0
  //     let answer = ""
  //     let tempCheck = strs[0][0]
      
  //     while (strs[i][letterCheck]){
  //         if (strs[i][letterCheck] !== tempCheck){ return answer}
  //         if (i === 0){
  //             answer += strs[i][letterCheck]
  //             letterCheck++
  //             tempCheck = strs[i][letterCheck]
  //             i = strs.length - 1
  //         }
  //         else {
  //             i--
  //         }
  //     }
  //     return answer
      
      if (strs.length === 0){return ""}
      let answer = ""
      
      let min = strs[0].length
      for (let i = 1; i < strs.length; i++){
          min = Math.min(min,strs[i].length)
      }
      for (let i = 0; i < min ; i++){
          let temp = strs[0][i]
          for (let j = 0; j < strs.length; j++){
              if (strs[j][i] !== temp){
                  return  answer
              }
          }
          answer += strs[0][i]
      }
      return answer
  };