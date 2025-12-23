
import express from "express"
import { RegisterRoutes } from "./routes/routes"
const app = express()
app.use(express.json)

RegisterRoutes(app)
app.listen(3000,() => {
    console.log("Server running on http://localhost:3000")
})