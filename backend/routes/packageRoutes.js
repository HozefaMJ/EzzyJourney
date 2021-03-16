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
    togglePackageById,
    deletePackage,
    newPackageReview,
    getTopPackages,
    addPackageToWishlist,
    myWishlist,
    removeFromWishlist
} from "../controllers/packageController.js";

import {
    protect,
    employee,
    admin
} from "../middleware/authMiddleware.js";

router.post('/new',protect,employee,addPackage);

router.get("/all",getAllPackages);

router.get("/top",getTopPackages);

router.get("/myWishlist",protect,myWishlist);

router
    .route('/myWishlist/:id')
    .delete(protect,removeFromWishlist)

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
    .route("/:id/reviews")
    .post(protect,newPackageReview)

router
    .route("/:id/wishlist")
    .post(protect,addPackageToWishlist)

router
    .route("/:id")
    .get(getPackageById)
    .put(protect,employee,updatePackage)
    .delete(protect,admin,deletePackage)

export default router;