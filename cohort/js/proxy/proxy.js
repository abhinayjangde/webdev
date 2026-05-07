const p = {
    age: 22,
    fname: "Abhi",
    lname: "Jangde"
}
// p.age = -23
const pProxy = new Proxy(p,{
    get(target, prop){
        if(prop in target) return target[prop]
        return false
    },

    set(target,prop, value){
        if(!(prop in target)) throw new Error(`${prop} does not exists`)
        switch(prop){
            case 'fname':
            case 'lname':
                if((typeof value) !== 'string'){
                    throw new Error(`${prop} must be an string`)
                }
                break
            case 'age':
                if((typeof value) !== 'number'){
                    throw new Error(`${prop} must be a number`)
                }
                if(value <= 0){
                    throw new Error(`${prop} must be > zero`)
                }
            }
            // target[prop]=value 
            Reflect.set(target,prop,value)
        }
})

pProxy.fname = 'sooraj'
// pProxy.ram = -12
pProxy.age = 12
console.log(pProxy)