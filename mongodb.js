//CRUD operations

const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName= 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{

    if (error) {

        return console.log('Unable to connect')
        
    } else {

        console.log('Connected Sucessfully')
        
    }

    const db=client.db(databaseName)

    db.collection('users').insertOne({
        name:'A Kumar',
        age:22
    },(error,result)=>{
        if(error){
            return console.log('Unable to insert User')
        }
        
        console.log(result.ops)
    })
    


    db.collection('tasks').insertMany([
        {
            prodName:'Full Cream Milk',
            quantity:1,
            Status:true

        },
        {
            prodName:'Lifeboy-Soap',
            quantity:1,
            Status:false
        }],(error,result)=>{
            if(error)
            {
                return console.log('Some error')
            }

            console.log(result.ops)
           console.log(result.insertedCount)
        }     

    )

    
})





