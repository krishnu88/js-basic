//for in
//lets try iterating an object using for of loop
let myObject={
    "js":"javascript",
    "cpp":"C++",
    "rb":"ruby",
    "py":"python",
    "txt":"text"
}
// for (const [key,value] of myObject) {          //not iterable as objects cannot be iterated using for of loop.
//     console.log(`${key} :=> ${value} `)
// }
//for in loop 
// for (const value in myObject) {                     //prints all the key values present in object.
//     console.log(`${value}`)
// }

// for (const [key,value] in myObject) {                   //unexpected result
//     console.log(`${key}  is shoter form of ${value}`)
// }
for (const key in myObject) {
console.log(`${key} is shorter form of ${myObject[key]}`)
}
//iterating array
//=> gives keys of array(indexes.)
let arr=["js","py","cpp","txt"]
// for (const key in arr) {
//     console.log(key)         //gives keys of array(indexes.)
// }
for (const key in arr) {
   console.log(arr[key])        //gives elements of array arr
}