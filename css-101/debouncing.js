const input = document.getElementById('search')

const debounce = (fn, delay = 1000) => {
    let timer;
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

const handler = async (e) => {
    if (!e.target.value) return;
    const res = await fetch(`https://dummyjson.com/products/search?q=${e.target.value}`)
    const data = await res.json()
    console.log(data.products)
}

const debounced = debounce(handler, 1000)

input.addEventListener('input', debounced)
