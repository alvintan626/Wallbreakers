/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  return (x ^ y).toString(2).split("").filter(elem=> elem === "1").length
};