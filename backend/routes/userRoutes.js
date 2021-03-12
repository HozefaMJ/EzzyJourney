import express from 'express';

const router = express.Router()

// CONTROLLERS
import {
    authUser, registerUser,
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

export default router;