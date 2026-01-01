import dotenv from "dotenv"
dotenv.config({path:".env"})

import express from "express"
import connectDB from "./config/db"
import { RegisterRoutes } from "./routes"

connectDB()
const app = express()
app.use(express.json())

RegisterRoutes(app)      
app.listen(3000,() => {
    console.log("Server running on http://localhost:3000")
})