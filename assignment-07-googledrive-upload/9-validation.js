// Function to validate email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Function to validate phone number (10-digit format)
function validatePhone(phone) {
    const regex = /^\d{10}$/;
    return regex.test(phone);
}

// Function to validate password (at least 8 characters, one number, one special character)
function validatePassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

// Example usage
const email = "test@example.com";
const phone = "1234567890";
const password = "Test@1234";

console.log(`Email valid: ${validateEmail(email)}`);
console.log(`Phone valid: ${validatePhone(phone)}`);
console.log(`Password valid: ${validatePassword(password)}`);
