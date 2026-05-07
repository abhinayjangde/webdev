function foodOrder(foodName){
    return new Promise((resolve, reject)=>{
        console.log("Food is preparing ", foodName)
        setTimeout(()=>{
            let isAvailable = Math.random() > 0.3 // 70% chance
            if(isAvailable){
                resolve("Food is ready 🍕", foodName)
            }
            else{
                reject("Food is out of stock ❌", foodName)
            }
        },3000)
    })
}

foodOrder("Pizza")
.then((msg)=>console.log(msg))
.catch((err)=>console.error(err))
.finally(()=>console.log("done"))