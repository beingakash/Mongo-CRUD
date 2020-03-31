//CRUD operations

// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient,ObjectID}=require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName= 'task-manager'

const id=new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology: true},(error,client)=>{

    if (error) {

        return console.log('Unable to connect')
        
    } else {

        console.log('Connected Sucessfully')
        
    }

    const db=client.db(databaseName)



    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'Vikram Kumar',
    //     age:22
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert User')
    //     }
        
    //     console.log(result.ops)
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
})


    






