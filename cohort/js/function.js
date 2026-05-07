Function.prototype.describe = function(){
    console.log("this is", this.name)
}

function greet(){
    return `Hello, ${name}`
}

greet.describe()


function counter(){
    let count =0;
    return function (){
        count++;
        return count
    }
}
console.log(counter()())