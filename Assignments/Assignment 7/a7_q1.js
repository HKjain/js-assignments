function convertTruncate(input, length) {
  if (input.length <= length) return input;

  return input.slice(0, length) + "...";
}

let input = "Ice";
let length = 4;

console.log(convertTruncate(input, length));
input = "Icecream";
console.log(convertTruncate(input, length));
