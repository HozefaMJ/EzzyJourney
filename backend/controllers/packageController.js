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

export {
    addPackage,
    getAllPackages,
    getPackageById
}