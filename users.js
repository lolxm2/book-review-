const express= require("express");
const router =express.Router();

const users = [
    {
        username:"test12",
        password:"test123456"
    }
]


router.post("/register", (req,res)=> {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    users.push(user);
    res.status(201).json("you have been registerd"); // 201 => created successfully
    
});


router.post("/login", (req,res)=> {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    users.push(user);
    res.status(201).json("you have logged in"); // 201 => created successfully
    
})

module.exports = router;