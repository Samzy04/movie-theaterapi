const express = require("express")
const router = express.Router()
const { User } = require("../models/index");

router.get("/", async(req,res)=>{
    try{
        const Users = await User.findAll({})
        res.json(Users)
    }catch(error){
        console.log(error)
    }
})

router.get("/:id",async (req,res)=>{
    try{
        const user = await User.findByPk(req.params.id)
        res.json(user)
    }catch(error){
        console.log(error)
    }
})

router.get("/:id",async(req,res)=>{
     try{
         const id = req.params.id
         const user = await User.findByPk(id,{
            include:[{model: Show, through: 'watched'}]
         })
         const watchedShows = user.watchedShows
         res.json(watchedShows)
     }catch(error){
        console.log(error)
     }
})

router.put("/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const data = req.body
        const existingShow = await User.findByPk(id)
        const userUpdate = await existingShow.update(data)
        res.json(userUpdate)
    }catch(error){
        console.log(error)
    }
})

module.exports = router