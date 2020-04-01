//CRUD operations

// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient,ObjectID}=require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName= 'task-manager'

const id=new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology: true},(error,client)=>{

    if (error) {

        return console.log('Unable to connect')
        
    }

       // console.log('Connected Sucessfully')

       const db=client.db(databaseName)

    //    db.collection('tasks').insertMany([
    //     {
    //         prodName:'Full Cream Milk',
    //         quantity:1,
    //         Status:true

    //     },
    //     {
    //         prodName:'Dettol-Soap',
    //         quantity:10,
    //         Status:false
    //     }],(error,result)=>{
    //         if(error)
    //         {
    //             return console.log('Some error')
    //         }

    //         console.log(result.ops)
    //        console.log(result.insertedCount)
    //     }     

    // )
        
    


     
    db.collection('tasks').deleteOne({
        "quantity" : 1
    }).then((result)=>{

        console.log(result.deletedCount)
    }).catch((error)=>{

        console.log("Error")
    })
    

})


// db.collection('tasks').updateMany({
//     Status:true
// },{
//     $set:{
//         Status:false
//     }

// }).then((result)=>{
//     console.log(result.modifiedCount)

// }).catch((error)=>{
//     console.log(error)
// })



    // db.collection('tasks').updateOne({
    //     _id:new ObjectID("5e837bfc30677a24b47a6c52")},{
    //         $inc:{
    //             "quantity" : 4

    //         }
    //     }).then((result)=>{
    //         console.log(result)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })

    // })

    


    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'Akash Kumar',
    //     age:22
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert User')
    //     }
        
    //    // console.log(result.ops)
    // })

    // db.collection('users').findOne({name:'Vikram Kumar'},(error,response)=>{
    //     if(error){
    //         return console.log('Issue')
    //     }
    //     else{
    //         console.log(response)
    //     }
    // })

    // db.collection('users').find({age:22}).toArray((error,response)=>{

    //     console.log(response)
    // })

    

    // db.collection('tasks').find({Status:true}).toArray((error,response)=>{
    //     if(error){
    //         return console.log('Issue')
    //     }
    //     else{
    //         console.log(response)
    //     }
    // })




    
    


    // db.collection('tasks').insertMany([
    //     {
    //         prodName:'Full Cream Milk',
    //         quantity:1,
    //         Status:true

    //     },
    //     {
    //         prodName:'Lifeboy-Soap',
    //         quantity:1,
    //         Status:false
    //     }],(error,result)=>{
    //         if(error)
    //         {
    //             return console.log('Some error')
    //         }

    //         console.log(result.ops)
    //        console.log(result.insertedCount)
    //     }     

    // )


   







    






