require('../src/db/mongoose')
const Task=require('../src/models/task')


const deleteAgeAndCount=async (id)=>{

    const task=await Task.findByIdAndDelete(id)   
    const count=await Task.countDocuments({age:5})
    console.log(count)
 
    return count    
}




    
deleteAgeAndCount('5e8b7dcd8b0c34224c667b93').then((count)=>{
        console.log(count)
    }).catch((e)=>{
        console.log(e)
})