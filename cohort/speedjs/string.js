let salesData =[
    {product:"Laptop", price:1200},
    {product:"Smartphone", price:800},
    {product:"Headphone", price:150},
    {product:"Keyboard", price:80},
]

let totalSales = salesData.reduce((acc,{price})=>(acc + price),0)
// console.log(totalSales)

let inventory = [
    {name:"Item A", stock: 560},
    {name:"Item B", stock: 40},
    {name:"Item B", stock: 20},
    {name:"Item C", stock: 90},
    {name:"Item D", stock: 300},
]

let lowStockItem = inventory.filter((item)=> item.stock < 100)
// console.log(lowStockItem)

let userActivity = [
    {user: "Arya", activityCount: 50},
    {user: "Sooraj", activityCount: 90},
    {user: "Preeti", activityCount: 23},
]

// find most active user
let mostActiveUser = userActivity.reduce((maxUser,user)=>(user.activityCount > maxUser.activityCount ? user : maxUser))

console.log(mostActiveUser)