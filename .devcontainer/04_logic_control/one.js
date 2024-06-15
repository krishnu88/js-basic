//var has global scope
//control logic
//in many a cases , we want to only execute the certain part of code;not the whole code. in this case logic control statements are used.
//if statement
//syntax   =>    if(condition(answer of question) is true){

// }  =   -->  it is assignment operator.

if (false)
{
    console.log("condition is true,so if gets executed.")
}
//operators used for comparison    ==>    <,>,<=,>=,==,!=,===(strich check/hard check/triple eqaulity operator),!==

if(3==="3")                            //no result as triple equality also checks type of data and here type of data is not equal that is numerical and string data type.
    {
        console.log("pagal")
    }
if(3==2)  //which is true as 3 is never equal to 2;so this gets executed ; check for the answer of question;if it is true then only code gets executed.
{
    console.log("execution")
}
let temperature=51
// if(temperature<50)
//     {
// console.log("today temperature is less than 50")
//     }
// console.log("this should not be executed.")    

//if-else
// if(temperature<50)   //false 
//     {
//         console.log("high temperature outside.")
//     }
// else                //true
// {
//     console.log("warning,loo outside!!")
// }
// let score=100
// if(score>=100)
// {
//     let badge="silver"
//     console.log(`congratulations!You have got ${badge} badge`)
// }   //the scope of variable badge is finished as } has ended.
//if we try accessing badge variable,it gives error as its scope is finished.so,we cannot access badge.
//console.log(badge)  error
//var has global scope;variable declared using var can be accessed anywhere inside file code;it doesnt have limitation of scope.
//shorthand notation of if 
//if(100>50)  console.log("true"),console.log("highly unreadable code");
//nesting of if - else if - else
// let balance=249.99999999
// if(balance<250)
//     {
//         console.log("less than 250")
//     }
// else if(balance<500)
//     {
//         console.log("less than 500")
//     }
//     else if(balance<750)
//         {
//             console.log("less than 750")
//         }
//         else if(balance===1000)
//         {
//             console.log("balance is equal to 1000")
//         }
// else      //it will definately work.
// { 
//     console.log("balance is greater than 1000")
// }
//&& and || usage
//true && true  -->  true
//true && false  -->  false
//false && true --> false
//false && false  -->  false
//&& => AND gives true only when conditions on all sides are true. (Sari sides true ho)

// let userLoggedIn=true
// let debitCard=true
// let emailLoginIn=false
// let googleLogIn=true
// if(userLoggedIn && debitCard)
//     {
//         console.log("payment successfull")
//     }
//||
//true || true --> true
//true || false --> true 
//false || true --> true
//false || false --> false
//|| --> OR gives true when condition on either side is true.(koi ek bhi side true to answer true hota hai)
// if(emailLoginIn || googleLogIn)
//     {
//         console.log("user logged in.")
//     }
// else{
//     console.log("please log in to continue.")
// }