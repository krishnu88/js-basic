# solution code
## Project 1

```javascript
//first we need to select all buttons.this we will do using querySelectorAll()
let buttons=document.querySelectorAll(".button")
//now we will select body of document on which we want to apply our color change.
let body=document.querySelector("body")
//displays all button class elements
//console.log(buttons)
//buttons is a node list so we can apply forEach() loop to it.
buttons.forEach( (button) =>
{
console.log(button)
//button.style.backgroundColor="magenta"
button.addEventListener("click", function(e){
  if(e.target.id=="grey")
  {
    body.style.backgroundColor=e.target.id
  }
  if(e.target.id=="blue")
  {
    body.style.backgroundColor=e.target.id
  }
  if(e.target.id=="white")
  {
    body.style.backgroundColor=e.target.id
  }
  if(e.target.id=="yellow")
  {
    body.style.backgroundColor=e.target.id
  }

})
});
```