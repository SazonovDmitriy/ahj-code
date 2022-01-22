const fieldSize = 4;

function board() {
    const newBoard = [];

    for (let i = 0; i < fieldSize; i += 1) {
        newBoard[i] = [];
        for (let j = 0; j < fieldSize; j += 1) {
            newBoard[i][j] = '';
        }
    };
    return newBoard;
}