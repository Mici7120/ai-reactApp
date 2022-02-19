const Agent = require('ai-agents').Agent;
const transposeHex = require('./transposeHex');
const playerHex = require('./playerHex.js');
const getConnectedHex = require('./getConnectedHex.js');

class HexAgent extends Agent {
    constructor(value) {
        super(value);
    }

    /**
     * return a new move. The move is an array of two integers, representing the
     * row and column number of the hex to play. If the given movement is not valid,
     * the Hex controller will perform a random valid movement for the player
     * Example: [1, 1]
     */
    send() {
        let board = this.perception;
        let size = board.length;
        let available = getEmptyHex(board);
        let nTurn = size * size - available.length;
        //console.log(board);
        console.log(nTurn);

        let ava = available[Math.round(Math.random() * (available.length - 1))];
        let move = [Math.floor(ava / board.length), ava % board.length];
        if (nTurn == 0) { // First move
            move = [Math.floor(size / 2), Math.floor(size / 2) - 1];
        } else if (nTurn == 1) {
            move = [Math.floor(size / 2), Math.floor(size / 2)];
        }
        console.log("Move:",move)
        
        //Verificamos si estan conectados
        let players = playerHex(board);
        //console.log("Player 1:",players.player1);
        //console.log("Player 2:",players.player2);
        let player1 = getConnectedHex(players.player1);
        let player2 = getConnectedHex(players.player2);
        console.log("Player1 ", player1);
        console.log("Player2 ", player2);

        return move;

    }
}

module.exports = HexAgent;

/**
 * Return an array containing the id of the empty hex in the board
 * id = row * size + col;
 * @param {Matrix} board 
 */
function getEmptyHex(board) {
    let result = [];
    let size = board.length;
    for (let k = 0; k < size; k++) {
        for (let j = 0; j < size; j++) {
            if (board[k][j] === 0) {
                result.push(k * size + j);
            }
        }
    }
    return result;
}
