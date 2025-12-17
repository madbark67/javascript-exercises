const removeFromArray = function(arr, ...num) {
    let finalAns;
    finalAns = arr.filter((arrItem) => {
        return !num.includes(arrItem);
    });
    console.log(finalAns);
    return finalAns;
};

// Do not edit below this line
module.exports = removeFromArray;
