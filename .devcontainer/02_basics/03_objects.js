//objects in js
//objects are combination of key-value pairs;where key is a unique string and value can be any data type,including array,objects,functions etc.It is a very important data structure in js.
//creation of objects => 2 methods 
 //method 1 using constructor => creates singleton object 
 //object.create()
//method 2 => using literal  does not results in singleton object.
//accessing elements of object.
//two methods
//method 1 => using dot(.) operator
// console.log(`name of user is ${userInfo.name}`)
// console.log(`email of user is ${userInfo.email}`)
// console.log(`age of user is ${userInfo.Age}`)
// //method 2 using [] => less frequently used ; in special cases when our string has spaces.
// //console.log(userInfo[name]) gives error,so we have to give key to be accessed inside "".
// console.log(`element of object accessed using [] ${userInfo["name"]}`)
// // console.log(userInfo.full name)   => gives error as full name has to be mentioned inside [""].it cannot be accessed by (.) operator.
// console.log(userInfo["full name"])
//using symbol inside object
let mySymbol= Symbol("key1")
let userInfo={
    name:"Krish",
    [mySymbol]:"my symbol",
    "full name":"Krish Arora",
    Age:20,
    email:"kris@gmail.com",
    isLoggedIn:true,
    lastLoggedIn:["tuesday","friday"]
}
console.log(userInfo)
//changing value of object elements
//console.log(userInfo.email="kri123@gmail.com")
//console.log(userInfo)
//disallowing changing of elements of object. this can be done by freezing the object.
//console.log(userInfo)
userInfo.greeting=function()
{
    console.log(`hello js user, ${userInfo.name}`)
}
console.log(userInfo.greeting())
 



