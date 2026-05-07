
function increment(){
    let count=0
    return function(){
        count++
        return count
    }
}
let count = 12
let c1 = increment()
let c2 = increment()
console.log(c1())
console.log(c1())
console.log(c1())
console.log(c1())
// another
console.log(c2())
console.log(c2())
console.log(c2())
console.log(c2())
console.log(c2())