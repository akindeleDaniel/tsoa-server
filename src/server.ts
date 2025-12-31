import dotenv from "dotenv"
dotenv.config({path:".env"})

import express from "express"
import connectDB from "./config/db"
import { RegisterRoutes } from "./routes/routes"

connectDB()
const app = express()
app.use(express.json())

RegisterRoutes(app)
console.log("ENV:",process.env.MONGO_URI)        
app.listen(3000,() => {
    console.log("Server running on http://localhost:3000")
})