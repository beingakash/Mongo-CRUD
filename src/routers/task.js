const express=require('express')
require('../db/mongoose')
const Task=require('../models/task')
const router=new express.Router()


router.use(express.json())


router.post('/taskCreate',async(req,res)=>{

    const task=await Task(req.body)

    try{        
        await task.save()
        res.status(201).send(task)

    }catch(e){

        res.status(500).send() 
    }
    
})


router.get('/taskList',async(req,res)=>{

    try {
        const tasks=await Task.find({})
        res.send(tasks).status(201)
    } catch(e) {
        res.status(500).send()
        
    }
    
})

    




router.patch('/taskUpdate/:id',async(req,res)=>{

    const _id=req.params.id
    const updates=Object.keys(req.body)
    const allowedUpdate=["age","name"]
    const isValidateOperation=updates.every((update)=> allowedUpdate.includes(update))

    if(!isValidateOperation){
        return res.status(400).send({error:'Invalid updates!!'})
    }

    try {
        const task= await Task.findByIdAndUpdate(_id,req.body, {new:true ,runValidators:true})    
        if(!task){
            return res.status(404).send()
           }
    
        res.send(task)
    
    
        }
    catch(e){
    
            res.status(400).send(e)        
        }
    
})



router.delete('/taskDelete/:id',async(req,res)=>{

    const _id=req.params.id

    try{
        const user= await Task.findByIdAndDelete(_id)
        if(!user){
            return res.status(404).send()
        }

        res.status(201).send(user)
        
    } catch (error) {
      
        res.status(400).send(e)        
    }
})

module.exports = router

