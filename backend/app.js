const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Model = require("./model/recipe");
const Category=require("./model/category")




//environment variable or you can say constants
env.config();

app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connection is successfull on port ${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/home", async (req, res) => {
  const data = await Model.find(req.query);
  res.send(data);
});

app.get("/home/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such recipe!, Sorry!" });
  }

  const data = await Model.findById(id);

  if (!data) {
    return res.status(404).json({ error: "No such recipe!, Sorry!" });
  }

  res.status(200).json(data);
});

app.post("/abc", (req, res) => {
  const { name, image, country, foodtype, recipe, video, serving, ingredient } =
    req.body;
  const xyz = new Model();

  xyz.name = name;
  xyz.image = image;
  xyz.country = country;
  xyz.foodtype = foodtype;
  xyz.recipe = recipe;
  xyz.video = video;
  xyz.serving = serving;
  xyz.ingredient = ingredient;

  xyz
    .save()
    .then((result) => {
      console.log("Saved successfully:", result);
    })
    .catch((error) => {
      console.error("Error saving:", error);
    });

  res.send({ message: "done successfully" });
});


app.get('/category' , async(req , res)=>{

  const data = await Category.find(req.query);
  res.send(data);

})

app.post('/category' , (req , res)=>{

  const {  country,countryImage,subCategory } =
  req.body;
const category = new Category();


category.country = country;
category.countryImage = countryImage;
category.subCategory = subCategory;

category
  .save()
  .then((result) => {
    console.log("Saved category successfully :", result);
  })
  .catch((error) => {
    console.error("Error saving:", error);
  });

res.send({ message: "done successfully" });

})

app.get("/category/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such category!, Sorry!" });
  }

  const data = await Category.findById(id);

  if (!data) {
    return res.status(404).json({ error: "No such recipe!, Sorry!" });
  }

  res.status(200).json(data);
});