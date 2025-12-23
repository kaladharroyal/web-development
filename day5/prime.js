function isPrime(num) {
  if (num <= 1) return false;        // 0, 1, negatives are not prime
  if (num === 2) return true;        // 2 is prime
  if (num % 2 === 0) return false;   // even numbers > 2 are not prime

  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
    console.log("Not prime")

    }
  }
console.log("prime")
}
n = prompt("Enter the number")
console.log(isPrime(n)); // false
