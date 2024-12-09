let random = Math.random();
let a= prompt("Enter First:")
let b= prompt("Enter Second:")
let c= prompt("Enter Operator:")
let obj =
{
    "+": "-",
    "*": "+",
    "-":"/",
    "/":"*"
}
if (random>0.1) {
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}
else{
    c=obj[c];
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
}