const fs = require("fs")

console.log("start program")
fs.readFile("hello.txt", "utf-8", function(err, content){
    if(err){
        console.log("Error in file reading", err)
    }
    else{
        console.log(content)
    }
})

sum(2,5, function(result){
    console.log(result)
})

console.log("end program")

function sum(a,b,cb){
    setTimeout(()=>{
        cb(a,b)
    })
}