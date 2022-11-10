const express = require("express")
const { Router } = express
const router = new Router
const toData = require("../auth/jwt").toData
const Image = require("../models").image

router.get('/', async (req, res, next) => {
    try {
        const images = await Image.findAll()
        res.json(images)
    } catch (error) {
        console.log(error)
    }

})

router.post('/image', async (req, res, next) => {
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

router.get('/image/:id', async (req, res, next) => {
    
    const id = req.params.id
    const image = await Image.findByPk(id)
    res.json(image)
})

router.get("/auth/messy", async (req, res, next) => {
    const auth = req.headers.authorization && req.headers.authorization.split(" ");
    if (auth && auth[0] === "Bearer" && auth[1]) {
      try {
        const data = toData(auth[1]);
       
        const allImages = await Image.findAll();
          res.json(allImages);
      } catch (e) {
        console.log(e)
        res.status(400).send("Invalid JWT token");
      }
    } else {
      res.status(401).send({
        message: "Please supply some valid credentials",
      });
    }
  });

module.exports = router;