Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`)
}

function greet(name){
    return `hello , ${name}`
}

greet("Abhi").describe()