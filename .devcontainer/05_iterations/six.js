//filter
//now we first use forEach loop to print values of array.
let numbers=[1,2,3,4,5,6,7,8,9,10]
// codingLanguages.forEach( (item) => {
//     console.log(item)             //each item of array is treated as item.
// })

//we store values of array in a variable
// let valuesOfArray=codingLanguages.forEach( (item) => {
//     console.log(item)
// })
// console.log(valuesOfArray)  =>  gives undefined as variable storing values of array using forEach cannot be printed
//  let valuesOfArray=codingLanguages.forEach( (item) => {
//      return item;              //does not give undefined neither gives any error.
//   } )
//  console.log(valuesOfArray)      //gives undefined as forEach function when used in this type cannot return value. 
//  let valuesOfArray=codingLanguages.forEach( (item) => {
//     console.log(item) 
//     return item;              //does not give undefined neither gives any error.
//   } )
 //gives undefined as forEach function when used in this type cannot return value. 

//filter

//codingLanguages.filter( (item) => {     //works normally like forEach loop
//    console.log(item)

// let myArray=codingLanguages.filter( (item) => {
//     return num%4==0          //explicit return; as soon as we put {} we have to write return explicitly
// })
// console.log(myArray)
// let myArray=numbers.filter( (num) => (num%4==0)     )         //implicit return; no {} so need to write return explicitly)
// console.log(myArray)
//usinf forEach and control logic
//create empty arraya nd use it to push values in it according to condition.
// let myNums=[]
// numbers.forEach( (num) => {
//     if(num>4)
//         {
//             myNums.push(num)
//         }
// })
// console.log(myNums)
//using forEach to access elements of array
let books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Fiction"
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Science Fiction"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Classic Fiction"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Fiction"
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        year: 1997,
        genre: "Fantasy"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        genre: "Fiction"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        genre: "Fantasy"
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        year: 1932,
        genre: "Science Fiction"
    },
    {
        title: "Jane Eyre",
        author: "Charlotte Bronte",
        year: 1847,
        genre: "Classic Fiction"
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954,
        genre: "Fantasy"
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        year: 1851,
        genre: "Classic Fiction"
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        year: 1818,
        genre: "Gothic Fiction"
    },
    {
        title: "The Road",
        author: "Cormac McCarthy",
        year: 2006,
        genre: "Post-apocalyptic Fiction"
    },
    {
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        year: 1890,
        genre: "Gothic Fiction"
    },
    {
        title: "The Martian",
        author: "Andy Weir",
        year: 2011,
        genre: "Science Fiction"
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        year: 2008,
        genre: "Young Adult Fiction"
    },
    {
        title: "Wuthering Heights",
        author: "Emily Bronte",
        year: 1847,
        genre: "Gothic Fiction"
    },
    {
        title: "The Road to Wigan Pier",
        author: "George Orwell",
        year: 1937,
        genre: "Non-fiction"
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        year: 1979,
        genre: "Science Fiction"
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        year: 1866,
        genre: "Philosophical Fiction"
    },
    {
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        year: 1844,
        genre: "Adventure Fiction"
    }
]
//accessing using array notation
// console.log(books[3].genre)
// console.log(books[9].year)
//accessing elements(objects) of array using for each
// books.forEach( (obj) => {
//        console.log(obj.author)
//        console.log(obj.year)  
// })
//using filter to access elements(obejcts) of array 
//let booksInfo=books.filter( (obj) => console.log(obj.author))
let userBooks=books.filter ( (obj) => obj.genre==="Fiction" )  //no {} ; so no need to write return.
userBooks=books.filter( (obj) => {
    return obj.year==2000        //no book is there which is published in year 2000
})
userBooks=books.filter( (obj) => {
    return obj.year >=2000               //used {} ; so write return explicitly.
})
userBooks=books.filter( (obj) => {
      return ( (obj.genre=="Fiction" || obj.genre=="Fantasy")  &&  (obj.year > 1955) )
})
console.log(userBooks)
