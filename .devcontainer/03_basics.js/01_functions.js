//functions
//functions are used to create a code that can be used again and again by just calling it at the required part,instead of writting the whole code again.so we can increase the productivity and amount of redundant(Repeating) code reduces.
//declaration of object
// function myFirstFunction()              //function prototype   =>    function keyword,name of function,list of parameters inside ()
// {
//     console.log("My name is Krish.")    //defination of function
// }
//function cannot get executed
//myFirstFunction  =>  reference of function
//execution of function
// myFirstFunction()
// myFirstFunction()
// myFirstFunction()
//implcit conversion problem in functions

//function addThreeNumbers(number1,number2,number3)    //parameters => when value is passed in function defination inside ().
//{
  //  console.log(number1+number2+number3)
//}

//execution of function
// addThreeNumbers(3,-5,"6")           // answer -26 => implicit conversion                  //arguments  =>   when value is passed durinf function call inside ().
// addThreeNumbers()                   //NaN
// addThreeNumbers(9)                  //NaN
// addThreeNumbers(9,0,)               //NaN
// //to solve this problem we check the type of value passed while writing defination of function.

//saving of function inside variable

// function addThreeNumbers(number1,number2,number3)    
// {
//   //console.log( number1+number2+number3 )                        //gives undefined as it is not returning a value.
//    return (number1+number2+number3)
//    console.log("heloo")                                         //statements after return cannot be executed.
// }

// let result= addThreeNumbers(6,7,8)                            //now we cannot execute function using its name;we need to use the variable
// //console.log(result)
// //if else usage to avoid unexpected results.

// function userLoggedMessage(n)                              //avoiding undefined as output using if-else
// {
//     if(undefined===n)
//         {
//              return "please enter a username!"
//         }
//         else{
//             return ` ${n},welcome!!`
//         }
// }
// console.log(userLoggedMessage(""))                      //empty string no name
// console.log(userLoggedMessage())                          //username is undefined as nothing is passed as argument,not even empty strings("").
// console.log(userLoggedMessage("Krish"))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//revision of function
function reviseFunction(...num1){
  return num1
}

// console.log(reviseFunction(6))


function addCartPrices(...n1)                      //passing one parameter,but many arguments.
{                                               //use rest operator in this situation,it will convert all values to a array under single variable.
   return n1                
}
// console.log(addCartPrices(200,400,500,600,700))              //200               ;                  [200,400,500,600,700]
// console.log(reviseFunction(688,788,888,988,1088))            //[688,788,888,988,1088]


//creation of object and then passing it
 let gameInfo={
   name:"@kri123",
   id:"#7986",
   isLoggedIn:true,
   lastLevelPassed:5
 }

function handlingObjects(anyObject)               //generic name
{                
    return `username is ${anyObject.name} and game is is${anyObject.id} `
}

 console.log(handlingObjects(gameInfo))              //passing name of object as argument
//passing object without creating it manually
 console.log(handlingObjects({
  name:"krish",
id:"#9809"
}))

//passing array

let myArray=[450,550,650,750,850]
function secondTermOfArray(arr)                          //use generic name;js will replace that generic name with your argument passed.
{
  return arr[1]
}

console.log(secondTermOfArray(myArray))
//passing array without creating it
console.log(secondTermOfArray([450,900,1800,3600,7200]))

//example 2

let tinderUser={
  name:"kris",
  Age:23,
  isLoggedIn:true
}
function retriveInfo(anyObject)
{
    return `info of user :: name :${ anyObject.name}, Age: ${anyObject.Age}`
}

console.log(retriveInfo(tinderUser))

function addelementsOfArray(arr)
{
     let sum=0;
     for(let i=0;i<5;i++)
      {
        sum=sum+arr[i]
      }
      return sum;
}
console.log(addelementsOfArray([2,4,6,8,10]))
