function percentageCalculator(number, percentage) {
    let percentageOf = number * percentage / 100;
    return percentageOf;
}

function outputsomething(x) {
    if(x >= 0 && x < 100){
        alert("between 0 and 100")
    }else if(x >= 100 && x <200){
        alert("between 100 and 200")
    }else{
        alert("everything else")
    }
}
outputsomething(29);

function doesSomethingElse(x) {
    switch(x) {
        case 10:
            console.log("x is 10")
        break;
        case 100:
            console.log("x is not 10 but it's 100")
        break;
        default:
            console.log("something else") 
    }
}
doesSomethingElse(10)

function drinkOrder(size, drink) {
    let message = '';
    switch (drink) {
        case 'cola':
            message = drink + ' is amazing! Thanks for ordering a ' + size + ' one!';
            break;
        case 'lemonade':
            message = 'Well done! ' + drink + 'is so fresh! Grab a ' + size + ' one!';
            break;
        case 'orangeade':
            message = 'Whatever, ' + size + ' ' + drink + ' coming up!';
            break;
        default:
            message = 'I have no idea what you are talking about...';
    }
    console.log(message);
}
drinkOrder('small', 'lemonade');
drinkOrder('large', 'cola');
drinkOrder('extra large', 'orangeade');
drinkOrder('extra large', 'red bull');