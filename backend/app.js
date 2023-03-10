const express = require("express")
const app = express();
const mongoose = require("mongoose")
const cors = require("cors")
const Model=require('./Model')

app.use(cors());
app.use(express.json())

mongoose.set("strictQuery",false);

mongoose.connect("mongodb://localhost/Foodsearch",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
})
.then(()=>{
    app.listen(2000,()=>{
        console.log("connection is successfull")
    })
})
.catch((err)=>{
    console.log(err);
})

app.get('/home',async (req,res)=>{
  // let foodtype=req.query.foodtype;
  // let country=req.query.country;
    const data=await  Model.find(req.query)
    res.send(data);
})

app.post('/abc',(req,res)=>{
    const {name,image,country,foodtype,recipe,video,serving,ingredient}=req.body
    const xyz=new Model()
    
    xyz.name=name
    xyz.image=image
    xyz.country=country
    xyz.foodtype=foodtype
    xyz.recipe=recipe
    xyz.video=video
    xyz.serving=serving
    xyz.ingredient=ingredient

    xyz.save()
  .then(result => {
    console.log('Saved successfully:', result);
  })
  .catch(error => {
    console.error('Error saving:', error);
  });

  res.send({"message":"done successfully"})
})


