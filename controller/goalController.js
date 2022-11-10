const asyncHandler = require("express-async-handler")
const Goal = require('../models/goalModel')
// @desc GET Goal
// @route api/goal
// private

const getGoals = asyncHandler ( async (req, res)=>{
    const goals = await Goal.find()
    res.status(200)
    .json(goals)
})

// @desc Set Goal
// @route api/goal
// private

const setGoals = asyncHandler ( async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error ("Please add text in the filed right away")
    }
    const goal = await Goal.create({text: req.body.text})

   res.status(200).json(goal)
})

// @desc Update Goal
// @route api/goal
// private

const updateGoals = asyncHandler (async (req, res)=>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Errror ("Update not found here")
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200)
    .json(updatedGoal)
})

// @desc Remove Goal
// @route api/goal
// private

const deleteGoals = asyncHandler (async (req, res)=>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error ("File not exist here")
    }
    await goal.remove()
    res.status(200)
    .json({id: req.params.id })
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}