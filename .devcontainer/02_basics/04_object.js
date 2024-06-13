/*
//creation of singleton and non-singleton object.
//singleton object   =>     created using new keyword.
//let singletonObj=new Object()
//non-singleton object    =>     created when object is declared using literals.
let tinderUser={               //non singleton object created.

}
tinderUser.name="kris"
tinderUser.email="kri@gmail.com"
tinderUser.age=22
tinderUser.isLoggedIn=true
// console.log(tinderUser)
// console.log(tinderUser["age"])
tinderUser.id="#34355"
// console.log(tinderUser.id)
// console.log(tinderUser)

//nesting of objects within objects  =>   objects can be embedded within another objects which can be accessed using (.)dot operator.

let gameInfo={
    name:"ryan123",
    fullName:{
        userFullName:{
                          first:"Ryan",
                          last:"Choudhary"  
                        
                    }
            },
    Age:22,
    gameId:"#3435"
}
//accessing elements embedded as object within as object.
// console.log(gameInfo.fullName)
// console.log(gameInfo.fullName.userFullName)
// console.log(gameInfo.userFullName)               //gives undefined as result as we cannot access the objects embedded within other objects before accessing the previous objects.
// console.log(gameInfo.fullName.userFullName.first)
//joining of objects.
//assign method
let obj1={
      0:"a",
      1:"b",
      2:"c",
      3:"d"
}
let obj2={
    4:"e",
    5:"f",
    6:"g",
    7:"h"
}
//let obj3=Object.assign({},obj1,obj2)  //copies and creates a new object in a empty object;without modifying obj1
//console.log(obj1)
//let obj4=Object.assign(obj1,obj2)
//console.log(obj1)                     //copies and creates a new object in obj1;thus modifies our object;that is why {} is given so that copy is created here and our original objects doesnt get changed.
//spread method  =>  (...,...,   )  ;  here we dont need to give empty parenthesis 
let obj3={...obj1,...obj2}             // spreads out elements of object and combines them together;does not affects our original objects.
// console.log(obj3)
// console.log(obj1)
// console.log(obj2)

//embedding objects as elements of array
let usersInfo=[
    {
        name:"x",
        email:"x@gmail.com"
    },
    {
        name:"y",
        email:"y@gmail.com"
    },
    {
        name:"z",
        email:"z@gmail.com"
    },
    {
        name:"t",
        email:"t@gmail.com"
    }
]
//accessing elements(objects) of array
console.log(usersInfo[0].name) 
console.log(usersInfo[2].email)
console.log(usersInfo[3].name)
console.log(usersInfo[3].email)
//extra methods
//keys and values   =>   gives all the keys and values of object in form of array respectively.
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
//entries
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("Email"))   //determines that whether mentioned property is there in specified object or not.
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//destructing of objects in js

let course={
    name:"Master Js",
    price:"999",
    courseInstructor:"Krish",
    durationOfCourse:"35-40 days"
}
//console.log(course.durationOfCourse)         //again and again we have to use this syntax making our work lengthy.
//so we destructure objects using which our code becomes more readable.
//syntax const/let {key which we want to use : name we want to use} =  name of object
const {courseInstructor:Instructor}=course   //now we cannot use courseInstructor;we can only use Instructor to reference Krish.
console.log(Instructor)
const { durationOfCourse:time }=course
console.log(time)
/*
api format
format 1
{
"name":"krish",
"courseName":"js in hindi",
"price":"free"
}
format 2
[
   {},
   {}.
   {}
]
*/























