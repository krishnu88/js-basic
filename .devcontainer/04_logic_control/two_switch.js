//switch case is a variation of if-else
//code to check month of year;1 represents january,2 represents feburary ,and so on.
// switch (key) {     syntax of switch case
//     case value:
        
//         break;

//     default:
//         break;
// }
//alt+shift+down arrow to copy things downward.
//string values can also be used.
let monthOfYear=7
switch (monthOfYear) {
    case "JANUARY":
        console.log("JANUARY")
        break;
    case 2:
        console.log("FEBURARY")
        break;
    case 3:
        console.log("MARCH")
        break;
    case 4:
        console.log("APRIL")
        break;
    case 5:
        console.log("MAY")
        break;
    case 6:
        console.log("JUNE")
        break;
        
    case 7:
        console.log("JULY")
        break;
    case 8:
        console.log("AUGUST")
        break;
    case 9:
        console.log("SEPTEMBER")
        break;
    case 10:
        console.log("OCTOBER")
        break;
    case 11:
        console.log("NOVEMBER")
        break;
    case 12:
        console.log("DECEMBER")
        break;
    default:
        console.log("DEFAULT MONTH IS JANUARY")
        break;
}
//we use break keyword to avoid fall through