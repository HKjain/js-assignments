/*
Q1 - Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10
*/

function printLoop(n) {
  let i = 1;
  for (let j = 1; j <= n; j += 1) {
    let vals = [];
    for (let k = 1; k <= j; k += 1) {
      vals.push(i++);
    }
    console.log(vals.join(" "));
  }
}

printLoop(4);
