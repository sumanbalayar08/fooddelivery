const express=require("express");
require("./db/config");
const FoodItems = require("./db/food_items")
const FoodCategory = require("./db/foodCategory");
const app=express();

app.get('/',(req,res)=>{
    res.send("API IS WORKING");
})

FoodItems.find({"name":"Chicken Biryani"}).then(

    items=>{console.log(items);

}).catch(err=>{console.log("Error retrieving Data:",err);});

app.listen(3000);