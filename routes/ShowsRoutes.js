const express = require("express")
const router = express.Router()
const { Show } = require("../models/index");

router.get("/", async(req,res)=>{
    try{
        const shows = await Show.findAll({})
        res.json(shows)
    }catch(error){
        console.log(error)
    }
})

router.get("/:id",async (req,res)=>{
    try{
        const show = await Show.findByPk(req.params.id)
        res.json(show)
    }catch(error){
        console.log(error)
    }
})

router.get("/:id",async(req,res)=>{
     try{
         const id = req.params.id
         const show = await User.findByPk(id,{
            include:[{model: Show, through: 'watched'}]
         })
         const watchedShows = show.watchedShows
         res.json(watchedShows)
     }catch(error){
        console.log(error)
     }
})

router.put("/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const data = req.body
        const existingShow = await Show.findByPk(id)
        const ShowsUpdate = await existingShow.update(data)
        res.json(ShowsUpdate)
    }catch(error){
        console.log(error)
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const existingShow = await Show.findByPk(id)
        const deleteShow = await existingShow.destroy()
        res.json(deleteShow)
    }catch(error){
        console.log(error)
    }
})

module.exports = router