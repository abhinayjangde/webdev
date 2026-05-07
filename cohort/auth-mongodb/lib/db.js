import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

async function db() {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connected ", conn.connection.host)
  } catch (error) {
    console.log("Error while connecting to database", error)
    process.exit(1)
  }
}

export default db;
