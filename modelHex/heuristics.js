const { min } = require('lodash');
const getConnectedHex = require('./getConnectedHex.js');

/**
 * Calcula el valor de la heuristica
 * dependiendo de los hex conectados que estan en cada fila o columna (depende del objetivo jugador)
 * debe haber en cada fia o columna, un hex conectado con los demas
 * @param {Matrix[2]} groupConnectedHexs 
 * @param {int} size
 */
function heuristics(groupConnectedHexs, size){
    //Se verifica, en los grupos de hex conectados, que haya un hex en cada fila o columna
    let heuristic = [];

    //Se halla la heuristica de cada uno de los grupos de hex conectados
    for(let g of groupConnectedHexs){ //Recorremos los grupos de hex conectados
        let NHeuristic = size;

        for(let c of g){
            for(let i = 0; i < size; i++){ //Verificamos que haya almenos un hex en cada columna
                if(c[1] == i){ //Si hay un hex en la columna
                    NHeuristic --;
                    break;
                }
            }
        }
        heuristic.push(NHeuristic);
    }

    
    return min(heuristic);

}

//let connected = getConnectedHex([[0, 1], [0, 2], [0, 3], [2, 4], [5, 5], [2, 5]]);
//console.log("Hex conectados", connected);

//let heuristica = heuristics(connected, 7);
//console.log("Heuristica: ", heuristica);