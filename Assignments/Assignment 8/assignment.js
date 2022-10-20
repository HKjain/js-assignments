// Q1 - No duplicates can not be there in set

// Q2
// a)
const set1 = new Set();
// b)
set1.add(5);
set1.add(6);
set1.add(7);
set1.add(8);
// c)
set1.delete(7);

// Q3
const newSet = new Set();
newSet.add(2);
newSet.add(6);
newSet.add(7);
newSet.add(8);

console.log(newSet.has(8));
