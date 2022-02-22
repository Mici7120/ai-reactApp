const { min } = require('lodash');
const { max } = require('lodash');
const heuristics = require("./heuristics.js");
const getEmptyHex = require("./getEmptyHex.js");
const goalTest = require('./goalTest.js')

function minMaxAlphaBeta(board, size){
    let move;

    move = maxPlay(board, [0, 0], '1', 4);

    return move[0];
}

function maxPlay(board, play, player, depth){
    let bestMove = [];
    let bestValue = -100;
    let alpha = -200;
    let beta = 200;

    if(goalTest(board)){
        return [play, -100];
    }

    if(depth < 1){
        return [play, heuristics(board, player, board.length)];
    }
    
    for(let i of emptyHex(getEmptyHex(board), board.length)){
        let boardM = newBoard(board, i, player);
        if(player === '1'){
            player = '2'
        }else{
            player = '1';
        }
        let result = minPlay(boardM, i, player, depth - 1)
        alpha = max([alpha, result[1]]);

        if(alpha >= beta){
            break;
        }

        if(result[1] > bestValue){
            bestValue = result[1];
            bestMove = i;
        }
    }
    return [bestMove, bestValue];
}


function minPlay(board, play, player, depth){
    let bestMove = [];
    let bestValue = 100;
    let alpha = -200
    let beta = 200;


    if(goalTest(board)){
        return [play, 100];
    }

    if(depth < 1){
        return [play, heuristics(board, player, board.length)];
    }
    
    for(let i of emptyHex(getEmptyHex(board), board.length)){
        let boardM = newBoard(board, i, player);
        if(player === '1'){
            player = '2'
        }else{
            player = '1';
        }
        let result = maxPlay(boardM, i, player, depth - 1)
        beta = min([beta, result[1]]);

        if(beta <= alpha){
            break;
        }

        if(result[1] < bestValue){
            bestValue = result[1];
            bestMove = i;
        }
    }
    return [bestMove, bestValue];
}

function newBoard(board, move, player){
    let nBoard = board;
    let row = move[0];
    let column = move[1];
    nBoard[row][column] = player;
    //console.log("nboard", nBoard, player);
    return nBoard;
}

function emptyHex(getEmptyHex, size){
    let result = [];
    for(let i of getEmptyHex){
        result.push([i % size, Math.trunc(i / size)])
    }
    return result;
}

module.exports = minMaxAlphaBeta;