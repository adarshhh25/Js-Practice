const name = "adarsh"
const repoCount = 50

// console.log(name + repoCount + "Value")

console.log(`My name is ${name} and I have ${repoCount} repos`)

const gameName = new String('BlackaDevil')

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName[1].toUpperCase())
console.log(gameName.charAt(7))
console.log(gameName.indexOf('a'))

// const newga = gameName.substring(0,4)
// console.log(newga)

const newga = gameName.slice(-7,9)
console.log(newga)

const nstring = "   hitesh   "
console.log(nstring)
console.log(nstring.trim())