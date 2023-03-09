function MathOperations(a, b, oper) {
    switch (oper) {
        case '+':
            console.log(a + b);
            break;
    
        case '-':
            console.log(a - b);
            break;

        case '*':
            console.log(a * b);
            break;
        
        case '/':
            console.log(a / b);
            break;

        case '%':
            console.log(a % b);
            break;

        case '**':
            console.log(a ** b);
            break;
    }
}

MathOperations(5, 6, '+');
MathOperations(3, 5.5, '*');