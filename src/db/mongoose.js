const mongoose=require('mongoose')


//connection logic is written

mongoose.connect('mongodb://127.0.0.1:27017/manager-api',{

     useNewUrlParser :true,
     useCreateIndex:true,
     useUnifiedTopology: true,
     useFindAndModify:false

})

