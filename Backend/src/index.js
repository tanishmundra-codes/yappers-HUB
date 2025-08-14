import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import express from 'express'

dotenv.config({ path: '../.env' })

const app = express()
const PORT = process.env.PORT 

connectDB()
.then(() => {
    app.listen(PORT || 4000, () => {
        console.log("App is running on port: ", PORT)
    })
})
.catch((error) =>{
    console.log("MongoDb connection failed", error)
})