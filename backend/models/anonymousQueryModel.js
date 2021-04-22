import mongoose from "mongoose";

const anonymousQuerySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    date: {
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        }
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
    foodPreferance: {
        type: String,
        default: "Normal"
    },
    message: {
        type: String
    },
    isResponded: {
        type: Boolean,
        required: true,
        default: false
    }
},{
    timestamps: true
})

const AnonymousQuery = mongoose.model('AnonymousQuery', anonymousQuerySchema);

export default AnonymousQuery