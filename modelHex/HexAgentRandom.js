const Agent = require('ai-agents').Agent;
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
        let board = this.perception;
        let size = board.length;
        let available = getEmptyHex(board);
        let nTurn = size * size - available.length;
        
        //console.log("random_board", board)
        let ava = available[Math.round(Math.random() * (available.length - 1))];
        let move = [Math.floor(ava / board.length), ava % board.length];
        //console.log("random_move:",move)
        return move;
    }
}

module.exports = HexAgent;