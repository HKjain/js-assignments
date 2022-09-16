// Q2 - Write a JavaScript program to convert temperatures to and from Celsius to Fahrenheit.

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) / 9) * 5;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

let celsius = 60;
let fahrenheit = 45;
console.log(`${celsius}°C is ${toFahrenheit(celsius)}°F`);
console.log(`${fahrenheit}°F is ${toCelsius(fahrenheit)}°C`);
