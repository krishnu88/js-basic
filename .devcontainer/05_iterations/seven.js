//map 
 const numbers=[1,2,3,4,5,6,7,8,9,10]
// let values=[]
// numbers.forEach( (num) => {
//     values.push(num+10)
// })
// console.log(values)
//map does not return values that are true based on some conditions.
// let values=numbers.map( (num) => num >= 9 )    //gives output as true and false only.
// console.log(values)
// let values=numbers.map( (num) => {
//     return num*2
// })
 //console.log(values)
//chaining of methods
//in chaining of methods,the value of first method is passed to immediate next method,that continues so on till we go to last method.
let values=numbers.map( (num) => num*10).map( (num) => num + 1).filter( (num) => (num%7==0))
console.log(values)












