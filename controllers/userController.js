const asyncHandler = require("express-async-handler");

//@desc Register a User
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler( async(req,res) => {
    res.json({message:"Register the user"});
});


//@desc Login User
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler( async(req,res) => {
    res.json({message:"Login the user"});
});

//@desc Current User
//@route GET /api/users/connect
//@access private
const currentUser = asyncHandler( async(req,res) => {
    res.json({message:"Connect user information"});
});


module.exports = {registerUser,loginUser,connectUser};
