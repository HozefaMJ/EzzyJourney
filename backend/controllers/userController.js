import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

// MODELS
import User from "../models/userModel.js";

// @desc Authenticate User and Generate Token
// @route POST /api/user/login
// @access Public
const authUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email: email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            contact: user.contact,
            dob: user.dob,
            address: user.address,
            isAdmin: user.isAdmin,
            isEmployee: user.isEmployee,
            isBlocked: user.isBlocked,
            token: generateToken(user._id)
        })
    } else{
        res.status(401);
        throw new Error('Invalid Email or Password')
    }

})

// @desc Register User
// @route POST /api/user/register
// @access Public
const registerUser = asyncHandler(async(req,res) => {
    const {name,email,contact,dob,password,address} = req.body;

    const userExists = await User.findOne({email: email})

    if(userExists){
        res.status(400);
        throw new Error("User already exists")
    }

    const user = await User.create({
        name,
        email,
        contact,
        dob: dob,
        password,
        address
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            contact: user.contact,
            dob: user.dob,
            address: user.address,
            password: user.password,
            isAdmin: user.isAdmin,
            isEmployee: user.isEmployee,
            isBlocked: user.isBlocked
        })
    } else {
        res.status(404);
        throw new Error("User Not Found")
    }

})

export {
    authUser,
    registerUser
}