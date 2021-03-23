import asyncHandler from "express-async-handler";

// Models
import Query from "../models/queriesModel.js";
import Package from "../models/packageModel.js";
import User from '../models/userModel.js';
import AnonymousQuery from "../models/anonymousQueryModel.js";


// @desc Create Query By Package ID
// @route POST /api/queries/:id/new
// @access Private
const newQuery = asyncHandler(async(req,res) => {
    const {message,adults,childAbove6,childBelow6} = req.body;

    

    const packages = await Package.findById(req.params.id);

    const user = await User.findById(req.user._id);

    if(packages){

        const people = {
            adults,
            childAbove6,
            childBelow6
        }

        // If user is logged in use user Id or anonymous id
        

        const query = await Query.create({
            user: req.user._id,
            package: req.params.id,
            message,
            people: people
        })

        if(query) {
            res.status(201).json({
                _id: query._id,
                user: query.user,
                package: query.package,
                message: query.message,
                people: query.people
            })
        } else {
            res.status(404);
            throw new Error("Query Not Found")
        }
    } else {
        res.status(404);
        throw new Error("Package you're quering for is Not Found")
    }
})


// @desc create anonymous query
// @route POST /api/queries/anonymous
// @access Public
const anonymousQuery = asyncHandler(async(req,res) => {
    const {name,email,contact,destination,from,to,adults,childAbove6,childBelow6,foodPreferance,message} = req.body;

    const people = {
        adults,
        childAbove6,
        childBelow6
    }

    const date = {
        from,
        to
    }


    // If user is logged in use user Id or anonymous id
    

    const query = await AnonymousQuery.create({
        user: req.user._id,
        name,
        email,
        contact,
        destination,
        message,
        foodPreferance,
        date: date,
        people: people
    })

    if(query) {
        res.status(201).json(query)
    } else {
        res.status(404);
        throw new Error("Query Not Found")
    }
})

// @desc Get all Queries
// @route GET /api/queries/all/anonymous
// @access Private Admin
const allAnonymousQueries = asyncHandler(async(req,res) => {
    const queries = await AnonymousQuery.find({});
    if(queries){
        res.json(queries)
    } else {
        res.status(404);
        throw new Error("No one has queried yet")
    }
})


// @desc Get all Queries
// @route GET /api/queries/all
// @access Private Admin
const allQueries = asyncHandler(async(req,res) => {
    const queries = await Query.find({}).populate('user','name email contact').populate('package','title packageCode');

    if(queries){
        res.json(queries)
    } else {
        res.status(404);
        throw new Error("No one has queried yet")
    }
})

 //@desc Get all Queries My Queries
// @route GET /api/queries/myqueries
// @access Private
const allMyQueries = asyncHandler(async(req,res) => {
    const queries = await Query.find({user: req.user._id}).populate('package','title packageCode');

    if(queries) {
        res.json(queries);
    } else {
        res.status(404);
        throw new Error("You have not queried anything.")
    }
})

 //@desc Query Responded
// @route Put /api/queries/:id/reverted
// @access Private Employee
const respondQuery = asyncHandler(async(req,res) => {
    const query = await Query.findById(req.params.id);

    if(query){
        query.isResponded = true

        const respondedQuery = await query.save()

        res.json(respondedQuery)
    } else {
        res.status(404);
        throw new Error("Query Not Found")
    }
})


 //@desc Anonymous Query Responded
// @route Put /api/queries/:id/reverted/anonymous
// @access Private Employee
const anonymousRespondQuery = asyncHandler(async(req,res) => {
    const query = await AnonymousQuery.findById(req.params.id);

    if(query){
        query.isResponded = true

        const respondedQuery = await query.save()

        res.json(respondedQuery)
    } else {
        res.status(404);
        throw new Error("Query Not Found")
    }
})


export {
    newQuery,
    allQueries,
    allMyQueries,
    respondQuery,
    anonymousQuery,
    allAnonymousQueries,
    anonymousRespondQuery
}