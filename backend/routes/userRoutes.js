import express from 'express';

const router = express.Router()

// CONTROLLERS
import {
    authUser, 
    getUserProfile, 
    registerUser,
    updateUserProfile,
} from "../controllers/userController.js";


import {
    protect,
    employee,
    admin
} from "../middleware/authMiddleware.js";

router.post('/login',authUser)

router
    .route('/')
    .post(registerUser)
    
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect,updateUserProfile)

export default router;