/**
 * Lista las coordenadas de los hex de un jugador
 * @param {*} board 
 * @param {*} player 
 * @returns 
 */
function playerHexs(board, player){
    let size = board.length;
    let hexs = [];
    for (let k = 0; k < size; k++) {
        for (let j = 0; j < size; j++) {
            if (board[k][j] === player) {
                hexs.push([k,j]);
            }
        }
    }

    return hexs;
}

/**
 * Lista las coordenadas de los Hex de cada jugador
 * @param {*} board
 * @returns
 */
function allPlayerHexs(board){
    let size = board.length;
    let hexs = [[], []];
    for (let k = 0; k < size; k++) {
        for (let j = 0; j < size; j++) {
            if (board[k][j] === '1') {
                hexs[0].push([k,j]);
            }else if(board[k][j] === '2'){
                hexs[1].push([k,j]);
            }
        }
    }

    return hexs;
}

module.exports = playerHexs;