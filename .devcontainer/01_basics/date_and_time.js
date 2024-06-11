//date and time in js
let myDate=new Date()
// console.log(myDate.getDate())
// console.log(myDate.toDateString())    //--> gives current day and date example day month date year
// console.log(myDate.toLocaleDateString())   //--> month/date/year
// console.log(myDate.getDay())          //gives day number monday => 1 _ _ _ _ _ _ _sunday => 7
// console.log(myDate.toISOString())     //unreadable format of date.
// console.log(myDate.toLocaleString())   // --> gives date along with time.
// console.log(myDate.toTimeString())   // gives only time;coordinated universal time.
// console.log(myDate.toJSON())
let myOwnDate=new Date(2023,0,5)
console.log(myOwnDate.toLocaleDateString()) // converts our created date into readable format
console.log(typeof myDate)   // => object
//++++++++++++++++++++++++creating your own date+++++++++++++++++++++++++++++++++++++++





