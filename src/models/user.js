const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')


const userSchema=new mongoose.Schema({
    Description:{
        type:String,
        required: true,
        trim:true
    },
    mail:{
        type: String,
        required:true,
        unique:true,
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

    },
    tokens:[{
        token:{
            type:String,
            required:true

        }
    }]
})

//Login Check

userSchema.statics.findByCredentials = async(mail,Password)=>{

    const user=await User.findOne({ mail })

    //console.log(user.mail)

    if(!user){

        throw  new Error('Unable to Login')        
    }else{
        console.log(user.Password)
        console.log(Password)
    }   
 
    var isMatch =await bcrypt.compareSync(Password, user.Password)
    console.log(isMatch)

    if(!isMatch){           
        throw new Error('Unable to login')           
    }

    return user
}


//hAsh the plain text
userSchema.pre('save',async function  (next) {
    const user=this

    if(user.isModified('Password')){

        user.Password=await bcrypt.hash(user.Password,8)
    }   
    next()

})

//
userSchema.methods.generateAuthToken=async function(){
    const user =this
    const token=jwt.sign({_id:user._id.toString()},'thisismynewcourse')
    console.log(token)
    user.tokens=user.tokens.concat({token})

    await user.save()

    return token
}


const User = mongoose.model('users',userSchema)
module.exports = User
