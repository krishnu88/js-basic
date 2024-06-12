//some extra methods to be used with array
let myFavMovies=["12 fail","Qismat","Lekh","Dil Diyan Gallan"]
let myFavWebSeries=["all of us are dead","Wednesday","Tabbar"]
 myFavMovies.push(myFavMovies)
 console.log(myFavMovies)
//concat() method
let arr = myFavMovies.concat(myFavWebSeries)   //joins 2 arrays => can be used for 2 arrays
console.log(arr)
console.log(myFavMovies)
console.log(arr.length)
//spread(...) method            //more commonly used;seperates out elements of array and then join them all.
let myNewArray=[...myFavWebSeries,...myFavWebSeries]
console.log(myNewArray)
//array within array  => flat method;we have to specify depth inside()
let embeddedArray=[4,5,6,7,[8,9],10,11,12,[13,14,15,[16,17],18],19]
console.log(embeddedArray.length)
console.log(embeddedArray[4])
console.log(embeddedArray[8])
let new_Arr=embeddedArray.flat(Infinity)
console.log(new_Arr)
//checking of array
//isArray() => determines that whether passed value is array or not.
console.log(`the type of embeddedArray is ${typeof embeddedArray} and it is ${Array.isArray(embeddedArray)} that embeddedArray is an array. `)
//Array.from() => helps in creating a array from a given value.
console.log(Array.from("krish"))
console.log(Array.from("22435"))   //always pass value inside ""
console.log(Array.from("1345"))
console.log(Array.from({
    name:"krish"
}))    //intersting case;js does not know which things are to be converted to array, so it returns []. we have to specify about the things to be converted to array.
console.log(Array.of(57768))    //creates array of value as it is mentioned inside().










