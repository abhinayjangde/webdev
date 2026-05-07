let arr = ['apple','banana','orange', 'apple']

function solve(input){
    return input.reduce((acc,fruit)=>{
        console.log(acc,fruit)
        acc[fruit] = (acc[fruit] || 0) + 1
        return acc
    },{})
}

console.log(solve(arr))