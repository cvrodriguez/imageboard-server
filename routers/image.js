const express = require("express")
const {Router} = express
const router = new Router
const Image = require("../models").image

router.get('/images', async(req, res, next)=>{
    const images = await Image.findAll()
    res.json(images)
})

module.exports = router;