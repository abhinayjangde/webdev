const fs = require("node:fs");

const age = 23;

printAge();

setImmediate(() => { console.log("setImmediate") })

fs.readFile("readme.md", "utf-8", () => {
    console.log("reading file")
})

Promise.resolve().then(() => {
    console.log("promise")
})

setTimeout(() => {
    console.log("setTimeout");
}, 0);

process.nextTick(() => { console.log("process.nextTick") })

function printAge() {
    console.log("age=", age)
}

console.log("execution finished")

