const express=require("express");
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send({message:"Hello John",success:true})
})
app.get("/main",(req,res)=>{
    res.send({message:"WELCOME TO THE MAIN PAGE",success:true})
})
app.listen(8080);