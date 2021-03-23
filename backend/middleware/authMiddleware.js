import jwt from 'jsonwebtoken';
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js"

const protect = expressAsyncHandler(async(req,res,next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not Authorized Token Failed')
        }
    }

    if(!token){
        res.status(401)
        throw new Error("Not Authorized, No Token")
    }

})


const anonymous = expressAsyncHandler(async(req,res,next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not Authorized Token Failed')
        }
    }

    if(!token){
        req.user = await User.findById("604f145d1a43091a78e14ce9").select('-password')

        next()
    }

})

const checkBlocked = (req,res,next) => {
    if(req.user && req.user.isBlocked){
        next()
    } else {
        res.status(401)
        throw new Error('You have been blocked from the platform')
    }
}

const employee = (req,res,next) => {
    if(req.user && req.user.isEmployee){
        next()
    } else {
        res.status(401)
        throw new Error('Not Authorized as an Employee')
    }
}

const admin = (req,res,next) => {
    if(req.user && req.user.isAdmin){
        next()
    } else {
        res.status(401)
        throw new Error('Not Authorized as an Admin')
    }
} 

export {protect, anonymous, employee, admin, checkBlocked}