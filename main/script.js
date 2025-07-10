
// Data Types
// Primitive Data type
// Number, String, Boolean, undefined, null, BigInt, Symbol
// Non-Primitive Data type


// Array, Function, Object = unordered, key-value pair{}
// Map(), Set(),

// Memory Ke under hamare pass 
// Stack (Primitive) - Copy return
// Heap (Non-Primitive) - Reference Return karta hai

// let age = 23;

// let age2 = 34;

// let age3 = age2 + age

// age2 = 12;
// console.log(age3)

let user = {
    name: "Abhi",
    age: 23,
    email: "abhinay@gmail.com"
}

let anotherUser = {...user};
anotherUser.name ="Naveen"
console.log(user)