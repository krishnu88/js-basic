//datatypes are classified into two types--->primitive and non primitive.
//this classification is based on how data is stored in memory and how data is accessed from memory.
//primitive data types => number,string,boolean,undefined,null,symbol,BigInt
let email="rya1n123@gmail.com";
const character=100
const id1=Symbol(190);
const id2=Symbol(190);
let level=23;
let lifesOfCharacter=3
let isLoggedIn=true;
let bigValue=4567898090800n;
let status;  //undefined
let vague=null;
//using typeof operator to tell type of data variable is storing
const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421
console.table([typeof email,typeof bigValue,typeof character,typeof vague,typeof id1,typeof id2,typeof level,typeof lifesOfCharacter,typeof isLoggedIn,typeof status])
//non-primitive datatypes => object,array,function
let myFirstObject={
    nameOfCricketer:"Virat Kohli",
    ageOfCricketer:35,

}    //key-value pair are used within {} to make object in js     syntax-->key:value,_ _ _ _ _
console.log(myFirstObject) 
let cricketers=["Virat Kohli","Sachin Tendulkar","Ms Dhoni","Rohit Sharma"]  //array
console.log(cricketers)
const myFirstFunction=Function()
{
    console.log("hello")
}
console.table([typeof myFirstObject,typeof myFirstFunction,typeof cricketers])
let myYoutubeChannel="krish"
let nextYoutubeChannel=myYoutubeChannel
nextYoutubeChannel="krishnu"
console.log(myYoutubeChannel)      //copy gets created so no change in original value.
console.log(nextYoutubeChannel)
let user1={
    name:"krish",
    age:20
}
let user2=user1
user2.name="ryan"
console.log(user1.name)
console.log(user2.name)

















