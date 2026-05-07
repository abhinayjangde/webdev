
const throttle = (fn, delay)=>{
    let id = null
    return (...args)=>{
        if(id===null){
            fn(...args)
            id = setTimeout(()=>{
                id = null
            }, delay)
        }
    }
}

const sayHello = throttle(()=>{
    document.getElementById("msg").textContent = "Hello, Throttling"
},4000)

const button = document.querySelector("#sayHello")
button.addEventListener("click", sayHello)