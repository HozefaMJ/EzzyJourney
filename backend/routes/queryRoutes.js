import express from "express";

const router = express.Router();

// Controllers
import {
    allQueries,
    newQuery,
    allMyQueries
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

router
    .route('/myqueries')
    .get(protect,allMyQueries)

export default router;