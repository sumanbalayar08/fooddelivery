const express=require("express");
const cors=require("cors")
require("./db/config");
const FoodItems = require("./models/food_items")
const FoodCategory = require("./models/foodCategory");
const User = require("./models/User")
const app=express();

app.use(cors());

app.get('/',(req,res)=>{
    res.send("API IS WORKING");
})

app.use(express.json())
app.use('/api',require("./routes/CreateUser"));

FoodItems.find().then(

    items=>{console.log(items);

}).catch(err=>{console.log("Error retrieving Data:",err);});

app.listen(4000);