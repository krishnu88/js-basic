//reduce is used to add up the values in array.
// let arr=[1,2,3]
// let myArray=arr.reduce( function (accumulator,currentValue) { 
//     console.log(`accumulator : ${accumulator} and current value ${currentValue}`)
//     return Number(accumulator) + Number(currentValue)
// },0)
// console.log(myArray)
let shoppingCart= [
    {
        id: 1,
        product: "T-shirt",
        price: 19.99,
        quantity: 2
    },
    {
        id: 2,
        product: "Jeans",
        price: 49.99,
        quantity: 1
    },
    {
        id: 3,
        product: "Sneakers",
        price: 79.99,
        quantity: 1
    },
    {
        id: 4,
        product: "Sunglasses",
        price: 29.99,
        quantity: 1
    }
]
let totalPrice=shoppingCart.reduce( (acc,obj) => (acc+obj.price),0)
console.log("total amount to be paid is \u20B9",Math.round(totalPrice))