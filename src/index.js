const app = require('./app')
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



// myFun()


// const jwt=require('jsonwebtoken')

// const myFun= async()=>{

//     const token=jwt.sign({_id:'abcd1234'},'this is my new course',{expiresIn:'7 days'})
//     console.log(token)

//     const data=jwt.verify(token,'this is my new course')

//     console.log(data)
    
// }
// myFun()