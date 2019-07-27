/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    let checkBoard = []
    for (let i = 0; i < board.length; i++){
        checkBoard.push([])
        for (let j = 0; j < board[i].length; j++){
            checkBoard[i].push(false)
        }
    }
    
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[i].length; j++){
            if (board[i][j] === word[0]){
                let nextLetterIndex = 1
                if (checkNeighbors(board,i,j,word, nextLetterIndex,checkBoard)){return true}
                checkBoard[i][j] = false
            }
        }
    }
    return false
};

let checkNeighbors = function(board,i,j,word,letterIndex,checkBoard){
    checkBoard[i][j] = true
    if (letterIndex === word.length){return true}
    if (i >= 1 && board[i-1][j] === word[letterIndex] && !checkBoard[i-1][j]){
        if (checkNeighbors(board,i-1,j,word,letterIndex + 1,checkBoard)){return true}
        checkBoard[i-1][j] = false
    }
    if (j >= 1 && board[i][j-1] === word[letterIndex] && !checkBoard[i][j-1]){
        if (checkNeighbors(board,i,j-1,word,letterIndex + 1,checkBoard)){return true}
        checkBoard[i][j-1] = false
    }
    if (i < board.length - 1 && board[i+1][j] === word[letterIndex] && !checkBoard[i+1][j]){
        if (checkNeighbors(board,i+1,j,word,letterIndex + 1,checkBoard)){return true}
        checkBoard[i+1][j] = false
    }
    if (j < board[i].length - 1 && board[i][j+1] === word[letterIndex] && !checkBoard[i][j+1]){
        if (checkNeighbors(board,i,j+1,word,letterIndex + 1,checkBoard)){return true}
        checkBoard[i][j+1] = false
    }
    
    
}