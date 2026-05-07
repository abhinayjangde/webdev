
// polyfill for forEach()

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(cb){
        for(let i=0; i< this.length; i++){
            cb(this[i], i)
        }
    }
}

const arr = [1,2,3,45,53]
arr.myForEach((value, index)=>{
    console.log(`Value: ${value} : index ${index}`)
})