showPrimes(n);
var n;
do {
    n = parseFloat(prompt("Enter a positive integer:", "0"));
} while (isNaN(n) || n <= 0 || !Number.isInteger(n));

function showPrimes(n) {
    const primeNum = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primeNum.push(i);
        }
    }
    alert("For n = " + n + ", the prime numbers are:\n" + primeNum.join(","));
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

showPrimes(n);


