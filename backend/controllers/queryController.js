import asyncHandler from "express-async-handler";

// Models
import Query from "../models/queriesModel.js";
import Package from "../models/packageModel.js";


// @desc Create Query By Package ID
// @route POST /api/queries/:id/new
// @access Private
const newQuery = asyncHandler(async(req,res) => {
    const {message,adults,childAbove6,childBelow6} = req.body;

    const packages = await Package.findById(req.params.id);

    if(packages){

        const people = {
            adults,
            childAbove6,
            childBelow6
        }

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


// @desc Get all Queries
// @route GET /api/queries/all
// @access Private Admin
const allQueries = asyncHandler(async(req,res) => {
    const queries = await Query.find({}).populate('user','name email').populate('package','title packageCode');

    if(queries){
        res.json(queries)
    } else {
        res.status(404);
        throw new Error("No one has queried yet")
    }
})

export {
    newQuery,
    allQueries
}