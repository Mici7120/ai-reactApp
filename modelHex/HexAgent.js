const Agent = require('ai-agents').Agent;
const random = require('./random.js');
const minMax = require('./minMax.js');
const getEmptyHex = require('./getEmptyHex');

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
        console.log("perception", this.perception)
        let board = this.perception;
        let size = board.length;
        let available = getEmptyHex(board);
        let nTurn = size * size - available.length;

        //Primer movimiento
        /*
        if (nTurn == 0) { // First move
            return [Math.floor(size / 2), Math.floor(size / 2) - 1];
        } else if (nTurn == 1) {
            return [Math.floor(size / 2), Math.floor(size / 2)];
        }
        */
        console.log("board_minmax", board);
        let move;

        //Movimiento aleatorio
        //move = random(board, size, available, nTurn);

        //Algoritmo minMax
        /*
        if (nTurn % 2 == 1){
            board = transposeHex(board);
        }
        */
       let tablero = board.slice();
        move = minMax(tablero, size);
        
        return move;
    }
}

module.exports = HexAgent;