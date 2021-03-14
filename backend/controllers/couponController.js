import asyncHandler from "express-async-handler";

// Models
import Coupon from "../models/couponModel.js";

// @desc Create New Coupon
// @route POST /api/coupons/new
// @access Private Admin
const createCoupon = asyncHandler(async(req,res) => {
    const {code,percentage,isReuseable,expiresAt} = req.body;

    const couponExists = await Coupon.findOne({code: code})

    if(couponExists){
        res.status(400);
        throw new Error("Coupon Already Exists")
    }

    const coupon = await Coupon.create({
        code,
        discount_percentage: percentage,
        isReuseable,
        expiresAt
    })

    if(coupon) {
        res.status(201).json(coupon)
    } else {
        res.status(400);
        throw new Error('Invalid Data Input')
    }

})

// @desc Get All Coupons
// @route GET /api/coupons/all
// @access Private Admin
const allCoupons = asyncHandler(async(req,res) => {
    const coupons = await Coupon.find({});

    if(coupons){
        res.json(coupons);
    } else {
        res.status(404);
        throw new Error('No Coupons Found')
    }
})


// @desc Coupon Used
// @route GET /api/coupons/:id/used
// @access Private
const useCoupon = asyncHandler(async(req,res) => {
    const coupon = await Coupon.findById(req.params.id);

    if(coupon) {
        coupon.isUsed = true;
        coupon.dateUsed = Date.now()

        const usedCoupon = await coupon.save();

        res.json(usedCoupon);
    } else {
        res.status(404);
        throw new Error("Coupon Not Found")
    }
})


// @desc Set Coupon Active
// @route Put /api/coupons/:id/active
// @access Private
const toggleCouponActive = asyncHandler(async(req,res) => {
    const coupon = await Coupon.findById(req.params.id);

    if(coupon) {
        coupon.isActive = req.body.isActive;

        const usedCoupon = await coupon.save();

        res.json(usedCoupon);
    } else {
        res.status(404);
        throw new Error("Coupon Not Found")
    }
})



// @desc Update coupon to used
// @route PUT /api/coupons/:id/used
// @access Private
const setCouponUsed = asyncHandler(async(req,res) => {
    const coupon = await Coupon.findById(req.params.id);

    if(coupon) {
        coupon.isUsed = req.body.isUsed;

        const usedCoupon = await coupon.save();

        res.json(usedCoupon);
    } else {
        res.status(404);
        throw new Error("Coupon Not Found")
    }
})


export {
    createCoupon,
    allCoupons,
    useCoupon,
    toggleCouponActive,
    setCouponUsed
}