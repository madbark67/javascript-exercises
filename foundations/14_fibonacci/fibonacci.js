const fibonacci = function (times) {
    times = Number(times);
    if (times < 0) {
        return "OOPS";
    }
    let fib = 0;
    let count = 0;
    let lastAnswer = 0;
    let lastAnswerTwo = 1;
    while (count < times) {
        fib = lastAnswer + lastAnswerTwo;
        lastAnswerTwo = lastAnswer;
        lastAnswer = fib;

        count++;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
