// Define the calculator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Error: Division by zero';
    }
}

// Define the main calculator function
function calculator(a, b, operator) {
    let result;

    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            result = 'Error: Invalid operator';
            break;
    }

    return result;
}

// Example usage
const num1 = 10;
const num2 = 5;
const operator = '/';

const result = calculator(num1, num2, operator);
console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);