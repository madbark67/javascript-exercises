const palindromes = function (word) {
    lower = word.toLowerCase().replaceAll(" ", "").replace(/[^\w\s]|_/g, "");

    let j = lower.length - 1;
    for (let i = 0; i < j; i++) {
        if (lower.charAt(i) != lower.charAt(j)) {
            return false;
        } else {
            j--;
        }
        console.log("I:" + lower.charAt(i));
        console.log("J:" + lower.charAt(j));

    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
