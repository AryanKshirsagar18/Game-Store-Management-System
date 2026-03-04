import express from "express";
import dotenv from "dotenv";
import gameRoutes from "./routes/gameRoutes.js";
import {connectDB} from "./config/db.js";
import n from "node:dns/promises"
import cors from "cors";

dotenv.config()
const app=express();
const port=process.env.PORT||3000
app.use(cors(
    {
        origin:`http://localhost:5173`
    }
))
n.setServers(["1.1.1.1","8.8.8.8"
    
])

app.use(express.json())
app.use("/games",gameRoutes)

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`http://localhost:${port}/games`)

    })
})