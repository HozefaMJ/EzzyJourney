import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    rating: {
        type:Number,
        required: true
    },
    comment: {
        type:String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
},{
    timestamps: true
})


const queriedSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
},{
    timestamps: true
})

const wishlistSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
},{
    timestamps: true
})


const packageSchema = mongoose.Schema({
    packageCode: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    packageImages: [{
        type: String,
        name: String
    }],
    placesCovered: [{
        type: String,
        required: true
    }],
    hotelNames: [{
        type: String,
        required: true
    }],
    itinerary: {
        type: String,
        required: true
    },
    termsConditions: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    exclusions: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    wishlist: [wishlistSchema],
    queried: [queriedSchema],
    reviews: [reviewSchema],
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        adults: {
            type: Number,
            required: true,
            default: 0
        },
        childAbove6: {
            type: Number,
            required: true,
            default: 0
        },
        childBelow6: {
            type: Number,
            required: true,
            default: 0
        }
    },
    isBlocked: {
        type: Boolean,
        required: true,
        default: false
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false
    },
    isActive: {
        type: Boolean,
        required: true,
        default: false
    },
    isMeal: {
        type: Boolean,
        required: true,
        default: false
    },
    isFlights: {
        type: Boolean,
        required: true,
        default: false
    },
    isHotel: {
        type: Boolean,
        required: true,
        default: false
    },
    isTransportation: {
        type: Boolean,
        required: true,
        default: false
    },
    isVisa: {
        type: Boolean,
        required: true,
        default: false
    }

},{
    timestamps: true
})

const Package = mongoose.model('Package',packageSchema);


export default Package