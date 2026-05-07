
if(!Array.prototype.myMap){
    Array.prototype.myMap = function(cb){
        let result = []
        for(let i=0; i<this.length; i++){
            result.push(cb(this[i], i, this))
        }
        return result
    }
}



// let arr = [1,2,3]
// console.log(arr.myMap((n)=>n+1))

let arr = [1,2,3,4,5]
// console.log(arr.reduce((acc,current)=>acc+current,0))

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(cb,current){
        let result = current;
        for(let i=0; i<this.length; i++){
            result += cb(this[i],result, this)
        }
        return result
    }
}
console.log(arr.myReduce((acc,current)=>acc+current,0))