const mongoose=require('mongoose')
const validator=require('validator')

const User =mongoose.model('users',{
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
        validate(value){
            if(value.toLowerCase().includes('password')){

                throw new Error('Password cannot contain "password"')

            }
        }        

    }
})

module.exports = User
