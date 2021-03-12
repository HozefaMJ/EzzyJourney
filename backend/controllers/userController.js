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
// @route POST /api/user/
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


// @desc Get User Profile
// @route Get /api/user/profile
// @access Private
const getUserProfile = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id);

    if(user) {
        res.json({
            name: user.name,
            email: user.email,
            contact: user.contact,
            dob: user.dob,
            address: user.address
        })
    } else {
        res.status(404);
        throw new Error("User Not Found")
    }
})

// @desc Update User Profile
// @route PUT /api/user/profile
// @access Private
const updateUserProfile = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id);

    if(user){
        user.name = req.body.name || user.name,
        user.email = req.body.email || user.email,
        user.contact = req.body.contact || user.contact,
        user.dob = req.body.dob || user.dob
        
        if(req.body.password) {
            user.address = req.body.address || user.address
        }

        const updatedUser = await user.save()

        res.json({
            name: updatedUser.name,
            email: updatedUser.email,
            contact: updatedUser.contact,
            dob: updatedUser.dob,
            isAdmin: updatedUser.isAdmin,
            isEmployee: updatedUser.isEmployee,
            isBlocked: updatedUser.isBlocked,
            token: generateToken(updatedUser._id)
        })
    } else {
        res.status(404);
        throw new Error("User Not Found")
    }
})


// @desc Delete User Profile
// @route Delete /api/user/profile
// @access Private
const deleteUserProfile = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        await user.remove();
        res.json({
            message: "Your account has been successfully deleted"
        })
    } else {
        res.status(404);
        throw new Error("User Not Found")
    }
})


export {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile
}