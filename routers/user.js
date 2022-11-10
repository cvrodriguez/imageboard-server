const express = require("express")
const {Router} = express
const router = new Router
const User = require("../models").user

router.get('/users', async(req, res, next)=>{
    const users = await User.findAll()
    res.json(users)
})

router.post('/users/user', async (req, res, next) => {
    try {
       
        const {email, password, fullName} = req.body
        
        if (!email || !password || !fullName) {
            res.status(400).send("missing parameters");
        } else {
            const newUser = User.create({
                email,
                password,
                fullName,
              })
              res.json(newUser);
        }
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = router;