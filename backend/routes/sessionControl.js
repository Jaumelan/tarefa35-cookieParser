const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const users = [];

router.use(express.json());
router.use(express.urlencoded({extended:true}));
router.use(cookieParser());

router.post("/signup", (req,res) => {
    let data = req.body;
    console.log(data);
    users.push(data);
    console.log(users);
    res.send("user created successfully")
})

router.post("/login", (req,res) => {
    let data = req.body;
    console.log(data);
    //setting cookies
    users.forEach(user => {
        if(user.userName === data.userName && user.userPassword === data.userPassword) {
            
            return res.cookie('username', data.userName, { maxAge: 900000, httpOnly: true }).send(`Cookie has been set to ${data.userName}`);
        }
    })
    
})


module.exports = router;