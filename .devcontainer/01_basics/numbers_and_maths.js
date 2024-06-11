// let value=1200;
// console.log(typeof value)      //implicit detection of data type.
// let bankBalance=new Number(678906.8990)
// console.log(bankBalance)
// console.log(`type of ${value} created without new is ${typeof value}` )
// console.log(`type of bankBalance created with new Number() is ${typeof bankBalance}`) //when a number is created with new Number(),it creates a number,whose type when checked with typeof operator is an object. 
// console.log(`it is ${typeof value==typeof bankBalance}`)
// let name="hknkn"
//let name1=new String("nandjen")
//console.table([typeof name,typeof name1])
//we have static properties and static methods(functions) that can be used to perform certain actions on numbers.
//static methods
// console.log(value.toString())  //returns a string 
// console.log(value.valueOf())
// console.log(value.toFixed(6))  
// console.log(bankBalance.toFixed(6))    //   -->678906.899000  fulfills the number of digits passed as argument after decimal by using 0
// console.log(bankBalance.toLocaleString("en-IN"))  //puts commas in order to increase readibilty of number.uses international method as default.
// console.log(bankBalance.toExponential())  //converts number to scientific form using e.general form => ae+x --> a*10^x 
// console.log(value.toExponential())
// console.log(value.toPrecision(1))
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//math object
let value1=809.9909;
let value2=890897.9;
//round function
console.log(`3456.9 roundes to nearest integer is ${Math.round(value1)}`)
//floor and ceil
//ceil function --> increases the value before decimal if the decimal is even slightly increased.
//floor --> remains the vale same before decimal if decimal places are not reaching next number.
console.log(`${value1} rounded down to nearest integer is ${Math.ceil(value1)}`)
console.log(`${value2} rounded up to nearest integer is ${Math.floor(value2)}`)
//absolute function (abs())=> gives positive value of a negative number.
console.log(Math.abs(-56))
console.log(Math.abs(577))
//power function syntax =>  pow(x,y) --> x raised to power y is
let base=3,power=2;
console.log(`${base} raised to power ${power} is ${Math.pow(base,power)} `)
//square root function syntax --> sqrt()
console.log(Math.sqrt(48))
//random method --> gives value between 0 and 1.
let min=1000;
let max=9999;
console.log(`4 digit OTP is ${Math.round(min+(max-min)*Math.random())}`)





















































