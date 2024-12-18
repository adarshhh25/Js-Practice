// const arr = [1,2,3,4,5]

// for (const element of arr) {
//    console.log(element) 
// }

// const greetings = "Hello"

// for (const greet of greetings) {
//     console.log(greet)
// }


const user = {
    id: 123,
    name: "adarsh",
    age: 19
}

for (const i of Object.values(user)) {
    console.log(i)
}

const mapp = new Map()

mapp.set('IN',"India")
mapp.set('FR',"France")
mapp.set('RUS','Russia')
console.log(mapp)

for(const key of mapp) {
    // console.log(key)
}

// for (const key in mapp) {
//     console.log(key)
// }