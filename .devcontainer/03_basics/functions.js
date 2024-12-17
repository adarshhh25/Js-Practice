// function sayName () {
//     console.log("ADARSH")
// }

// // sayName()

// // function addTwoNumbers(num1 , num2) {
// //     console.log(num1 + num2)
// // }

// function addTwoNumbers(num1 , num2) {
//     // let result = num1+num2
//     // console.log(result)
//     // return result
//     return num1 + num2
// }

//  const result = addTwoNumbers(4,5)

//  function userMsg (name) {
//    if(name === undefined ){
//     console.log("Enter The Values")
//     return
//    }
//    return `${name} has just logged in `
//  }

//  const x = userMsg()
//  console.log(x)


 function calculateCartPrice(val1, val2 ,...num1) {
  return num1
 }
 console.log(calculateCartPrice(200, 400, 600, 800))

 const user = {
  name: "adarsh",
  age: 19,
  location: "Mumbai"
 }

 function passObj (user) {
  console.log(`The username is ${user.name} & his age is ${user.age}`)
 }

 passObj(user)

 const arr = [11,12,13,14,15]

 function val (arr) {
  console.log(arr[1])
 }

 val(arr)