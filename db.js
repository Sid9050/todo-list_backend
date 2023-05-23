const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://sidchawla2015:Sid123456@cluster0.2hcl3yq.mongodb.net/tod?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;