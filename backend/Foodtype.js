const mongoose = require('mongoose')
const details = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
    ,
    image:{
        type:String,
        required:true,
    },
    coutntry:{
        type:String,
        required:true,
    },
    foodtype:{
        type:String,
        required:true,
    }
})

const Details=mongoose.model("foodtype",details)
 module.exports=Details