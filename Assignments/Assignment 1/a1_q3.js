// Q3 - Write a program to find the factorial of a number.
function factorial(n) {
  let ans = 1;
  for (let i = 1; i <= n; i += 1) {
    ans *= i;
  }
  return ans;
}

let n = 5;
console.log(`Factorial of ${n}: ${factorial(n)}`);
