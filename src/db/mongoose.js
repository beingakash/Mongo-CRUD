const mongoose=require('mongoose')
const validator=require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{

     useNewUrlParser :true,
     useCreateIndex:true,
     useUnifiedTopology: true

})

const Tasks =mongoose.model('tasks',{
    Description:{
        type:String,
        required: true,
        trim:true
    },
    mail:{
        type: String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email Invalid')
            }
        }

    },
    Completed:{
        type:Number,
        validate(value){
            if(value<0){
               throw new Error('Age must be +ve no')
            }
        }
    },
    Password:{
        type:String,
        trim:true,
        minlength:7,
        maxlength:9,
        validate(value){
            if(value.toLowerCase().includes('password')){

                throw new Error('Password cannot contain "password"')

            }
        }        

    }
})

const metoo=new Tasks({
    Description: 'Dummey',    
    mail:' kite@alphao.com',
    Password:'Akash38#',
    Completed:6

})


metoo.save().then(()=>{

    console.log(metoo)
}).catch((e)=>{
    console.log('Error!!',e)
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


