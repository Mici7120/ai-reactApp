/**
 * Lista los nodos que estan conectados
 * @param {Array} hex Lista de los hex de un jugador
 * @returns
 */
function getConnectedHex(hexs) {
    let connectedHex = [[hexs[0]]]; //Array de Arrays de hex conectados

    if (hexs.length > 1) { //Verifica que hayan mas de 2 nodos
        for (let i = 1; i < hexs.length; i++) { //Recorremos todos los hex del jugados
            let inTheGroup = false;

            for(let group of connectedHex){ //Recorremos cada uno de los grupos
                //Ahora verificamos si el hex es vecino de alguno de los hex del grupo
                //si lo es, se añade al grupo
                for(let a of group){
                    if(isNeighbor(hexs[i], a)){
                        group.push(hexs[i]);
                        inTheGroup = true;
                        break;
                    }
                }
            }
            
            //Si no pertenece a ningun grupo, se agrega como otro
            if(!inTheGroup){
                connectedHex.push([hexs[i]]);
            }
            
        }
    }

    return connectedHex;
}

//console.log(getConnectedHex([[0, 1], [0, 2], [0, 3], [2, 4], [5, 5], [2, 5]]))

/**
 * Compara si los 2 Hex son adyacentes
 * @param {*} hex1 
 * @param {*} hex2 
 * @returns Boolean (Si son adyacentes)
 */
function isNeighbor(hex1, hex2) {
    let hex1Neighbor = hexNeighbor(hex1, 7);
    //console.log(hex1Neighbor);
    let is = false;

    for (let h of hex1Neighbor) {
        if (h[0] === hex2[0] && h[1] === hex2[1]) {
            is = true;
            break;
        }
    }
    /* Implementacion con filter
    hex1Neighbor.filter((item) => {h[0] === hex2[0] && h[1] && hex2[1]})
    */

    return is;
}

/**
 * Retorna las coordenadas de los Hex adyacentes
 * @param {*} hex1 Coordenadas del Hex
 * @param {*} size Tamaño del tablero
 * @returns Coordenadas de los Hex adyacentes
 */
function hexNeighbor(hex1, size) {
    let r = hex1[0];
    let c = hex1[1];

    let neighbors = [];

    //Coordenadas de los hex alrededores
    let neighborsOfHex = [
        [r - 1, c],
        [r - 1, c + 1],
        [r, c + 1],
        [r, c - 1],
        [r + 1, c],
        [r + 1, c - 1]
    ];

    for (let h of neighborsOfHex) {
        if (h[0] >= 0 && h[0] < size && h[1] >= 0 && h[1] < size) {
            neighbors.push(h);
        }
    }

    return neighbors;
}

//console.log(hexNeighbor([6,6], 7)); ok
//console.log(isNeighbor([0, 1], [0, 2]));

module.exports = getConnectedHex, hexNeighbor;