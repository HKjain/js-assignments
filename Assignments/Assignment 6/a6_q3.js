/*
Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
*/

function computeDash(n) {
  let ans = "";
  ans += n[0];
  for (let i = 1; i < n.length; i += 1) {
    const cur = n[i];
    const last = n[i - 1];
    if (cur % 2 === 0 && last % 2 === 0) ans += "-";
    ans += cur;
  }
  return ans;
}

console.log(computeDash("025468"));
