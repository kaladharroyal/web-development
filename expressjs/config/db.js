const mongoose = require("mongoose")

const connectDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI) // for connection of the mongodb uri
        console.log("MongoDB connected successful")
    }catch(err){
        console.log("error while connecting the mongodb:", err.message) // error handling on connection
    }
} 
module.exports = connectDb