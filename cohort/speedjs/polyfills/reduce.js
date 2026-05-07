
const arr = [1, 2, 3, 4, 5]
const result = arr.reduce((acc, current) => acc + current, 0)
console.log(result)

if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (cb, initialValue = undefined) {
        if (!initialValue) {

            let acc = this[0]
            for (let i = 1; i < this.length; i++) {
                acc = cb(acc, this[i])
            }
            return acc
        }
        let acc = initialValue
        for (let i = 0; i < this.length; i++) {
            acc = cb(acc, this[i])
        }
        return acc
    }
}

// DRY principle
if (!Array.prototype.dryReduce) {
    Array.prototype.dryReduce = function (cb, initialValue = undefined) {

        let acc = initialValue || this[0]
        let startIndex = initialValue ? 0 : 1

        for (let i = startIndex; i < this.length; i++) {
            acc = cb(acc, this[i])
        }
        return acc

    }
}

const myResult = arr.dryReduce((acc, curr) => acc + curr, 12)
console.log(myResult)