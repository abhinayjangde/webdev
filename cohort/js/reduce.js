
// 🔧 Example 4: Count Occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
    console.log(acc[fruit])
  acc[fruit] = (acc[fruit] || 0) + 1;
  console.log(acc)
  return acc;
}, {});
console.log(count);