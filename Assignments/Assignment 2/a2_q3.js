//Q3 - Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

let ans = 0;
for (let i = 1; i < 1000; i += 1) {
  if (i % 3 === 0) ans += i;
  if (i % 5 === 0) ans += i;
  if (i % 15 === 0) ans -= i;
}

console.log(`Sum of multiples of 3 and 5 under 1000 is: ${ans}`);
