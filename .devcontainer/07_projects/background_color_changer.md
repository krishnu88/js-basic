## solution code

```javascript
//hex color code => it uses 16 unique symbols to reprsent numbers 
//00 to FF => blue (BB)
//00 to FF => red(RR)
//00 to FF => green(GG)
// "#RRGGBB" => red,green,blue
let generateColor=function (){
  let numbers="0123456789ABCDEF"
let color="#"
  for(let i=0;i<6;i++)
  {
    color += numbers[Math.round(Math.random() *16)]
  }
  return color
}
console.log(generateColor())
let stop
const startChangingColor = function(){
  let changeColor=function (){          //since we are declaring function like this,so it has to b initialised before it can be accessed.
    document.body.style.backgroundColor= generateColor();
  }
  if(!stop)  //if stop is null is true
  {
    stop = setInterval(changeColor,1000)
  }
}
const stopChangingColor=function (){
 clearInterval(stop);
 stop=null;
}

//writing this code we have to overwrite values again and again.so we can change color genearted to 0( or null ).this helps in writing a cleaner code.
document.querySelector("#start").addEventListener("click",startChangingColor)
document.querySelector("#stop").addEventListener("click",stopChangingColor)



```