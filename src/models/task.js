const mongoose=require('mongoose')

const Task=mongoose.model('Task',{
    name:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    }
})
module.exports = Task


