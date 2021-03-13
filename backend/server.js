import path from "path";
import express from 'express';
import dotenv from 'dotenv';
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";

//import products from './data/products.js';

// Middleware
import {notFound, errorHandler} from "./middleware/errorMiddleware.js";

// Routes
import userRoutes from "./routes/userRoutes.js";
import packageRoutes from "./routes/packageRoutes.js";

dotenv.config()

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/users',userRoutes);
app.use('/api/packages',packageRoutes);
//app.use('/api/coupons',couponRoutes);
//app.use('/api/upload',uploadRoutes);

// For Image Upload
{/*
const __dirname = path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))
*/}
// After Build In Production Mode 
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get("*",(req,res) => res.sendFile(path.resolve(__dirname, 'frontend','build','index.html')))
} else {
    app.get('/', (req,res)=>{
        res.send('API is running...........');
    })
}

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5300

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.inverse))