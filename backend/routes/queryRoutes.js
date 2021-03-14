import express from "express";

const router = express.Router();

// Controllers
import {
    allQueries,
    newQuery,
    allMyQueries,
    respondQuery
} from "../controllers/queryController.js";


import {
    protect,
    employee,
    admin
} from "../middleware/authMiddleware.js"



router
    .route("/all")
    .get(protect,admin,allQueries)

router
    .route('/myqueries')
    .get(protect,allMyQueries)

router
    .route("/:id/new")
    .post(protect,newQuery)

router
    .route('/:id/reverted')
    .put(protect,employee,respondQuery)

export default router;