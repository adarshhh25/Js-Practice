// // const arrayName = [1,2,3,4,5]
// // const Heros = ["Saitama", "Naruto", "Luffy", "Gojo"]
// // const arr2 = new Array(1,2,3,4,5)

// // arrayName.push(6)
// // arrayName.push(7)
// // // console.log(arrayName)

// // arrayName.unshift(10)
// // // console.log(arrayName)

// // arrayName.shift()
// // // console.log(arrayName)

// // // console.log(arrayName.includes(199))


// // // console.log(arrayName.indexOf(5))

// // const newArr = arrayName.join()

// // console.log(arrayName)
// // console.log(newArr)

// // console.log(typeof arrayName)
// // console.log(typeof newArr)

// // const arr = [11,12,13,14,15]
// // console.log("A", arr)
// // const narr1 = arr.slice(1,3)
// // console.log(narr1)
// // console.log("B", arr)

// // console.log()

// // console.log("A", arr)
// // const narr2 = arr.splice(1,3)
// // console.log(narr2)
// // console.log("B", arr)

// // ++++++++++++++++++++++++

// const odd = ["one", "three"];
// const even = ["two", "four"];

// // odd.push(even)
// // console.log(odd[5][0])

// const Array = odd.concat(even)
// console.log(Array)

// const a1 = [1,2,3]
// const a2 = [4,5,6]
// const a3 = [...a1, ...a1]
// console.log(a3)

const arr12 = [1,2,[3,4,5],[1,26,7,[4,5,6]]];

const xarr = arr12.flat(3)
console.log(xarr)

console.log(Array.isArray("Adarsh Jha"))
console.log(Array.isArray(xarr))
console.log(Array.from("Adarsh Jha"))
console.log(Array.from({name: "adarsh"}))