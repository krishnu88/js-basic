# solution code
```javascript

//we need to select our whole form since the calculate button is inside form.
//this selection is done using querySelector()
let form=document.querySelector('form')
//form selected
//now we want to stop the default action of browser that is dont sumbit ir to anywhere.
//first we apply event listener to form.
//parameter e holds the event submit.since we are using form,so event is submit;not click.
//we cannot select weight,height outside function since it will return an empty value.here,we only want the data to be selected that is taken as input from user. 
form.addEventListener("submit",function(e){
e.preventDefault()
//now we select our height.however we get it in the form of string.so we apply parseInt() to covert it to a number.this method reads string from left to right till it encounters a character that cannot be part of number.(other than numeric digits,+ or -)
const height=parseInt(document.querySelector("#height").value)
const weight=parseInt(document.querySelector("#weight").value)
const results=document.querySelector("#results")
if(height==="" || height<0 || isNaN(height))
{
    results.innerHTML=`please enter a valid number ${height}`
}
else if(weight==="" || weight<0 || isNaN(weight))
{
  results.innerHTML=`please enter a valid number ${weight}`
}
else
{
  const bmi=(weight/((height*height)/10000)).toFixed(2)
  //display result
  results.innerHTML=bmi
  if(bmi < 18.6)
  {
    results.innerHTML=`<span> you are underweight as your bmi is ${bmi} </span>`
  }
  else if(bmi>=18.6 && bmi<=24.9)
  {
    results.innerHTML=`<span> your bmi is normal as its value is ${bmi}</span>`
  }
  else 
  {
    results.innerHTML=`<span>you are overweight as yout bmi is ${bmi} </span>`
  }
}

})







```