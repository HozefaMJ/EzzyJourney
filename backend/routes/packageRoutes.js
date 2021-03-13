import express from "express";

const router = express.Router()

// Controllers
import {
    addPackage
} from "../controllers/packageController.js";

import {
    protect,
    employee,
    admin
} from "../middleware/authMiddleware.js";

router.post('/new',addPackage)

export default router;