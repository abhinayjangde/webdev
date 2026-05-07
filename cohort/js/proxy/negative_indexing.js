/**
 * Implementing negative indexing in array.
 */

let arr = [3,6,13,8,5]

function negativeIndex(arr){
    return new Proxy(arr,{
        get(target,prop){
            const index = Number(prop) // index must be number
            if(index < 0){
                return target[target.length + index]
            }
            return target[index]
        },
        set(target,prop,value){
            const index = Number(prop)
            if(index < 0){
                // handling negative indexing
                target[target.length+index] = value
            }
            else{
                target[index]=value
            }
            return true // need to send confirmation

        }
    })
}

let nums = negativeIndex(arr)
// console.log(nums[-1])
// console.log(arr)
// console.log(nums)

nums[-2] = 80

// console.log(arr)
// console.log(nums)


// copy
const copyArray = negativeIndex([...arr])
console.log(arr)
console.log(copyArray)

copyArray[0]=12

console.log(arr)
console.log(copyArray)
