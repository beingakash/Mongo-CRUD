const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{

     useNewUrlParser :true,
     useCreateIndex:true,
     useUnifiedTopology: true

})

const Tasks =mongoose.model('tasks',{
    Description:{
        type:String
    },
    Completed:{
        type:Boolean
    }
})

const metoo=new Tasks({
    Description: 'Learn MOngoose',
    Completed:false

})


metoo.save().then(()=>{

    console.log(metoo)
}).catch((e)=>{
    console.log('Error!!')
})

// const User=mongoose.model('User',{
//     name:{
//         type: String
//     },
//     age:{
//         type: Number
//     }
// })

// const me=new User({
//     name: 'Suman',
//     age:5
// })

// me.save().then(()=>{

//     console.log(me)
// }).catch((e)=>{
//     console.log('Error!!')
// })


