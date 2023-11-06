const express =require("express");
const router=express.Router();
const asyncHandler= require("express-async-handler");
const {User}= require ("../models/User");

router.post("/register",asyncHandler(async(req,res)=>{

}));
router.post("/register",asyncHandler(async (req,res)=>{

    let user=await User.findOne({email:req.body.email});
    if (user){
        return res.status(400).json({message : "This user already registered"});
    }
    user = new User({
        email:req.body.email,
        password:req.body.password,
        username:req.body.username
    });
    const result = await user.save();
    res.status(200).json(result);
}))
module.exports = router;