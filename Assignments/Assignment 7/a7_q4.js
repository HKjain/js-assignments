function replaceCharacter(input) {
  return input.replaceAll("a", "x");
}

let input = "apple";
console.log(replaceCharacter(input));
input = "apple and banana";
console.log(replaceCharacter(input));
