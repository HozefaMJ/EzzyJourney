import mongoose from "mongoose";

const portalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        name: String
    },
    coverImages: [
        {
            type: String,
            required: true
        }
    ],
    vision: {
        type: String,
    },
    mission: {
        type: String,
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
        type: Number
    },
    address: {
        type: String,
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
},{
    timestamps: true
})

const Portal = mongoose.model('Portal', portalSchema);

export default Portal