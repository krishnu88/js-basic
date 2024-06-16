//variations of loop
//while loop  =>  exit control loops as they execute the body of loop atleast once even if the condition is false(before checking the condition.).
//syntax
/*
initialisation
while(condition)
{
   increment or decrement value(or any other operation that makes loop to terminate)
}
*/

// let i=1
// while(i<=20)
//     {
//         console.log(`value if i is ${i}`)
//         i=i+4
//     }
//printing elements of array using while loop
let arr=[11,22,33,44,55]  //length => 4
let index=5
while(index<arr.length)
    {
        console.log(arr[index])
        index++;
    }
let score=11
    // //do while loop => pehle kamm kro baad mei condition check kro!!

    // do{
    //     console.log(`score is ${score}`)
    //     score++
    // }while(score<=10)
    //     score =11
    do{                                            //special case.
        console.log(`score is ${score}`)
        score++
    }while(score<=10)