/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (matrix.length === 0){return 0}
    let max = 1
    let currentMax = 1
    let checkMatrix = []
    for (let i = 0; i < matrix.length; i++){
        checkMatrix.push([])
        for (let j = 0; j < matrix[i].length; j++){
            checkMatrix[i].push(false)
        }
    }
    
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            max = checkNeighbors(matrix,i,j,checkMatrix,max,currentMax)
            checkMatrix[i][j] = false
            currentMax = 1
        }
    }
    return max
};

let checkNeighbors = function(matrix,i,j,checkMatrix,max,currentMax){
    checkMatrix[i][j] = true
    if (i >= 1 && matrix[i-1][j] > matrix[i][j] && !checkMatrix[i-1][j]){
        currentMax += 1
        max = checkNeighbors(matrix,i-1,j,checkMatrix,max,currentMax)
        currentMax -= 1
        checkMatrix[i-1][j] = false
    }
    if (j >= 1 && matrix[i][j-1] > matrix[i][j] && !checkMatrix[i][j-1]){
        currentMax += 1
        max = checkNeighbors(matrix,i,j-1,checkMatrix,max,currentMax)
        currentMax -= 1
        checkMatrix[i][j-1] = false
    }
    if (i < matrix.length - 1 && matrix[i+1][j] > matrix[i][j] && !checkMatrix[i+1][j]){
        currentMax += 1
        max = checkNeighbors(matrix,i+1,j,checkMatrix,max,currentMax)
        currentMax -= 1
        checkMatrix[i+1][j] = false
    }
    if (j < matrix[i].length - 1 && matrix[i][j+1] > matrix[i][j] && !checkMatrix[i][j+1]){
        currentMax += 1
        max = checkNeighbors(matrix,i,j+1,checkMatrix,max,currentMax)
        currentMax -= 1
        checkMatrix[i][j+1] = false
    }
    if (currentMax > max){
        max = currentMax
    }
    return max
}