/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(str) {
  let vowels = {a:1,e:1,i:1,o:1,u:1,A:1,E:1,I:1,O:1,U:1}
  let stack = []
  for (let i = 0 ; i < str.length; i++){
      if (str[i] in vowels){
          stack.push(str[i])
      }
  }
  str = str.split("")
  for (let i = 0 ; i < str.length; i++){
      if (str[i] in vowels){
          str[i] = stack.pop()
      }
  }
  
  return str.join("")
};