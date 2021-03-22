import mongoose from "mongoose";


const couponUsedBySchema = mongoose.Schema({
    dateUsed: {
        type: Date,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'User'
    },
},{
    timestamps: true
})

const couponAvailableSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'User'
    },
},{
    timestamps: true
})



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
        type: String,
    },
    timesUsed: {
        type: Number,
        required: true,
        default: 0
    },
    isAvailableTo: {
        type: Number,
        required: true,
        default: 0
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
    couponAvailableForUser: [couponAvailableSchema],
    couponUsedBy: [couponUsedBySchema]
},{
    timestamps: true
})

const Coupon = mongoose.model('Coupon', couponSchema);

export default Coupon