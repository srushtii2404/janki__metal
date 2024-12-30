import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
dotenv.config()
import connectDB from "./config/connectDB.js"
import userRoute from "./route/user.route.js"

const app=express()

app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL || '*'
  }));
  
app.use("/data",userRoute)

const PORT=8080 || process.env.PORT

connectDB().then(() => {
        app.listen(PORT,() =>{
        console.log("server is running",PORT);
    })
})

