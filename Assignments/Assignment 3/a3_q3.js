// Q3 - Write a program to find whether a given number is special number or not

function factorial(n) {
  let ans = 1;
  for (let i = 1; i <= n; i += 1) {
    ans *= i;
  }
  return ans;
}

function isSpecial(n) {
  const cpy = n;
  let cur = 0;
  while (n) {
    const rem = n % 10;
    cur += factorial(rem);
    n -= rem;
    n /= 10;
  }
  return cur === cpy;
}

let vals = [370, 153, 145];
for (let i = 0; i < vals.length; i += 1) {
  const num = vals[i];
  if (isSpecial(num)) console.log(`${num} is a Special number.`);
  else console.log(`${num} is not a Special number.`);
}
