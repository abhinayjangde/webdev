import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js"

dotenv.config() // loading env variables

const port = process.env.PORT || 4000 // fallback for PORT
const app = express()

// db
db()

app.use(cors()) // cors error
app.use(express.json()) // parsing jsong
app.use(express.urlencoded({extended: true})) // url encoded

app.get("/",(req,res)=>{
    res.json({
        msg:"Home"
    })
})

app.get("/abhi", (req,res)=>{
    res.json({
        msg:"Hello, Abhi"
    })
})

app.get("products",(req,res)=>{
    res.json({
        success: true,
        data: [
            {
                name:"iPhone",
                price:12442
            },
            {
                name:"Lenove",
                price:12442
            },
            {
                name:"HP Laptop",
                price:12442
            }
        ]
    })
})

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})