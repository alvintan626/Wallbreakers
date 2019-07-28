/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(str) {
  return str.split(" ").map(elem =>(elem.split("").reverse()).join("")).join(" ")
};