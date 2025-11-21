const sumAll = function(floor, ceil) {
    if (!Number.isInteger(floor) || !Number.isInteger(ceil) || floor < 0 || ceil < 0) {
        return "ERROR";
    }

    if (floor>ceil) {
        let temp = ceil;
        ceil = floor;
        floor = temp;
    }
    let sumAns = 0;
    for (let i = floor; i <= ceil; i++) {
        sumAns = sumAns + i;
    }
    return sumAns;
};

// Do not edit below this line
module.exports = sumAll;
