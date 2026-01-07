import dotenv from "dotenv"
import express from "express"
import connectDB from "./config/db"
import { RegisterRoutes } from "./routes"
import swaggerUi from "swagger-ui-express"
import * as swaggerDocument from "./swagger/swagger.json"


dotenv.config({path:".env"})
connectDB()
const app = express()
app.use(express.json())
app.use("/docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument))

RegisterRoutes(app)      
app.listen(3000,() => {
    console.log("Server running on http://localhost:3000")
    console.log("Swagger doc://localhost:3000/docss on http")
})