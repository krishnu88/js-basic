//truthy and falsy values.
//there are certain values in js that we assume are by deafault are true and false resp. these are called truthy and falsy values.
let email={}
if(email)
    {
        console.log("executed")
    }
//falsy values  =>   ""(empty string only),0,-0,false,null,undefined,BigInt 0n
//truthy values =>   "0"," "(non empty strings so these are truthy values.) ,[],{empty object} ,function(){empty function}
//checking whether array is empty or not
if(email.length==0)
    {
        console.log("array is empty")
    }
//checking whether object is empty or not
if((Object.keys(email).length)==0)
{
    console.log("Empty object")
}











