const numbers = [1,2,3,4,5]
const initialVal = 1;
const sumVal = numbers.reduce((accumulator, currentVal) => accumulator * currentVal, initialVal);

console.log(sumVal)

const shoppingCart = [
    {
        name: "js course",
        price: 2999
    },
    {
        name: "py course",
        price: 3999
    },
    {
        name: "mob-dev course",
        price: 8999
    },
    {
        name: "data science course",
        price: 7999
    }
]

const sumVals = shoppingCart.reduce((acc, items) =>(items.price + acc), 0)

console.log(sumVals)