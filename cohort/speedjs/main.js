// let num = "22"
// let convert = +num
// let convert = Number(num) // standard way to do conversion
// let convert = parseInt(num)
// console.log(convert)
// console.log(typeof(convert))

// let str = 123
// console.log(typeof String(str))


// console.log(Math.floor((Math.random() * 6)+1))

let name = "Abhi"
console.log(name.indexOf("p")) // -1
console.log(name.indexOf("b")) // 1
String.prototype.indOf = function (char) {
    for(let i=0; i<this.length; i++){
        if(char===this[i]){
            return i;
        }
    }
    return -1;
}
console.log(name.indOf("p")) // -1
console.log(name.indOf("i")) // 3
