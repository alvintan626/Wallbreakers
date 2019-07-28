/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a,b)=>(a-b))
    s = s.sort((a,b)=>(a-b))
    let res = 0
    let gCount = 0
    let sCount = 0
    while (gCount < g.length && sCount < s.length){
        if (s[sCount] >= g[gCount]){res++; sCount++;gCount++}
        else sCount++
    }
    return res
};