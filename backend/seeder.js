import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from "colors";
import users from './data/user.js';
//import products from "./data/products.js";

import User from "./models/userModel.js"
import Package from "./models/packageModel.js"
import Queries from "./models/queriesModel.js"
import Portal from "./models/portalModel.js"
import Coupon from "./models/couponModel.js"

import connectDB from "./config/db.js";

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Package.deleteMany()
        await Queries.deleteMany()
        await User.deleteMany()
        await Portal.deleteMany()
        await Coupon.deleteMany()

        const createdUsers = await User.insertMany(users);

        {/*const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)*/}

        console.log('Data Imported'.green.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}



const destroyData = async () => {
    try {
        await Queries.deleteMany()
        await Package.deleteMany()
        await User.deleteMany()
        await Portal.deleteMany()
        await Coupon.deleteMany()

        console.log('Data Destroyed'.red.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}


if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}