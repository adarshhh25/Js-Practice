const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        f_name: "adarsh",
        m_name: "abhiram",
        l_name: "jha"
    }
}

// console.log(regularUser.fullname.f_name)

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}

const obj2 = {
    4: "x",
    5: "y",
    6: "z"
}

// const obj3 = {obj1, obj2}

const obj4 = Object.assign(obj1, obj2)

// console.log(obj3)
// console.log(obj4)
// console.log(obj1)

const user = [
    {
        id: 1,
        email : "h@email"
    },
    {
        id: 1,
        email : "h@email"
    },
    {
        id: 1,
        email : "h@email"
    },
]

// console.log(regularUser);
// console.log(Object.values(regularUser))
console.log(Object.entries(regularUser))

console.log(regularUser.hasOwnProperty('email'));


const course  = {
    c_name: "Js",
    price: 100,
    teacher: "Jha"
}

console.log(course.teacher)
const {teacher: t} = course 
// console.log(teacher)
console.log(t)