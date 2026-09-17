const mongoose = require('mongoose')
const studentModel = new mongoose.Schema({
    name:{
        type : String,
        required : true 
    },
    age:{
        type : Number,
        required : true 
    }
})

module.exports = mongoose.model("Student", studentModel)