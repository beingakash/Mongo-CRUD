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

    // db.collection('users').insertOne({
    //     name:'Akash Kumar',
    //     age:23
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert User')
    //     }
        
    //     console.log(result.ops)
    //    })


    db.collection('users').insertMany([
        {
            name:'Kumar',
            age:12
        },
        {
            name :'Ram Dev',
            age:23
        },(error,result)=>{

            if(error)
            {
                return console.log('')
            }

        }
    ])
})





