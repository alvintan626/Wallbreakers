/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  if (!M) return 0;
  
  const n = M.length;
  let count = 0;
  
  for (let i=0;i < n;i++) {
      for (let j=0;j < n;j++) {
          if (M[i][j] === 1) {
              count++;
              mark(M, n, i, j);
          }
      }
  }
  return count;
};

const mark = (M, n, i, j) => {
  if (M[i][j] != 1) return;
  
  M[i][j] = 0;
  
  // j is friend of i. find all j's friends and add them to circle
  for (let k = 0;k < n;k++) {
      if (M[j][k] === 1) {
          mark (M, n, j, k);
      }
  }
}