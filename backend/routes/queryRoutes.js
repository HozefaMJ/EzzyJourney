import express from "express";

const router = express.Router();

// Controllers
import {
    allQueries,
    newQuery
} from "../controllers/queryController.js";


import {
    protect,
    employee,
    admin
} from "../middleware/authMiddleware.js"

router
    .route("/:id/new")
    .post(protect,newQuery)

router
    .route("/all")
    .get(protect,admin,allQueries)


export default router;