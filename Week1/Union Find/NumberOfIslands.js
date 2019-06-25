/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0

  for (let i = 0 ; i < grid.length; i++){
      for (let j = 0; j < grid[i].length; j++){
          if (grid[i][j] === "0" || grid[i][j] === 2){continue}
          checkIsland(i,j,grid)
          count++
      }
  }
  return count
};

var checkIsland = function(row,col,board){
  board[row][col] = 2
  if (col+1 < board[row].length && board[row][col+1] === "1"){checkIsland(row,col+1,board);}
  if (row+1 < board.length && board[row+1][col] === "1"){checkIsland(row+1,col,board); }
  if (col-1 >= 0 && board[row][col-1] === "1"){checkIsland(row,col-1,board);}
  if (row-1 >= 0 && board[row-1][col] === "1"){checkIsland(row-1,col,board); }
}