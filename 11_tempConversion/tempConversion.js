const convertToCelsius = function(temp) {
  ans = (temp - 32) * 5 / 9

  return Math.round(ans * 10) / 10
};

const convertToFahrenheit = function(temp) {
  let ans = temp * 9 / 5 + 32
  return Math.round(ans * 10) / 10
};

convertToFahrenheit(0)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
