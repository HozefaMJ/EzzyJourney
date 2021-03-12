import express from 'express';

const router = express.Router()

// CONTROLLERS
import {
    authUser, 
    deleteUserById, 
    deleteUserProfile, 
    getAllUsers, 
    getUserById, 
    getUserProfile, 
    registerUser,
    updateUserProfile,
    updateUserProfileById,
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
    .route('/all')
    .get(protect,admin,getAllUsers)

router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect,updateUserProfile)
    .delete(protect,deleteUserProfile)

router
    .route('/:id')
    .delete(protect,admin,deleteUserById)
    .get(protect,admin,getUserById)
    .put(protect,admin,updateUserProfileById)

export default router;