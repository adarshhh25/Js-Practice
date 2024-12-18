const user = {
    name : "adarsh",
    price: 99,
    wlcMsg : function() {
        console.log(`Welcome to Our website ${this.name}`)
        console.log()
        console.log(this)
    }
}

user.wlcMsg()
user.name = "jha" 
user.wlcMsg()

console.log(this)

// function chai() {
//   let name = "adii"
//   console.log(this.name)
// }

// chai()

// let chai = function() {
//     let name = "adii"
//     console.log(this.name)
// }
// chai()

let chai = () =>  {
    let name = "adii"
    console.log(this.name)
}