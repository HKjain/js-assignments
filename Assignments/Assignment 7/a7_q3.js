function swapWords(input) {
  return [...input.split(" ")].reverse().join(" ");
}

let input = "Hii Boy";
console.log(swapWords(input));
input = "Hello World";
console.log(swapWords(input));
