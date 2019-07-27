/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    // if touching another, minus 1 point
    // ex touching2,means 4-2 = 2'
    let sum = 0
    for (let i = 0; i<grid.length;i++){
        for (let j = 0; j < grid[i].length ; j++){
            if (grid[i][j] === 1){
                sum += checkValue(grid,i,j)
            }
        }
    }
    return sum
};

var checkValue = function(grid,i,j){
    let count = 4
    if (i >= 1 && grid[i-1][j] === 1){count--}
    if (j >= 1 && grid[i][j-1] === 1){count--}
    if (i < grid.length-1 && grid[i+1][j] === 1){count--}
    if (j < grid[i].length - 1 && grid[i][j+1] === 1){count--}
    return count
}