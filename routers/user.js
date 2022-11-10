const express = require("express")
const {Router} = express
const router = new Router
const User = require("../models").user

router.get('/users', async(req, res, next)=>{
    const users = await User.findAll()
    res.json(users)
})

module.exports = router;