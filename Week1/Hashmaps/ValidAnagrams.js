/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length){return false}
  let objS = {}
  for (let i = 0; i < s.length; i++){
      objS[s[i]] = (objS[s[i]] || 0 ) + 1
  }
  for (let i = 0; i < t.length; i++){
      if (objS[t[i]] > 0){
          objS[t[i]]--
      }
      else {return false}
  }
  return true
};