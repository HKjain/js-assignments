// Q2 - Write a program to find whether a given number is armstrong number or not.

function isArmstrong(n) {
  const cpy = n;
  let cur = 0;
  while (n) {
    const rem = n % 10;
    cur += rem * rem * rem;
    n -= rem;
    n /= 10;
  }
  return cur === cpy;
}

let vals = [370, 153, 372];
for (let i = 0; i < vals.length; i += 1) {
  const num = vals[i];
  if (isArmstrong(num)) console.log(`${num} is an Armstrong number.`);
  else console.log(`${num} is not an Armstrong number.`);
}
