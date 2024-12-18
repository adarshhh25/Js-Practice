const isUserLoggedIn = true

if(isUserLoggedIn) {

}

if(2 != "2") {
    console.log("done")
}

// <, >, <=, >=, ==, !=, ===

//Another Notation

const balance = 1000

if(balance > 500) console.log("test"), console.log("Hello");

const user = true
const debitCard = true

if(user && debitCard && 2 == 2) {
    console.log("Allowed")
}
if(user && debitCard && 2 == 2) {
    console.log("Allowed")
}

//switch

const month = 3

switch(month) {
  case 1: 
   console.log("January")
   break;
  case 2: 
   console.log("February")
   break;
  case 3: 
   console.log("March")
//    break;
  case 4: 
   console.log("April")
   break;
  case 5: 
   console.log("May")
   break;
   default :
   console.log("Wrong Month")
   break;
}