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


export {
    addPackage,
    getAllPackages,
    getPackageById,
    updatePackage,
    verifyPackageById
}