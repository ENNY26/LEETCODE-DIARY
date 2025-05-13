var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    const backtrack = (row, col, index) => {
        if (index === word.length) return true;

        if (
            row < 0 || col < 0 ||
            row >= rows || col >= cols ||
            board[row][col] !== word[index]
        ) return false;

        const temp = board[row][col];
        board[row][col] = '#';  

        const found =
            backtrack(row + 1, col, index + 1) ||
            backtrack(row - 1, col, index + 1) ||
            backtrack(row, col + 1, index + 1) ||
            backtrack(row, col - 1, index + 1);

        board[row][col] = temp; 
        return found;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (backtrack(r, c, 0)) return true;
        }
    }

    return false; 
};
