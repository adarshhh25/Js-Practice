const myNums = [1,2,3,4,5,6,7,8,9,10]

// const myNumbers = myNums.map((num) => num+ 10)

const myNumbers = myNums
.map((nums) => nums * 10)
.map((nums) => nums + 10)
.filter((nums) => nums > 40)
console.log(myNumbers)