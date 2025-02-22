// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Example usage
let celsius = 25;
console.log(`${celsius}°C = ${celsiusToFahrenheit(celsius)}°F`);

let fahrenheit = 77;
console.log(`${fahrenheit}°F = ${fahrenheitToCelsius(fahrenheit)}°C`);
