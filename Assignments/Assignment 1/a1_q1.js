// Q1 - Write a program to find whether a given year is a leap year or not.

function isLeapYear(year) {
  if (year % 400 === 0) return true;
  else if (year % 100 === 0) return false;
  else if (year % 4 === 0) return true;
  else return false;
}

let year = 2000;

if (isLeapYear(year)) console.log(`${year} is a leap year.`);
else console.log(`${year} is not a leap year.`);
