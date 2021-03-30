function hello(){
    console.log("Hello world!")
}
hello();

function fullName(firstName, lastName){
    var fullName = `${firstName} ${lastName}`
    console.log(fullName)
    return fullName;
}
fullName("Petre-Marian", "Vaduva")

let a = 10
let b = '10'
let c = 5
console.log(`a=${a}, b=${b}, c=${c}`)
console.log('a==b', a==b)
console.log('a===b', a===b)
console.log('a!=b', a!=b)
console.log('a!==b', a!==b)
console.log('a<c', a<c)
console.log('a>c', a>c)
console.log('a<=b', a<=b)
console.log('a>=c', a>=c)