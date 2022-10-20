function removeSpaces(input) {
  return input.split(" ").join("");
}

let input = "Hello world";
console.log(removeSpaces(input));
input = "Hello world three";
console.log(removeSpaces(input));
