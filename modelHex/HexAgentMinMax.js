const Agent = require('ai-agents').Agent;
const minMax = require('./minMax.js');
const getEmptyHex = require('./getEmptyHex');
const transposeHex = require('./transposeHex.js')

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
        console.log(nTurn);

        console.log("board_minmax_before_transpose", board);

        if (nTurn % 2 == 1){
            board = transposeHex(board);
            console.log("board_minmax_after_transpose", board);
        }


        return minMax(board, size);
    }
}

module.exports = HexAgent;