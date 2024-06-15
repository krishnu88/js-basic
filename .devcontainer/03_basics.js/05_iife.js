//Immediatlty invoked Function  Expressions.(IIFE)
//sometimes we need to create functions that can executed immediatly.Also to remove or reduce the pollution of global scope,iife are used.
//syntax and exmaple
//named IIFE =>  these iife have a name.
(function multiplyTwoNumbers(num1,num2)
{
console.log(num1*num2)
    
})(9,8); //calling statement
//executing more than one iife in a single file  ; need to be putted at the end of one iife as node doesnt know where the context gets finished of first iife.

(function divideTwoNumbers(num1,num2)
{
    console.log(Math.round(num1/num2))
})(9,8);

//unamed iife made using arrow 
(  (name) =>  
    {
     console.log(`welcome to the world of javascript,${name}!!`)
    }
 
)  ("krish");
