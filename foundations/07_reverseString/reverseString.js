const reverseString = function (word) {
    let newWord = "";
    for (let i = word.length-1; i >= 0; i--) {
        newWord = newWord.concat(word.charAt(i));
    }

    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
