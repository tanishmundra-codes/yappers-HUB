import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import express from 'express'
import cors from 'cors';
import User from './models/user.model.js'
import bcrypt from 'bcrypt'

dotenv.config({ path: '../.env' })

const app = express()
const PORT = process.env.PORT

// Middleware

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json()); // Parse JSON body

connectDB()
    .then(() => {
        app.listen(PORT || 4000, () => {
            console.log("App is running on port: ", PORT)
        })
    })
    .catch((error) => {
        console.log("MongoDb connection failed", error)
    })

app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body

        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "Email already exists" })
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: "New user created" })

    } catch (error) {
        console.log("Error in user signup", error)
        res.status(500).json({ message: "Internal server error" })
    }
})
