// Function to check if a number is perfect
function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

// Function to find indices of perfect numbers in an array
function findPerfectIndices(arr) {
    return arr.map((num, index) => isPerfect(num) ? index : -1).filter(index => index !== -1);
}

// Example usage
let numbers = [6, 28, 12, 496, 8128, 7];
console.log(`Indices of perfect numbers: ${findPerfectIndices(numbers)}`);
