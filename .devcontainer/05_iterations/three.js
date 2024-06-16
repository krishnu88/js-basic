//other loops
//these loops are array specific loops,however can also be applied to other data structures like objects,maps etc,strings etc
let arr1=[44,55,66,77,88]    //object specifies the name of data structure that is to be iterated.
for (const num of arr1) {
    //console.log(num)          //don't write arr[num]
}
let arr2=[45,55,65,75,85,95,100]
for (const num of arr2) {
    //console.log(num+1)
}

//iteration of string ; printing all the charcters of string

let name="Krish Arora"
// for (const char of name) {
//     
//        if(char==" ")
//         {
//             break;
//         }
//         console.log(char)               //Krish
// }
for (const char of name) {

       if(char==" ")
        {
            continue
        }
        console.log(char)               //KrishArora
}
