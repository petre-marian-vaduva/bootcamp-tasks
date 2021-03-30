function calculator(number1, number2, operator) {
    let message = "";
    switch (operator) {
        case "+": 
        message = number1 + number2;
        break;
        case "-": 
        message = number1 - number2;
        break;
        case "*": 
        message = number1 * number2;
        break;
        case "/": 
        message = number1 / number2;
        break;
        case "%": 
        message = number1 % number2;
        break;
        default:
        message = "Not valid input..."
    }
    console.log(message);
}