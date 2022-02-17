/**
 * Lista los nodos que estan conectados
 * @param {Array} hex Lista de los nodos de un jugador
 * @returns
 */
function getConnectedHex(hex) {
    let connectedHex = [];

    if (hex.length > 2) { //Verifica que hayan mas de 2 nodos

        for (let i = 0; i < hex.length - 1; i++) {
            let h = hexNeighbor(hex[0]); //Hexs adyacentes al 1 hex
            connectedHex.conc   at(
            h.map((item) => {
                if(item[0] === h[i][0]
                    && item[1] === h[i][1]){
                        return item;
                }
            })
            );
        }
    }


    return connectedHex;
}

/**
 * Compara si los 2 Hex son adyacentes
 * @param {*} hex1 
 * @param {*} hex2 
 * @returns Boolean (Si son adyacentes)
 */
function isNeighbor(hex1, hex2) {
    let hex1Neighbor = hexNeighbor(hex1);
    let is = false;

    for (let h of hex1Neighbor) {
        if (h[0] === hex2[0] && h[1] && hex2[1]) {
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

    let neighbors;

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
        if (row >= 0 && row < size && col >= 0 && col < size) {
            neighbors.push(h);
        }
    }

    return neighbors;
}

module.exports = getConnectedHex;