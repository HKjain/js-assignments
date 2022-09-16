function factorial(n) {
  let ans = 1;
  for (let i = 1; i <= n; i += 1) {
    ans *= i;
  }
  return ans;
}

function isPrime(n) {
  if (n == 1) return false;
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

function prime(a, b) {
  for (let i = a; i <= b; i += 1) {
    if (isPrime(i)) {
      console.log(`Factorial of ${i} is ${factorial(i)}`);
    }
  }
}

prime(1, 100);
