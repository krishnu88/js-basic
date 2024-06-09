let score="90" 
console.log(typeof score)
let numberScore=Number(score);
console.log(typeof numberScore)
console.log(numberScore)
// string(only of numbers) => number using Number() function
let marks="900pqr"   //not a number
console.log(typeof marks)
let numberMarks=Number(marks)
console.log(typeof numberMarks)    //conversion will result in number
console.log(numberMarks)           //since data to be converted was not a proper number,so type of converted data is NaN i.e is not a number.
//string(numbers+alphabets) => number using Number() function.however , type of converted data is NaN

//boolean to number conversion

let isLoggedIn=true
console.log(typeof isLoggedIn)
let numberIsLoggedIn=Number(isLoggedIn)
console.log(typeof numberIsLoggedIn)
console.log(numberIsLoggedIn)
// boolean => number using Number() function. true-->1;false-->0 
//number to boolean conversion
let a=1
let b=Boolean(a)
console.log(b)
console.log(typeof b)
//number present (or 1) => true 
//number not present (or 0)=> false

//string to boolean
let c="krish"
let nameInBoolean=Boolean(c)
console.log(nameInBoolean)
//empty string => false using Boolean()  function
//non-empty string => true using Boolean() function