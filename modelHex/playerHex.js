/**
 * Lista las coordenadas de los Hex de cada jugador
 * @param {*} board 
 * @returns 
 */
function playerHex(board){
    let size = board.length;
    let hex = {player1 : [],
                player2 : []};
    for (let k = 0; k < size; k++) {
        for (let j = 0; j < size; j++) {
            if (board[k][j] === '1') {
                hex.player1.push([k,j]);
            }else if(board[k][j] === '2'){
                hex.player2.push([k,j]);
            }
        }
    }

    return hex;
}

module.exports = playerHex;