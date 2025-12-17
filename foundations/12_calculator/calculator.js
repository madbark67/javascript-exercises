const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((sum, num) => sum += num, 0);
};

const multiply = function (array) {
  return array.reduce((mult, num) => mult *= num, 1);
};

const power = function (base, expo) {
  return base ** expo;
};

const factorial = function (num) {
  let fact = 1;
  while (num > 1) {
    fact = fact * num;
    num--;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
