const Obj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby"
}

for (const key in Obj) {
    // console.log(key)
    }

    console.log();

for (const key in Obj) {
    // console.log(`My Favourite Programming Languages is ${Obj[key]}`)
    }

    // console.log()
    
// for (const values in Obj) {
//     console.log(values)
//     }
//     console.log()

// for (const [key ,values] in Obj) {
//     console.log(key ,values)
//     }


const arr = ["js", "rb", "py", "java"]

for (const key in arr) {
    // console.log(arr[key])
}
// for (const values in arr) {
//     console.log(values)
// }

const coding = ["cpp", "py", "rb", "rust", "java"]

// coding.forEach(function(items){
//     console.log(items)
// })

coding.forEach((items, i ,adarsh) =>{
//   console.log(items, i, adarsh)
})

// function print(items) {
//     console.log(items)
// }

// coding.forEach(print)

const MyLanguage = [
    {
        name: "python",
        sname: "py"
    },
    {
        name: "c plus plus",
        sname: "cpp"
    },
    {
        name: "javascript",
        sname: "js"
    },
]

MyLanguage.forEach((items) =>{
//   console.log(items.name) 
//   console.log(items.sname)
})

const a = [11,12,13,14,15]

// const value = a.forEach((items) => {
//   console.log(items)
//   return items
// })

// console.log(value)

const newNum = a.filter( (num) => num > 12)

console.log(newNum)

const b = []

a.forEach((num) => {
    if(num > 4) {
        b.push(num)
    }
})
console.log(b)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


const userBooks = books.filter((age) => {
    return (age.publish >= 1995 && age.genre === 'History')
})

console.log(userBooks)