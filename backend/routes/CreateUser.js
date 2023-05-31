const express=require("express")
const router=express.Router()
const User=require("../models/User");

router.post("/createuser",async(req,res)=>{
    try{
        await User.create({
            name:"Suman Balayar",
            password:"12345678",
            email:"sumanbalayar7@gmail.com",
            location:"Pulchowk"
        })
        res.json({success:true});

    }catch(error){
        console.log(error);
        res.json({success:false});
    }
})
module.exports=router;