/*
Write a javascript function find_largest to return the nth largest number in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]
*/
function find_largest(array, n) {
  const cpy = [...array];
  cpy.sort((a, b) => b - a);
  return cpy[n - 1];
}

const array = [3, 45, 6, 7, 23, 5, 7, 8];
const n = 3;
console.log(`Largest ${n} number in the array is: ${find_largest(array, n)}`);
