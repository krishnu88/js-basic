//for each loop
//forEach loop is a method that accepts higher order function(call back function) as argument.it is applied on method.
let myArray=[44,55,66,77,88,99,100]
// myArray.forEach(function (item) {      //accepts item as parameter that brings back individual element of array.
//     console.log(item)
// })          //call back function has no name.
//forEach() using => function
// myArray.forEach( (item) => {
    //console.log(item)
//})
//passing already made function to forEach()
function printValues(item)
{
    console.log(item)
}
//pass only reference of function.
myArray.forEach(printValues)

//acessing elements(which are all objects) of array
const phoneInfo=[
    {
        phoneName:"APPLE",
        price:"50000"        
    },
    {
        phoneName:"SAMSUNG",
        price:"35000"
    },
    {
        phoneName:"REDMI",
        price:"23000"
    }
]

phoneInfo.forEach( (item) => {
    console.log(Array(item.phoneName))
    console.log(Array(item.price))           //phoneName key gets extracted from every object present in array phoneInfo.each object treated as item.    
})
let arr=[33,55,77]
arr.forEach(function (item,i,a){
    console.log(item,i,a)           //gives elements of array,index of array,all array
})
















