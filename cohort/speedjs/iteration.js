let expenses = [
    { description: "Groceries", amount: 50, category: "Food" },
    { description: "Electricity Bill", amount: 100, category: "Utilities" },
    { description: "Dinner", amount: 30, category: "Food" },
    { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let tasks = [
    { description: "Write report", completed: false, priority: 2 },
    { description: "Send email", completed: true, priority: 3 },
    { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTask = tasks
    .filter((task)=>!task.completed)
    .sort((a,b)=> a.priority - b.priority)

// console.log(pendingSortedTask)

let movieRatings = [
    {title: "Movie A", ratings: [4,5,3]},
    {title: "Movie B", ratings: [5,5,4]},
    {title: "Movie C", ratings: [3,4,2]}
]

let averageRatings = movieRatings.map((movie)=>{

    return {title: movie.title, ratings: (movie.ratings.reduce((sum, rate)=> sum + rate, 0)/movie.ratings.length).toFixed(2)}

})

// console.log(averageRatings)