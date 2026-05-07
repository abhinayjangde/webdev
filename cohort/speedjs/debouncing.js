// debouncing
function debounce(fn, delay){
    let id;
    return function(){
        console.log("Only last wala function chalega", delay , "Hai")
        clearTimeout(id)
        id = setTimeout((...args)=>{
            fn.apply(this, args)
        }, delay)
    }
}

const fn = debounce(()=>{
    console.log("Hello, Abhi")
}, 4000)

const button = document.querySelector("#sayHello")
button.addEventListener("click", fn)
