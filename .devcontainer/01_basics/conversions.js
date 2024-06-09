/* let score="90" 
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
let a=334
let aInString=String(a)
console.log(aInString)
console.log(typeof aInString)
*/
// **********operations*************
/*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**4)   //exponent operator --> used in evaluating powers
console.log(2/4)   //divide operator -->gives quotient
console.log(2%4)  //modulus operator -->gives remainder
*/
console.log("1"+"2")  
console.log("1"+ 2)          // -->12  number converted to string
console.log(1 + "2")         // --> 12  number converted to string
console.log("1+2"+4)         //  -->1+24
console.log(1+2+"3")         //1 and 2 is added to give 3,then 3 is joined with 3 to give 33
console.log("1"+2+3)        //1,2 and 3 are joined together to give 123
console.log(1+"2"+3)
console.log(1+"2"+3+4)
console.log(1+2+"3"+4)
console.log(1+"2"+3+4+5)
console.log(1+2+"3"+4+5)
console.log(1+2+3+"4"+5)
console.log(1*2+3+"4"+"5"+6+7+"8"+"9")
console.log(110+"110")
console.log(110+110+"220")
// we add the previous terms till a string value is encountered.after that,we simply joined the sum obtained with other values;doesnt matter that values are string or numerical
console.log(1+2+3+4+5+" 14"+" 13"+12+11+"10")
let typ="123"
console.log(+"abc")
let name;
console.log(typeof name)