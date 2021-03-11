import mongoose from "mongoose";

const portalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    logo: {
        type: String,
        required: true
    },
    coverImages: [
        {
            type: String,
            required: true
        }
    ],
    vision: {
        type: String,
        required: true
    },
    mission: {
        type: String,
        required: true
    },
    aboutus: {
        type: String,
        required: true
    },
    contactPrimary: {
        type: Number,
        required: true
    },
    contactSecondary: {
        type: Number,
        required: true
    },
    address: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Portal = mongoose.model('Portal', portalSchema);

export default Portal