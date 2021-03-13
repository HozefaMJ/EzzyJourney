import express from "express";

const router = express.Router();

// Controllers
import {
    createPortal, 
    togglePortalById,
    updatePortalById
} from "../controllers/portalController.js"

import {
    protect,
    employee,
    admin
} from "../middleware/authMiddleware.js";


router
    .route("/")
    .post(protect,admin,createPortal)

router
    .route("/:id")
    .put(protect,admin,updatePortalById)

router
    .route("/active/:id")
    .put(protect,admin,togglePortalById)

export default router