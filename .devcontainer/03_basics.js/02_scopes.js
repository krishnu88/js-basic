//scope explanation in js
//global scope
// let a=100
// const b=200
//var c=300

// console.log(`value of a is ${a}`)
// console.log(`value of b is ${b}`)
// console.log(`value of c is ${c}`)
// if(!false)
//     {//local scope
//         let a=10
//         const b=20
//         console.log(`value of a inside block scope is ${a}`)
//         console.log(`value of b inside block scope is ${b}`)
//     }
//     console.log(a)          //100 as scope of a gets finished inside {}
//     console.log(b)          //200 as scope of b gets finished inide {}. 
//       //answer is 30 as value of 300 gets overwritten by 30.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//scope within nested fucntions

//function retriveInfo()
// {

//     let outerName="ryan"
//     function retriveName() //child function;scope gets finished
//     {
        
//         let username="kris12345"
//         console.log(username)     //doesnt gives error as scope is within function only in which it is used.
//         console.log(outerName)    //no error as its scope is global for child functions. 
//     }

//     function retriveAge()  //child function;scope gets finished
//     {
//         let age=23
//         console.log(outerName)

//     }
     
//      retriveName()  //gives error as username scope is only within retriveName
//      //retriveAge()     //error
//     retriveAge()        //now no error
//     }
   
//retriveInfo()         //gives error as username scope is within function retriveName only.

//mini hoisting

//different methods of declaring functions

printNumber(5)            // no error  =>    when function is defined without using variable,then it can also be executed before its defination
function printNumber(num)
{
    console.log(num)
}
printNumber(10)

funtionUsingVariable(12)  //  // gives error as it has not been initialised before using it. =>    when function is defined using variable,then it cannot be executed before its defination(As variables cannot be used before their declaration)
let funtionUsingVariable= function(num)
{
    console.log(num)
}
funtionUsingVariable(16)


