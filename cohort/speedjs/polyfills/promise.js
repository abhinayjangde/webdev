

function wait(seconds){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(), seconds * 1000)
    })
}

wait(5)
.then(()=>console.log("Promise resolved"))
.catch(()=>console.log("Error"))
.finally(()=>{
    console.log("final code")
})