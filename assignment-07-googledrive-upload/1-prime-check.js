// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false; // Numbers less than 2 are not prime
    
    for (let i = 2; i <= Math.sqrt(num); i++) { // Loop from 2 to square root of num
        if (num % i === 0) {
            return false; // If divisible, it's not a prime number
        }
    }
    return true; // If no divisor found, it's prime
}

// Example usage
const number = 17; // Change this number to test other values
console.log(`${number} is ${isPrime(number) ? 'a prime' : 'not a prime'} number.`);