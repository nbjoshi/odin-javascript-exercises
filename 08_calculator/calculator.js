const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
  let sum = 0;
  for (num of numbers) {
    sum += num;
  }
  return sum;
};

const multiply = function(numbers) {
  let result = 1;
  for (num of numbers) {
    result *= num;
  }
  return result;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let sum = 1;
  let number = a;
  while (number > 0) {
    sum *= number;
    number--;
  }
  return sum;
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
