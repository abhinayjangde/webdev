// const person = {
//     username: "abhi",
//     greet : function(){
//         console.log(`hello, ${this.username}`)
//     }
// }

// console.log("hi")
// setTimeout(person.greet.bind(person), 5 * 1000)
// console.log("bye")


function hello(name){
    console.log(`Hello, ${name}`)
}

setTimeout(hello,3000)