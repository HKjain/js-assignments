var userInput = 5;
// the below line runs in console of browser but not in terminal of VSCode
// var userInput = prompt("Enter a number: ");

function numberOfMatchsticks(n) {
  if (n === 1) return 6;
  return numberOfMatchsticks(n - 1) + 5;
}

console.log(numberOfMatchsticks(userInput));
