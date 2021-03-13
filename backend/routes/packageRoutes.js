import express from "express";

const router = express.Router()

// Controllers
import {
    addPackage, 
    getAllPackages
} from "../controllers/packageController.js";

import {
    protect,
    employee,
    admin
} from "../middleware/authMiddleware.js";

router.post('/new',protect,employee,addPackage)

router.get("/all",protect,employee,getAllPackages)

export default router;