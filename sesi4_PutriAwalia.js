function calculator(angka1, angka2, angka3, operation) {
    let result;

    switch (operation) {
        case '+':
            result = angka1 + angka2 + angka3;
            break;
        case '-':
            result = angka1 - angka2 - angka3;
            break;
        default:
            result = "Invalid operation";
            break;
    }

    return result;
}

console.log(calculator(10, 6, 8, '+'));
console.log(calculator(8, 2, 11, '-')); 
console.log(calculator(1, 4, 19, '')); 