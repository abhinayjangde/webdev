// debouncing
function debounce(fn, delay){
    let id
    return function(...args){
        clearTimeout(id)
        id = setTimeout(function(){
            fn.apply(this,args)
        }, delay)
    }
}

const button = document.getElementById("sayHello")
button.addEventListener("click", debounce(function(){
    document.querySelector("#msg").textContent = "Hello Abhi"
    console.log("Hello, Abhi")
},4000))

