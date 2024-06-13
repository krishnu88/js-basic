//functions
//functions are used to create a code that can be used again and again by just calling it at the required part,instead of writting the whole code again.so we can increase the productivity and amount of redundant(Repeating) code reduces.
//declaration of object
function myFirstFunction()              //function prototype   =>    function keyword,name of function,list of parameters inside ()
{
    console.log("My name is Krish.")    //defination of function
}
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
addThreeNumbers(3,-5,"6")           // answer -26 => implicit conversion                  //arguments  =>   when value is passed durinf function call inside ().
addThreeNumbers()                   //NaN
addThreeNumbers(9)                  //NaN
addThreeNumbers(9,0,)               //NaN
//to solve this problem we check the type of value passed while writing defination of function.

//saving of function inside variable

function addThreeNumbers(number1,number2,number3)    
{
  //console.log( number1+number2+number3 )                        //gives undefined as it is not returning a value.
   return (number1+number2+number3)
   console.log("heloo")                                         //statements after return cannot be executed.
}

let result= addThreeNumbers(6,7,8)                            //now we cannot execute function using its name;we need to use the variable
//console.log(result)
//if else usage to avoid unexpected results.

function userLoggedMessage(n)                              //avoiding undefined as output using if-else
{
    if(undefined===n)
        {
             return "please enter a username!"
        }
        else{
            return ` ${n},welcome!!`
        }
}
console.log(userLoggedMessage(""))                      //empty string no name
console.log(userLoggedMessage())                          //username is undefined as nothing is passed as argument,not even empty strings("").
console.log(userLoggedMessage("Krish"))


