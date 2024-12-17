const Sym = Symbol("key1")

const jsuser = {
    name : "Adarsh",
    "Full Name" : "Adarsh Jha",
    greeting2() {
        console.log(`Hello Guys my name is ${this.name}`)
    },
    [Sym] : "mykey1",
    age : 19,
    location : "Mumbai",
    email: "adarshjha@gmail.com",
    isLoggedIn : false,
    LastLogin : ["Monday", "Wednesday"]
}

//To Access
console.log(jsuser.name)
console.log(jsuser["name"])
console.log(jsuser["Full Name"])
console.log(jsuser[Sym])

jsuser.name = "Om"
console.log(jsuser)
// Object.freeze(jsuser)
// jsuser.name = "Swati"
// console.log(jsuser)

jsuser.greeting = function() {
    console.log("Hello, Adarsh !!!")
}

console.log(jsuser.greeting())
// console.log(jsuser.greeting())

jsuser.greeting2 = function() {
    console.log(`Hello Guys my name is ${this.name}`)
}
console.log(jsuser.greeting2())
