const express = require("express")
const { Router } = express
const router = new Router
const Image = require("../models").image

router.get('/images', async (req, res, next) => {
    try {
        const images = await Image.findAll()
        res.json(images)
    } catch (error) {
        console.log(error)
    }

})

router.post('/images/image', async (req, res, next) => {
    try {
        const newImage = Image.create(req.body)
        
        if (newImage) {
            res.json(newImage) 
        } else {
        res.status(400).send("something was no good")
        }
    } catch (error) {
        console.log(error)
    }
   
})

router.get('/images/image/:id', async (req, res, next) => {
    
    const id = req.params.id
    const image = await Image.findByPk(id)
    res.json(image)
})



module.exports = router;