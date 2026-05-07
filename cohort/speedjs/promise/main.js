const myPromise = new Promise((resolve, reject)=>{
    let success = true
    setTimeout(()=>{
        if(success){
            resolve("Operation successful") // fulfilled
        }
        else{
            reject("Somthing went wrong!") // rejected
        }
    },2000)
})

// myPromise.then((res)=>{
//     console.log("fulfilled", res)
// })
// .catch((e)=>{
//     console.log("Rejected,", e)
// })
// .finally(()=>{
//     console.log("Promise execution completed!")
// })

// async function fetchData() {
//     try {
//         let result = await myPromise
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchData()

