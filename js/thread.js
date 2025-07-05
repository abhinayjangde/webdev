const crypto = require("crypto")
const fs = require("fs")

// process.env.UV_THREADPOOL_SIZE = 2

fs.readFile("sample.txt", "utf-8", function(err, data){

    setTimeout(()=> console.log("Set Timeout inside FS"),0)
    setImmediate(()=> console.log("Set Immediate inside FS"))

    const start = Date.now()

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", function(err, data){
        console.log(` ${Date.now() - start} Password 1 hashed`)
    })
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", function(err, data){
        console.log(` ${Date.now() - start} Password 2 hashed`)
    })
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", function(err, data){
        console.log(` ${Date.now() - start} Password 3 hashed`)
    })
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", function(err, data){
        console.log(` ${Date.now() - start} Password 4 hashed`)
    })
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", function(err, data){
        console.log(` ${Date.now() - start} Password 5 hashed`)
    })
    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", function(err, data){
        console.log(` ${Date.now() - start} Password 6 hashed`)
    })
})
