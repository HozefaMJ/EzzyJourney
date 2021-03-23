import express from "express";

const router = express.Router();

// Controllers
import {
    allQueries,
    newQuery,
    allMyQueries,
    respondQuery,
    anonymousQuery,
    anonymousRespondQuery,
    allAnonymousQueries
} from "../controllers/queryController.js";


import {
    protect,
    employee,
    admin,
    anonymous
} from "../middleware/authMiddleware.js"



router
    .route("/all")
    .get(protect,admin,allQueries)

router
    .route("/all/anonymous")
    .get(protect,admin,allAnonymousQueries)

router
    .route("/anonymous")
    .post(anonymous,anonymousQuery)

router
    .route('/myqueries')
    .get(protect,allMyQueries)

router
    .route("/:id/new")
    .post(anonymous,newQuery)

router
    .route('/:id/reverted')
    .put(protect,employee,respondQuery)

router
    .route('/:id/reverted/anonymous')
    .put(protect,employee,anonymousRespondQuery)

export default router;