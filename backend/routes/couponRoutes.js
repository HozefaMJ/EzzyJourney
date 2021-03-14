import express from "express";

const router = express.Router()

// CONTROLLERS
import {
    allCoupons,
    createCoupon,
    useCoupon,
    toggleCouponActive
} from "../controllers/couponController.js";

import {
    protect,
    admin
} from "../middleware/authMiddleware.js";

router
    .route('/new')
    .post(protect,admin,createCoupon)

router
    .route('/all')
    .get(protect,admin,allCoupons)

router
    .route("/:id/used")
    .put(protect,useCoupon)

router
    .route("/:id/active")
    .put(protect,admin,toggleCouponActive)

export default router;