const app = require('./app')
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



const bcrypt=require('bcryptjs')

const myFun=async()=>{
    const password='RED1234'
    const hashed= await bcrypt.hash(password,8)

    console.log(password)
    console.log(hashed)

    const isMatch=await bcrypt.compare('RED1234',hashed)
    console.log(isMatch)
}

myFun()