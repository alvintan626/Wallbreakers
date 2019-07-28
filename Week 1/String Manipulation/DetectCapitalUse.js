/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word.length <= 1) return true
  word = word.split("")
  let answer = true
  let lowerCount = 0
  if (word[0].charCodeAt(0) > 64 && word[0].charCodeAt(0) < 91 ){
      word.forEach(letter=>{
          console.log(letter, letter.charCodeAt(0))
          if (letter.charCodeAt(0) < 65 || letter.charCodeAt(0) > 90){
              lowerCount++
          }
      })
      if (lowerCount !== word.length - 1 && lowerCount !== 0){
          console.log(lowerCount, lowerCount !== word.length - 2 , lowerCount !== 0)
          answer = false
      }
  }
  else {
      word.forEach(letter=>{
          if (letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91){
              answer = false
          }
      })
  }
  return answer
};