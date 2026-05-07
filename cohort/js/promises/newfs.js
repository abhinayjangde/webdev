const fs = require("fs/promises")

fs.readFile("hello.txt", "utf-8")
.then((content)=>console.log(content))
.catch(e=>console.log(e))
.finally(()=>console.log("done"))


function wait(seconds){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        }, seconds * 1000)
    })
}

function setTime(cb, seconds){
    cb()
}