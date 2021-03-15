import asyncHandler from "express-async-handler";

/////////////////////////////
///////  MODELS   //////////
////////////////////////////
import Package from "../models/packageModel.js";

// @desc Add Package
// @route POST /api/package/new
// @access Private
const addPackage = asyncHandler(async(req,res) => {
    const {packageCode,
           title,
           description,
           placesCovered,
           hotelNames,
           itinerary,
           termsConditions,
           duration,
           destination,
           exclusions,
           category,
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
        placesCovered,
        hotelNames,
        itinerary,
        termsConditions,
        duration,
        destination,
        exclusions,
        category,
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
            placesCovered: packages.placesCovered,
            hotelNames: packages.hotelNames,
            itinerary: packages.itinerary,
            termsConditions: packages.termsConditions,
            duration: packages.duration,
            destination: packages.destination,
            exclusions: packages.exclusions,
            category: packages.category,
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
    const packages = await Package.find({});

    if(packages){
        res.json(packages)
    } else {
        res.status(404);
        throw new Error("No Package has been created")
    }
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
        packages.exclusions = req.body.exclusions || packages.exclusions,
        packages.category = req.body.category || packages.category,
        
        packages.price.adults = req.body.adultPrice || packages.price.adults,
        packages.price.childAbove6 = req.body.childAbove6 || packages.price.childAbove6,
        packages.price.childBelow6 = req.body.childBelow6 || packages.price.childBelow6,
        
        // Always send booleans from frontend
        packages.isMeal = req.body.isMeal,
        packages.isFlights = req.body.isFlights,
        packages.isHotel = req.body.isHotel,
        packages.isTransportation = req.body.isTransportation,
        packages.isVisa = req.body.isVisa
        

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
            exclusions: updatedPackage.exclusions,
            category: updatedPackage.category,
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

    if(packages){
        const alreadyWishlisted = packages.wishlist.find(r => r.user.toString() == req.user._id.toString())

        if(alreadyWishlisted){
            res.status(400);
            throw new Error("Already Wishlisted")
        }

        const wishlisted = {
            name: req.user.name,
            user: req.user._id
        }

        packages.wishlist.push(wishlisted);

        packages.numWishlisted = packages.wishlist.length;

        await packages.save()
        res.status(201).json({msg: "Wishlisted"})
    } else {
        res.status(404);
        throw new Error("Package Not Found")
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
    addPackageToWishlist
}