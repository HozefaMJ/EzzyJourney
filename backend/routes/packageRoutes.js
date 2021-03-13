import express from "express";

const router = express.Router()

// Controllers
import {
    addPackage, 
    getAllPackages,
    getPackageById,
    updatePackage,
    verifyPackageById,
    blockPackageById,
    togglePackageById
} from "../controllers/packageController.js";

import {
    protect,
    employee,
    admin
} from "../middleware/authMiddleware.js";

router.post('/new',protect,employee,addPackage)

router.get("/all",getAllPackages)

router
    .route("/verify/:id")
    .put(protect,admin,verifyPackageById)

router
    .route("/block/:id")
    .put(protect,admin,blockPackageById)


router
    .route("/active/:id")
    .put(protect,admin,togglePackageById)

router
    .route("/:id")
    .get(getPackageById)
    .put(protect,employee,updatePackage)

export default router;