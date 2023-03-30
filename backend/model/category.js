const mongoose = require('mongoose')
const category = new mongoose.Schema({
    
    country:{
        type:String,
        required:true,
    },
    countryImage:{
        type:String,
        required:true,
    },
    subCategory:[
        {
            foodType:{
                type:String
            },
            foodImage:{
                type:String
            }
        }
    ]
})

const Details=mongoose.model("category",category)
 module.exports=Details