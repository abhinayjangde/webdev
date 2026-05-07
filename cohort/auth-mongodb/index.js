import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import db from "./lib/db.js";

import authRoutes from "./routes/user.route.js"

const app = express();
const port = process.env.PORT || 3000

db();
dotenv.config()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/v1/users", authRoutes )

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})