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
  console.log(items, i, adarsh)
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
  console.log(items.name) 
  console.log(items.sname)
})