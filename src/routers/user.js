const express=require('express')
require('../db/mongoose')
const auth=require('../middleware/auth')
const User=require('../models/user')
const router=new express.Router()


router.use(express.json())

router.post('/userCreate',async(req,res)=>{
   
    const user=new User(req.body)    
    try {
        await user.save()
        const token=await user.generateAuthToken()
        res.status(201).send({user,token})               
    } catch (e){
        res.status(500).send(e)
        
    }
})

router.get('/userList',auth,async(req,res)=>{

    try {
        const users=await User.find({})
        res.send(users).status(201)
    } catch(e) {
        res.status(500).send()
        
    }
    
})

router.post('/userLogin',async(req,res)=>{

    const mail=req.body.mail
    const pas=req.body.Password

    console.log(mail,pas)


    try{
        const user=await User.findByCredentials(mail,pas)
        const token=await user.generateAuthToken()
        res.send({user,token})

    }catch(e){
        res.status(400).send()
    }
})

    

router.get('/userCall/:id',async(req,res)=>{
    const _id=req.params.id

    try {
        
        const user=await User.findById(_id)

        if(!user){
           return res.status(404).send()
        }
        res.send(user)        
    } catch (e) {
        res.status(500).send(e)        
    }  
})


router.patch('/userUpdate/:id',async(req, res) =>{
    const _id=req.params.id
    const updates=Object.keys(req.body)
    const allowedUpdate=["mail","Description","Password","Completed"]
    const isValidateOperation=updates.every((update)=> allowedUpdate.includes(update))

    if(!isValidateOperation){
        return res.status(400).send({error:'Invalid updates!!'})
    }

    try {

        const user=await User.findById(_id)
        updates.forEach((update)=> user[update]=req.body[update])
         await user.save()

       //const user= await User.findByIdAndUpdate(_id,req.body, {new:true ,runValidators:true})
     if(!user){
        return res.status(404).send()
       }

     res.send(user)
    }
    catch(e){

        res.status(400).send(e)        
    }
})


router.delete('/userDelete/:id',async(req,res)=>{

    const _id=req.params.id

    try{
        const user= await User.findByIdAndDelete(_id)
        if(!user){
            return res.status(404).send()
        }

        res.send(user)
        
    } catch (error) {
      
        res.status(400).send(e)        
    }
})
module.exports = router