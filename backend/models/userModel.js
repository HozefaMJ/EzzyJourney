import  mongoose from  "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        name: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        sparse: true
    },
    contact: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    wishlist:[
        {
            name: {
                type:String,
                required: true
            },
            package: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Package'
            },
        }
    ],
    coupons:[
        {
            name: {
                type: String,
                required: true
            },
            coupon: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Coupon'
            }
        }
    ],
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    isEmployee: {
        type: Boolean,
        required: true,
        default: false
    },
    isBlocked: {
        type: Boolean,
        required: true,
        default: false
    }
},{
    timestamps: true
})


// Matching Password
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


// Encrypt Password
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

})

const User = mongoose.model('User',userSchema);

export default User;
