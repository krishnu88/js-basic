 //comparison operators
 //comparispn of numerical values
console.log(4>2)
console.log(4<2)
console.log(3==4)
console.log(3!=4)
console.log(2>=2)
//comparison of data of different types
//null ---> indicates empty value.has to be assigned to the variable. typeof(null)=>object
//undefined --> comes as output when variable is declared,but its assignment has not been done. typeof(undefined)=> undefined
//during comparison of string with other number,simply string gets converted to number and then comparison takes place.
console.log(null>0)      //null is converted to 0 only when using comparsion operator.
console.log(null<0)
console.log(null>=0)       //--> null=0 and 0=0 ; so answer is true
console.log(2>true)        //--> true gets converted to 1 ans as 2>1;so our answer is true(boolean value)
console.log("hi"<1)
console.log(true>false)
console.log(undefined<0)
console.log(undefined>0)
console.log(undefined==0)
// == (soft equality operator,only checks value inside string,dosesnt check type of data to be comapred)
console.log(2=="2")  //gives true as output since soft equality is used which only checks value and here,2=2.
console.log(2==="2") //gives false as output since strict equality is used which is checking both data types and values. here,numerical data type is never equal to string value.so answer is false.
console.log(2<="4")
console.log(true==1)
console.log(true=="1")
console.log(true==="1")
console.log(true===1)
// try not to compare different data types as it can cause confusion.

