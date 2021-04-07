import asyncHandler from "express-async-handler";

/////////////////////////////
///////  MODELS   //////////
////////////////////////////
import Package from "../models/packageModel.js";
import User from "../models/userModel.js";


// Dummy
import packages from "../data/packages.js";

// @desc Add Package
// @route POST /api/package/new
// @access Private
const addPackage = asyncHandler(async(req,res) => {
    const {packageCode,
           title,
           description,
           packageImages,
           placesCovered,
           hotelNames,
           itinerary,
           termsConditions,
           duration,
           destination,
           inclusions,
           exclusions,
           category,
           currency,
           adultPrice,
           childAbove6,
           childBelow6,
           isMeal,
           isFlights,
           isHotel,
           isTransportation,
           isVisa} = req.body;

    const packageExists = await Package.findOne({packageCode: packageCode})
    
    if(packageExists) {
        res.status(400);
        throw new Error("Package Already Exists")
    }

    const price = {
        adults: adultPrice,
        childAbove6,
        childBelow6
    }

    const packages = await Package.create({
        packageCode,
        title,
        description,
        packageImages,
        placesCovered,
        hotelNames,
        itinerary,
        termsConditions,
        duration,
        destination,
        inclusions,
        exclusions,
        category,
        currency,
        price: price,
        isMeal,
        isFlights,
        isHotel,
        isTransportation,
        isVisa
    })

    if(packages) {
        res.status(201).json({
            _id: packages._id,
            packageCode: packages.packageCode,
            title: packages.title,
            description: packages.description,
            packageImages: packages.packageImages,
            placesCovered: packages.placesCovered,
            hotelNames: packages.hotelNames,
            itinerary: packages.itinerary,
            termsConditions: packages.termsConditions,
            duration: packages.duration,
            destination: packages.destination,
            inclusions: packages.inclusions,
            exclusions: packages.exclusions,
            category: packages.category,
            currency: packages.currency,
            price: packages.price,
            isMeal: packages.isMeal,
            isFlights: packages.isFlights,
            isHotel: packages.isHotel,
            isTransportation: packages.isTransportation,
            isVisa: packages.isVisa
        })
    } else {
        res.status(404);
        throw new Error("Package Not Found")
    }

})


// @desc Get All Packages
// @route GET /api/package/all
// @access Public
const getAllPackages = asyncHandler(async(req,res) => {

    // For Pagination
    const pageSize = 3
    const page = Number(req.query.pageNumber) || 1
    // Modified for search
    // /api/products?keyword=${keyword}
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}


    const count = await Package.countDocuments({...keyword})
    const packages = await Package.find({...keyword}).limit(pageSize).skip(pageSize * (page - 1))
    res.json({packages,page,pages: Math.ceil(count/pageSize)})
})

// @desc Get All Packages
// @route GET /api/package/
// @access Public
const dummyAll = asyncHandler(async(req,res) => {
    res.json(packages);
})

// @desc Get Package by id
// @route GET /api/package/dummy/:id
// @access public
const dummyById = asyncHandler(async(req,res) => {
    const packagei = packages.find(p => p._id === req.params.id);

    res.json(packagei)
    
})

// @desc Get Package by id
// @route GET /api/package/:id
// @access public
const getPackageById = asyncHandler(async(req,res) => {
    const packages = await Package.findById(req.params.id);

    if(packages) {
        res.json(packages)
    } else {
        res.status(404);
        throw new Error("Package Not Found")
    }
})



// @desc Update Package
// @route PUT /api/package/:id
// @access private admin
const updatePackage = asyncHandler(async(req,res) => {
    const packages = await Package.findById(req.params.id);

    if(packages) {
        packages.packageCode = req.body.packageCode || packages.packageCode,
        packages.title = req.body.title || packages.title,
        packages.description = req.body.description || packages.description,
        
        packages.placesCovered = req.body.placesCovered || packages.placesCovered,
        packages.hotelNames = req.body.hotelNames || packages.hotelNames,
        packages.itinerary = req.body.itinerary || packages.itinerary,
        packages.termsConditions = req.body.termsConditions || packages.termsConditions,
        packages.duration = req.body.duration || packages.duration,
        packages.destination = req.body.destination || packages.destination,
        packages.inclusions = req.body.inclusions || packages.inclusions,
        packages.exclusions = req.body.exclusions || packages.exclusions,
        packages.category = req.body.category || packages.category,
        packages.currency = req.body.currency || packages.currency,
        
        packages.price.adults = req.body.adultPrice || packages.price.adults,
        packages.price.childAbove6 = req.body.childAbove6 || packages.price.childAbove6,
        packages.price.childBelow6 = req.body.childBelow6 || packages.price.childBelow6,

        // Always send booleans from frontend
        packages.isMeal = req.body.isMeal,
        packages.isFlights = req.body.isFlights,
        packages.isHotel = req.body.isHotel,
        packages.isTransportation = req.body.isTransportation,
        packages.isVisa = req.body.isVisa
        
        packages.packageImages.push(req.body.packageImages)

        const updatedPackage = await packages.save();

        res.json({
            packageCode: updatedPackage.packageCode,
            title: updatedPackage.title,
            description: updatedPackage.description,
            placesCovered: updatedPackage.placesCovered,
            hotelNames: updatedPackage.hotelNames,
            itinerary: updatedPackage.itinerary,
            termsConditions: updatedPackage.termsConditions,
            duration: updatedPackage.duration,
            destination: updatedPackage.destination,
            inclusions: updatedPackage.inclusions,
            exclusions: updatedPackage.exclusions,
            category: updatedPackage.category,
            currency: updatedPackage.currency,
            price: updatedPackage.price,
            isMeal: updatedPackage.isMeal,
            isFlights: updatedPackage.isFlights,
            isHotel: updatedPackage.isHotel,
            isTransportation: updatedPackage.isTransportation,
            isVisa: updatedPackage.isVisa,
        })
    } else {
        res.status(404);
        throw new Error("Package Not Found")
    }
})


// @desc Verify Package
// @route PUT /api/package/verify/:id
// @access private admin
const verifyPackageById = asyncHandler(async(req,res) => {
    const verifyPackage = await Package.findById(req.params.id);

    if(verifyPackage){
        verifyPackage.isVerified = req.body.isVerified

        const verifiedPackage = await verifyPackage.save();

        res.json(verifiedPackage)
    } else {
        res.status(404);
        throw new Error("Package Not Found")
    }

})


// @desc Block Package
// @route PUT /api/package/block/:id
// @access private admin
const blockPackageById = asyncHandler(async(req,res) => {
    const blockPackage = await Package.findById(req.params.id);

    if(blockPackage){
        blockPackage.isBlocked = req.body.isBlocked

        const blockedPackage = await blockPackage.save();

        res.json(blockedPackage)
    } else {
        res.status(404);
        throw new Error("Package Not Found")
    }

})


// @desc Toggle Package Status
// @route PUT /api/package/active/:id
// @access private admin
const togglePackageById = asyncHandler(async(req,res) => {
    const togglePackage = await Package.findById(req.params.id);

    if(togglePackage){
        togglePackage.isActive = req.body.isActive

        const toggledPackage = await togglePackage.save();

        res.json(toggledPackage)
    } else {
        res.status(404);
        throw new Error("Package Not Found")
    }

})


// @desc delete Package By Id
// @route DELETE /api/package/:id
// @access Private Admin
const deletePackage = asyncHandler(async(req,res) => {
    const packages = await Package.findById(req.params.id);

    if(packages){
        await packages.remove()

        res.json({
            message: "You have deleted the package"
        })
    } else {
        res.status(404);
        throw new Error("Package Not Found")
    }
})

// @desc Create new package Review
// @route POST /api/packages/:id/reviews
// @access Private
const newPackageReview = asyncHandler(async(req,res) => {
    const {
        comment,
        rating
    } = req.body;

    const packages = await Package.findById(req.params.id);

    if(packages){
        const alreadyReviewed = packages.reviews.find(r => r.user.toString() == req.user._id.toString())

        if(alreadyReviewed){
            res.status(400);
            throw new Error("Already Reviewed")
        }

        const review = {
            name: req.user.name,
            rating:Number(rating),
            comment,
            user: req.user._id
        }

        packages.reviews.push(review);

        packages.numReviews = packages.reviews.length;

        packages.rating = packages.reviews.reduce((acc,item) => item.rating + acc, 0) / packages.reviews.length;

        await packages.save()
        res.status(201).json({msg: "Review Added"})
    } else {
        res.status(404);
        throw new Error("Package Not Found")
    }
})


// @desc Create new package Review
// @route POST /api/packages/:id/wishlist
// @access Private
const addPackageToWishlist = asyncHandler(async(req,res) => {
    
    const packages = await Package.findById(req.params.id);

    const user = await User.findById(req.user._id);

    if(packages){
        if(user){
            const alreadyWishlisted = packages.wishlist.find(r => r.user.toString() == req.user._id.toString())

            const userWishlisted = user.wishlist.find(r => r.name.toString() == packages.packageCode.toString())

            if(alreadyWishlisted){
                res.status(400);
                throw new Error("Already Wishlisted")
            }

            if(userWishlisted) {
                res.status(400);
                throw new Error("Already Wishlisted")
            }

            const wishlistedPackage = {
                name: req.user.name,
                user: req.user._id
            }

            const wishlistedUser = {
                name: packages.packageCode,
                package: req.params.id
            }

            packages.wishlist.push(wishlistedPackage);

            user.wishlist.push(wishlistedUser);

            packages.numWishlisted = packages.wishlist.length;

            await packages.save()
            await user.save()

            res.status(201).json({msg: "Added to Wishlist"})
        }
    } else {
        res.status(404);
        throw new Error("Package Not Found")
    }
})

// @desc Get My Wishlist
// @route GET /api/packages/myWishlist
// @access Private
const myWishlist = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id);

    if(user){
        res.json(user.wishlist)
    } else {
        res.status(404);
        throw new Error("Empty Wishlist")
    }
})

// @desc Delete From Wishlist
// @route DELETE /api/packages/myWishlist/:id
// @access Private
const removeFromWishlist = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id);

    if(user){
        const inWishlist = user.wishlist.find(r => r._id.toString() == req.params.id.toString())

        if(inWishlist){
            user.wishlist.pop(inWishlist);

            await user.save();
        } else {
            res.status(404);
            throw new Error("Not in wishlist")
        }
    } else {
        res.status(404);
        throw new Error("User Not Found");
    }
})

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopPackages = asyncHandler(async (req, res) => {
    const packages = await Package.find({}).sort({ rating: -1 }).limit(3)
  
    res.json(packages)
  })


export {
    addPackage,
    getAllPackages,
    getPackageById,
    updatePackage,
    verifyPackageById,
    blockPackageById,
    togglePackageById,
    deletePackage,
    newPackageReview,
    getTopPackages,
    addPackageToWishlist,
    myWishlist,
    removeFromWishlist,
    dummyAll,
    dummyById
}