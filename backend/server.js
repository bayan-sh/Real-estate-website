import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import routeprop from './routes/propertyroute.js'
import userroute from './routes/userroute.js'
import multer from 'multer'


dotenv.config()
const app = express()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))
//midleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/property',routeprop);
app.use('/user' ,userroute);

// app.get("user/signup", async (req,res)=> {
//     const users= await user.find();
//     return res.json(users);
// })





app.listen(4000, () => console.log("server is up and running"))

