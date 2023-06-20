function sumOfPrimes(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
    return sum;
}
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
}
function showResults(a, b) {
    let sum = sumOfPrimes(a, b);
    document.getElementById("results").innerHTML = "Tổng các số nguyên tố giữa " + a + " và " + b + " bằng " + sum;
}