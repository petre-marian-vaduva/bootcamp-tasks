alert("Hello world!");
console.log("Secret Message")
//single line comment
/*multiple lines
of
comments*/
document.write("<p><b>Secret message</b></p>")

const myFirstVariable = "Secret message";
console.log(myFirstVariable);
alert(myFirstVariable);
document.write("<b>" + myFirstVariable + "</b>");

const firstNumber = 5;
const secondNumber = 9;
document.write("<p>Negation: " + (-firstNumber) + "</p>")
document.write("<p>Addition: " + (firstNumber + secondNumber) + "</p>")
document.write("<p>Substraction: " + (firstNumber - secondNumber) + "</p>")
document.write("<p>Multiplication: " + (firstNumber * secondNumber) + "</p>")
document.write("<p>Dvision: " + (firstNumber / secondNumber) + "</p>")
document.write("<p>Modulus: " + (firstNumber % secondNumber) + "</p>")
document.write(`${firstNumber}` % `${secondNumber}`)

if(secondNumber % 3 === 0){
    document.write("<p>Multiple of three</p>")
}else{
    document.write("<p>Not multiple of three</p>")
}

if(5 % 3 === 0){
    document.write("<p>Multiple of three</p>")
}else{
    document.write("<p>Not multiple of three</p>")
}

const firstName = "Petre-Marian";
const secondName = "Vaduva";
const fullName = firstName + " " + secondName;
document.write("<p>" + (firstName + " " + secondName) + "</p>");
document.write("<p>" + fullName + "</p>");


const bill = 78;
const tip = (bill * 13) / 100;
const total = (bill + tip).toFixed(2);
document.write("<p>Your total bill (£" + bill + "), with tip (£" + tip + "), is £" + total + "</p>")
document.write(`Your total bill (£${bill}), with tip (£${tip}), is £${total}`)