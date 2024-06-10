let firstName="krish"
let lastName=" Arora"
//concatenation of strings using + operator.
//console.log(firstName+lastName)
//various methods to declare string
//method 1
let name="krish"
//method 2
const NameOfGame=new String("     Krishnu123__ l___  -");//string is stored in the form of object that is in the form of key-value pairs.each character in string is assigned a non negative integer. 
const email="kris@gmail.com"
//console.log(NameOfGame)
//console.log(typeof NameOfGame)
//console.log(typeof firstName)
//various methods used to manupilate string
//console.log(NameOfGame.toUpperCase());   //original value does not get modified
//console.log(NameOfGame.length);     // calculates total characters present in string;not a function,  length => last index + 1
//console.log(NameOfGame.charAt(20))    //used to tell which charcater is present particular location . -->gives nothing when we ask for a character not present in string.
//console.log(NameOfGame.indexOf("k"))   //used to tell index number of character in string. gives -1 when character is not present in string.
//methods to extract part of strings.
//using substring(starting index,ending index or length of string you want)
//console.log(NameOfGame.substring(1,6))   //characters that will appear are from n to k-1;  n-->starting index,k -->ending index
//using slice,allows usage of negative index
//console.log(NameOfGame.slice(-1,4))
//console.log(NameOfGame)
//console.log(NameOfGame.length)    //total charactes-->20 indexing from 0 to 19
//console.log(NameOfGame.trim())    //trim only removes starting and ending spaces;doesnt remove in between spaces
console.log(email)
console.log(email.replace("r","$"))  //replaces only first occurence of character;to replace all the occurences of character, use replaceAll() method.
//template litera => used to embedd a expression inside a string
//syntax write string inside back ticks,and put the value to be embedded inside ${}.
console.log(`name of my game is ${NameOfGame} and my email is ${email}`)














