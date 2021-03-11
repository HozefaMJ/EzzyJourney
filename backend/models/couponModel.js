import mongoose from "mongoose";

const couponSchema = mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    discount_percentage: {
        type: Number,
        required: true
    },
    isReuseable:{
        type: Boolean,
        required: true,
        default: false
    },
    expiresAt: {
        type: Date,
    },
    isUsed: {
        type: Boolean,
        required: true,
        default: false
    },
    isExpired: {
        type: Boolean,
        required: true,
        default: false
    },
    dateUsed: {
        type: Date,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: false
    },
})

const Coupon = mongoose.model('Coupon', couponSchema);

export default Coupon