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

