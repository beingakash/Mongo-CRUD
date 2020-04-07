require('../src/db/mongoose')
const User=require('../src/models/user')

// 5e8a19f30357882d34c1e0c
// User.findByIdAndUpdate('5e8a0bd1a7c8932578e9a91c',{Completed:6}).then((user)=>{

//     return User.countDocuments({Completed:6})
// }).then((rs)=>{

//     console.log(rs)
// }).catch((e)=>{
//     console.log(e)
// })


const updateStatusAndCount=async(id,Completed)=>{

const user=await User.findByIdAndUpdate(id,{Completed})
const count=await User.countDocuments({Completed})
return count

}

updateStatusAndCount('5e8a0bd1a7c8932578e9a91c',4).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})

