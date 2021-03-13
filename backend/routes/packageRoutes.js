import express from "express";

const router = express.Router()

// Controllers
import {
    addPackage, 
    getAllPackages,
    getPackageById,
    updatePackage
} from "../controllers/packageController.js";

import {
    protect,
    employee,
    admin
} from "../middleware/authMiddleware.js";

router.post('/new',protect,employee,addPackage)

router.get("/all",getAllPackages)

router
    .route("/:id")
    .get(getPackageById)
    .put(protect,employee,updatePackage)

export default router;