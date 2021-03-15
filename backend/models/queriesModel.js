import mongoose from "mongoose";

const querySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    package: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Package'
    },
    message: {
        type: String,
        required: true,
    },
    people: {
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
    isResponded: {
        type: Boolean,
        required: true,
        default: false
    }
},{
    timestamps: true
})

const Query = mongoose.model('Query', querySchema);

export default Query