import asyncHandler from "express-async-handler";

// Models
import Coupon from "../models/couponModel.js";
import User from "../models/userModel.js";

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


// @desc Avail Coupon
// @route PUT /api/coupons/:id/avail
// @access Private Admin
const availCoupon = asyncHandler(async(req,res) => {
    const coupon = await Coupon.findById(req.params.id);

    const couponUser = await  User.findOne({email: req.body.email})

    if(couponUser){
        if(coupon) {
            const alreadyAvailedToUser = coupon.couponAvailableForUser.find(r => r.user.toString() === couponUser._id.toString())
            
            if(alreadyAvailedToUser) {
                res.status(400);
                throw new Error("Already Availed to User")
            }

            const couponAvailedToUser = {
                user: couponUser._id
            }

            coupon.couponAvailableForUser.push(couponAvailedToUser);
            coupon.isAvailableTo = coupon.couponAvailableForUser.length;

            const alreadyAvailed = couponUser.coupons.find(r => r.coupon.toString() === coupon._id.toString())

            if(alreadyAvailed){
                res.status(400);
                throw new Error("Already Availed")
            }

            const couponCode = {
                name: coupon.code,
                coupon: coupon._id
            }

            couponUser.coupons.push(couponCode)

            await coupon.save();
            await couponUser.save();

            res.status(201).json({msg:"Coupon has been Availed for User"})
        } else {
            res.status(404);
            throw new Error("Coupon Not Found")
        }
    } else {
        res.status(404);
        throw new Error("User Not Found")
    }
})

// @desc Coupon Used
// @route PUT /api/coupons/:id/used
// @access Private
const useCoupon = asyncHandler(async(req,res) => {
    const coupon = await Coupon.findById(req.params.id);

    const couponUser = await User.findOne({email: req.body.email})

    if(couponUser){
        if(coupon) {
            if(coupon.isActive){

                if(!coupon.isReuseable && coupon.isUsed){
                    res.status(400);
                    throw new Error("Coupon is not reusable")
                }

                if(coupon.isReuseable){
    
                    const alreadyAvailedToUser = coupon.couponAvailableForUser.find(r => r.user.toString() === couponUser._id.toString())
            
                    if(!alreadyAvailedToUser) {
                        res.status(400);
                        throw new Error("User is not applicable to use this coupon")
                    }

                    const alreadyUsedByUser = coupon.couponUsedBy.find(r => r.user.toString() === couponUser._id.toString())
        
                    if(alreadyUsedByUser) {
                        res.status(400);
                        throw new Error("Already Used")
                    }
        
                    coupon.isUsed = true;
                    coupon.dateUsed = Date.now();
        
                    const couponUsedByUser = {
                        dateUsed: Date.now(),
                        user: couponUser._id
                    }

                    const removeUserfromAvailable = {
                        user: couponUser._id
                    }
        
                    coupon.couponUsedBy.push(couponUsedByUser);
                    coupon.couponAvailableForUser.pull(removeUserfromAvailable);
                    coupon.timesUsed = coupon.couponUsedBy.length;
        
                    await coupon.save();
        
                    res.status(201).json({msg:"Coupon Used for User"})
                } else if(!coupon.isReuseable) {
                    if(!coupon.isUsed) {
                        coupon.isUsed = true;
                        coupon.dateUsed = Date.now()
            
                        const couponUsedByUser = {
                            dateUsed: Date.now(),
                            user: couponUser._id
                        }
            
                        coupon.couponUsedBy.push(couponUsedByUser);
                        coupon.timesUsed = coupon.couponUsedBy.length;
            
                        await coupon.save();
            
                        res.status(201).json({msg:"Coupon Used for User"})
                    }
                } else {
                    res.status(403);
                    throw new Error("Coupon is not reuseable")
                }
            } else {
                res.status(400);
                throw new Error("Coupon is Not Active")
            }
        } else {
            res.status(404);
            throw new Error("Coupon Not Found")
        }
    } else {
        res.status(404);
        throw new Error("User Not Found")
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
    setCouponUsed,
    availCoupon
}