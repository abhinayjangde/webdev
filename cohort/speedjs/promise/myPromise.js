class Wada{
    constructor(executorFn){
        this._state = 'pending'
        this._successCallbacks = []
        this._errorCallbacks = []
        this._finallyCallbacks = []
        executorFn(
            this.resolverFn.bind(this),
            this.rejectorFn.bind(this)
        )
    }
    then(cb){
        this._successCallbacks.push(cb)
        return this
    }

    catch(cb){
        this._errorCallbacks.push(cb)
        return this
    }

    finally(cb){
        this._finallyCallbacks.push(cb)
        return this
    }

    resolverFn(value){
        this._state = 'fulfilled'
        this._successCallbacks.forEach((cb)=> cb(value))
        this._finallyCallbacks.forEach((cb)=> cb())
        
    }
    
    rejectorFn(error){
        this._state = 'rejected'
        this._errorCallbacks.forEach((cb)=> cb(error))
        this._finallyCallbacks.forEach((cb)=> cb())
    }

}

function wait(seconds){
    return new Wada((resolve,reject)=>{
        setTimeout(()=>{
            let success = Math.random() > 0.3 // 70% chance
            if(success){
                resolve("resolve")
            }
            else{
                reject("something went wrong!")
            }
        }, seconds * 1000)
    })
}
wait(3)
.then((msg)=>console.log("promise resolved", msg))
.catch((error)=>console.log("Error occured", error))
.finally(()=>console.log("Finally"))


