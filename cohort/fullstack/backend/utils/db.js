import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

function db(){

    mongoose.connect(process.env.DATABASE_URL)
    .then((res)=>{
        // console.log(res)
    })
    .catch((err)=>{
        // console.log(err)
    })
    .finally(()=>console.log("database connect"))
}

export default db