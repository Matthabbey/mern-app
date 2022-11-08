const asyncHandler = require("express-async-handler")
// @desc GET Goal
// @route api/goal
// private

const getGoals = asyncHandler (async (req, res)=>{
    res.status(200)
    .json({message: " GET Let us go and have some fun"})
})

// @desc Set Goal
// @route api/goal
// private

const setGoals = asyncHandler (async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error ("Please add text in the filed")
    }
    res.status(200)
    .json({message: " GET Let us go and have some fun"})
})

// @desc Update Goal
// @route api/goal
// private

const updateGoals = asyncHandler (async (req, res)=>{
    res.status(200)
    .json({message: `UPDATE Let us go and have some fun ${req.params.id}`})
})

// @desc Remove Goal
// @route api/goal
// private

const deleteGoals = asyncHandler (async (req, res)=>{
    res.status(200)
    .json({message: `DELETE Le t us go and have some fun ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}