const add = function(num1, num2) {
	return (num1 + num2)
};

const subtract = function(num1, num2) {
	return (num1 - num2)
};

const sum = function(arrs) {
	let sum = 0
  for (let num of arrs){
    sum += num
  }
  return sum
};

const multiply = function(arrs) {
  let sum = 1
  for (let num of arrs){
    sum *= num
  }
  return sum

};

const power = function(num1, num2) {
	return (num1 ** num2)
};

const factorial = function(num) {
	let sum = 1

  for (x = num; x > 0; x--){
    sum *= x
  }
  return sum
};

factorial(5)
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
