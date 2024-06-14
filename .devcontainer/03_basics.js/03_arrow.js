//function of this
//this signifies the current context or value of variables.
//in the example mentioned below,the this is used so that it can reflect changes. 
//functions can access keys of objects using this.
// let userInfo={                             //{} points to current context of variable.
//     name:"krish",
//     email:"kris@gmail.com",
//     welcomeMessage:function()
//     {
//         console.log(`${this.name},welcome to website.`)
//         console.log(this)      //prints the current context or values of keys inside the object
//     }

// }
// userInfo.welcomeMessage()
// userInfo.name="ryannn"
// userInfo.email="ryan@gmail.com"
// userInfo.welcomeMessage()

// console.log(this)                // {}  ;  this gives empty object as the current context of global scope is empty.however the result is not same in browser;it does not gives empty object.

//arrow function

// function myFunction()
// {
//     console.log(this)                 //lot of info gets displayed
// }



// function myFunction()
// {
//     let username="krish"
//     console.log(this.username)          //undefined.so this cannot be used within normal functions.
// }
 
// let myFunction = () => {                      //creation of arrow function.
// let username="krish"
// //console.log(this)             //{} gives empty object as output
// console.log(this.username)      //undefined
// }
//so we conclude that this cannot be used inside normal functions as well as functions made using =>(arrow function)//
//myFunction()

//decalaration of functions using arrow
//explicit return    here return keyword is used ; decalred inside {}
// let addThreeNumbers = (num1,num2,num3) => {
// return num1+num2+num3
// }
//console.log(addThreeNumbers(7,5,6)) //126
//explicit return
let addThreeNumbers = (num1,num2,num3) => (num1+num2+num3)
console.log(addThreeNumbers(4,5,6))    






























