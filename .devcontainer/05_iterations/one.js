//loop
//loops are used to repeat a code repetedly based on certain conditions.loop carries on till condition remains true.when condition becomes false,loop terminates.
//syntax
// for (let  index= 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// for(let i=0;i<10;i++)
//     {
//         const element=i
//         console.log(element)
//     }
//    // console.log(element) gives error as scope of variable element is finished inside {}
//   // console.log(i) gives error
//   //table of 5
//   for(let i=0;i<=10;i++)
//     {
//         console.log(`5 * ${i}= ${5*i}`)
//     }
//     //if inside loop
//     for(let i=0;i<=10;i++)
//         {
//             let element=i
//             if(i%2==0)
//                 {
//                     console.log(`you won a lottery!`)
//                 }
//                 console.log(i)
//         }
// //odd - even number check
//         for(let i=0;i<=10;i++)
//             {
//                 if(i%2==0)
//                     {
//                         console.log(`${i} is even`)
//                     }

//                 else 
//                 {
//                     console.log(`${i} is odd`)
//                 }
//             }



//             for(let i=0;i<=10;i++)
//                 {
//                     let element=i
//                     if(i==5)
//                         {
//                             console.log("5 is best number.")
//                         }
//                         console.log(i)
//                 }

//nested loop
// for(let i=1;i<=10;i++)
//     { 
//         let sum=0  //has scope;so will not give any problem.
//         console.log(`Table of ${i}`)
//         for(let j=0;j<=10;j++)
//             {        
//                 let product=i*j                //after coming into inner loop,first inner loop will get executed.
//                console.log(`${i}*${j}=${product}`)
//                sum=sum+product;
//             }                      //control will go out from inner loop only when its execution is completed.
//             console.log(`sum of all values of table ${i} is ${sum}`)  //after executing this,control will shift to outer loop,incrementing value of i and cehcking condition ; and printing values accordingly.
//     }

//accessing(printing) elements of array
// let myArray=[4,5,6,7]
// console.log(myArray.length)
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
    
// }

//break and continue keywords.

// for(let i=1;i<=20;i++)
//     {
//         if(i==5)
//             {
//                 console.log(`detected number 5,so 5 and its following values need not to be printed`)
//                 break;
//             }
//         console.log(`value of i is ${i}`)
//     }
//continue  -->  ek glti maaf ; skip everything after keyword continue for once;increment value of i and check condition and execute accordingly.
for(let i=1;i<=20;i++)
    {
        if(i==5)
            {
                console.log(`detected number 5,so 5 need not to be printed.`)
                continue;
            }
        console.log(`value of i is ${i}`)
    }
    for(let i=1;i<=10;i=i*2)
        {
            console.log(i)
        }
