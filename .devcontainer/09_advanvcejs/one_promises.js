/*
callback are functions that are passed as arguments to other functions,which is then invoked inside the other function to complete some kind of routine or action.
callbacks are executed either synchronously or asynchronously.
It is a function that is intended to be executed after some speculation has taken place or certain condition is met.

let value=100
dosomething(()=> {
        value=200
})            //callback function;passed as argument to another function named dosoemthing
console.log(value)
function dosomething(){}
if the function dosomething calls callback synchronously,then our output will be 200.IF the call is asynchronous,the output wil be 100.

if this function gets executed synchronously,so the code gets executed line by line and our answer would be 
 let value=100
 setTimeout( () =>{
     value=300
     //console.log(value)
 },0000)
 console.log(value)
promises = > there are certain code in js that needs to run afterwards and other code execution need not to be blocked.so the code that needs to be executed later is taken in background while other code continues to run.
promises are objects reprsenting the eventual completion or failure of an asynchronous operation.
promise is a returned object to which we attach callback function instead of passing callbacks into a function
when we create a promise in js,we get an object that indicates the success or failure of async operation.
suppose we create a function createSoundAsync() that generates sound asynchronously and has two callback functions => success and fail.success gets executed if audio is generated and if audio is not generated then we execute fail function.
to execute a callback function its reference is passed
syntax
function success(result)
{
    console.log("audio generated")
}
    function fail(error)
    {
    console.log("audio does not generated.")
    }
    createSoundAsync(createAudio,success,fail)
    now if we create createSoundAsync uisng promises then , createSoundAsync(createAudio).then(success(resolve),fail(reject))
*/
//creation of promise
// let promiseOne=new Promise(function (resolve,reject){
//     //do an async task => DB calls,cryptography,network
//     setTimeout(function(){
//         console.log("ASYNC TASK COMPLETED AFTER 2 SECONDS!!")
//         resolve()
//     },2000)
// })
// //consuming promise
// promiseOne.then(function(){
//     console.log("PROMISE CONSUMED.")
// })
//we only get async task completion message,so we have to link then with resolve

//making promise without use of variable
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve()
//         console.log("ASYNC TASK 2 COMPLETED")
//     },2000)
// }).then(function(){
//     console.log("PROMISE CONSUMED!!")
// })
//whenever we pass some data(usually object;pany other thing can also be passed.) inside resolve(),then we get the data as parameter of callback function inside then().
// let promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"krish",email:"123kri@gmail.com"})
//         console.log("ASYNC TASK 3 COMPLETED!")
//     },2000)
// })
// promiseThree.then(function(userDataAsObject){
//     console.log(userDataAsObject)             //data we passed in resolve() automatically gets passed as parameter to function inside then()

// })
let promiseFour=new Promise(function(resolve,reject){
        let error=true;
        if(!error)   //if there is no error (when error= true) then execute it.
        {
            setTimeout(function(){
                resolve({username:"krish",age:20,password:"234@"})
                console.log("ASYNC TASK 4 COMPLETED!")
            },2000)
        }
        else{
            reject(console.error("SORRY:SOMETHING WENT WRONG!"))
        }
})
promiseFour
.then(function(userData){
    //console.log(userData)
    return userData.username          //datab returned in previous then() is passed as parameter to next then().
})
.then(function(userName){
    console.log(`username of user is ${userName}`)
})
.catch(function(error){
    console.log(error)
})
.finally( () => {console.log("promise is either resolved or rejected.")})

const promiseFive = new Promise(function(resolve,reject){
    let error=true;
        if(!error)   //if there is no error (when error= true) then execute it.
        {
            setTimeout(function(){
                resolve({username:"krish",age:20,password:"234@"})
                console.log("ASYNC TASK 4 COMPLETED!")
            },2000)
        }
        else{
            reject(console.error("SORRY:SOMETHING WENT WRONG!"))
        }
})