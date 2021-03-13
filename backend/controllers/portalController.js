import asyncHandler from "express-async-handler";

////////////////////////////
/////   MODELS       //////
//////////////////////////
import Portal from "../models/portalModel.js";

// @desc Create Portal
// @route POST /api/portal/
// @access Public
const createPortal = asyncHandler(async(req,res) => {
    const {name,vision,mission,aboutus,contactPrimary,contactSecondary,address,createdAt} = req.body;

    const portal = await Portal.create({
        name,
        vision,
        mission,
        aboutus,
        contactPrimary,
        contactSecondary,
        address,
        createdAt
    })

    if(portal){
        res.status(201).json(portal)
    } else {
        res.status(404);
        throw new Error("Portal Not Found")
    }
})


// @desc Toggle Portal Status
// @route PUT /api/portal/active/:id
// @access private admin
const togglePortalById = asyncHandler(async(req,res) => {
    const togglePortal = await Portal.findById(req.params.id);

    if(togglePortal){
        togglePortal.isActive = req.body.isActive

        const toggledPackage = await togglePortal.save();

        res.json(toggledPackage)
    } else {
        res.status(404);
        throw new Error("Portal Not Found")
    }

})


// @desc Update Portal Profile By ID
// @route PUT /api/portal/:id
// @access Private Admin
const updatePortalById = asyncHandler(async(req,res) => {
    const portal = await Portal.findById(req.params.id);

    if(portal){
        portal.name = req.body.name || portal.name,
        portal.mission = req.body.mission || portal.mission,
        portal.vision = req.body.vision || portal.vision,
        portal.aboutus = req.body.aboutus || portal.aboutus,
        portal.contactPrimary = req.body.contactPrimary || portal.contactPrimary,
        portal.contactSecondary = req.body.contactSecondary || portal.contactSecondary,
        portal.address = req.body.address || portal.address,
        portal.createdAt = req.body.createdAt || portal.createdAt

        const updatePortal = await portal.save()

        res.json(updatePortal)

    } else {
        res.status(404);
        throw new Error("Portal Not Found")
    }
})



export {
    createPortal,
    togglePortalById,
    updatePortalById
}