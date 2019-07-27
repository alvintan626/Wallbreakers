/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0
    let pointer = 0
    while (pointer < t.length){
        if (t[pointer] === s[i]){i++}
        pointer++
    }
    
    return i === s.length ? true : false
};