//array
//array are used to store multiple items under a name of single variable.
//declaration of array.
 let cricketers=["Virat","Msd","Sachin","Rohit","Hardik"]
 console.log(cricketers['0'])  //accessing values of array cricketers using []
 console.log(cricketers['01'])
 console.log(cricketers[2])
 console.log(cricketers[3])
 console.log(cricketers[4])
// //accessing should be done using +ve integers starting from 0. actual values should be used to access elements.
 console.log(`type of array criketers is ${typeof cricketers}`)
 let numbers=new Array(33,44,55,66,77)
 console.log(`type of array numbers is ${typeof numbers}`)
// console.log(typeof Array)
// console.log(cricketers[1]===cricketers['01'])   false as elements are accessed using 1,not 01
// methods used with array
// push and pop => adds and remove elements at/from ending of array
 cricketers.push("surya")
console.log(`array cricketers after addition of new element is ${cricketers}`) 
 cricketers.push("Bumrah")
 console.log(`array cricketers after addition of new element is ${cricketers}`) 
 cricketers.pop()
 cricketers.pop()
 cricketers.pop()
 console.log(`cricketers array after performing pop operation 3 times is ${cricketers}`)
 console.log(cricketers.length) //4 as last 3 elements are removed using pop operation.
 //unshift and shift method   =>  adds and removes elements to/from start of array.practically ineffective as all elements have to be moved.
 cricketers.unshift("Sunil")
 cricketers.unshift("Kapil")
 console.log(cricketers)
 cricketers.shift()
 cricketers.shift()
 cricketers.shift()
 console.log(cricketers)
//question answer methods of array
//includes => checks whether there is element present or not,if yes then gives its index otherwise returns -1 or a negative number.
 console.log(cricketers.includes("virat"))
 console.log(numbers.includes(33))
 //indexOf
 console.log(cricketers.indexOf("Msd"))
//join method  => turns all elements of array into string seperated by commas.
 let multiplesOf11=[11,22,33,44,55,66]
 let newArr=multiplesOf11.join()
 console.log(`typeof multiplesOf11 array is ${typeof multiplesOf11}`)  //object
console.log(`typeof newArr array is ${typeof newArr}`)                //string
//slice and splice methods
//slice method
let myN1=[12,13,14,15,16,17,18,19,20]
console.log(`length of array myN1 is ${myN1.length}`)
let slicedArrayN1=myN1.slice(3,6)  //5-3=2  3 and 4th element
console.log(`sliced array slicedArrayN1 is ${slicedArrayN1}`)
console.log(`Array myN1 after being sliced is ${myN1}`)  //slice method does not affect original array
let splicedArrayN1=myN1.splice(3,6)       
console.log(`splicedArrayN1 is ${splicedArrayN1}`)  //3 element going to next 6 element
console.log(`array myN1 after being spliced is ${myN1}`) //splice method affects the original array.it removes all the spliced elements from original array,keeping only unspliced elements in original array.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



