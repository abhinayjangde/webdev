// (()=>{console.log("iife")})()

const person = {
    name: "Abhi",
    greet : function(){
        console.log(`hello, ${this.name}`)
    }
}

const user = {name:"Chinki"}

const fn = person.greet.call(user) // call - calls function
const fn2 = person.greet.bind(user) // bind - returns function
// console.log(fn)
fn2()