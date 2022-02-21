const heuristics = require('./heuristics');
const allPlayerHexs = require('./playerHexs.js');
const getConnectedHex = require('./connectedHex.js');

/**
 * Determina cual jugador ha ganado la partida
 * @param {*} board 
 * @returns 
 */
function playerWinner(board){
    let player = 0;

    let players = allPlayerHexs(board);

    console.log(players[0]);
    let player1 = heuristics(players[0], 7);
    let player2 = heuristics(players[1], 7);

    console.log(player1);
    console.log(player2);

    if(player1 == 0){
        console.log("Gana el jugador 1");
        return 1
    }else if(player2 == 0){
        console.log("Gana el jugador 2");
        return 2
    }

    return player;
}

module.exports = playerWinner;