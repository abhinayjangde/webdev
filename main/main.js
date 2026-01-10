const fs = require("node:fs")
const crypto = require("node:crypto")

// process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("mypassword", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("1 key", key)
})
crypto.pbkdf2("mypassword", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("2 key", key)
})
crypto.pbkdf2("mypassword", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("3 key", key)
})
crypto.pbkdf2("mypassword", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("4 key", key)
})
crypto.pbkdf2("mypassword", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("5 key", key)
})