const mongoose = require('mongoose')
const details = new mongoose.Schema({
    country:{
        type:String,
        required:true,
    }
    ,
    image:{
        type:String,
        required:true,
    }
})

const Details=mongoose.model("country",details)
 module.exports=Details