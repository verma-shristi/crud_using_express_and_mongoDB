const express=require("express");
const routes=express.Router();
const newModel=require('./db');
const data=newModel.find({});
routes.get("/",(req,res)=>{
    data.exec((err,data)=>{
        if(err) throw err;
        else{
            res.render("index",{data:data})
        }
        })
});
routes.post("/",(req,res)=>{
    datas=new newModel({
        name:req.body.name
    }).save((err)=>{
        if(err) throw err;
        else{
            data.exec((err,data)=>{
                if(err) throw err;
                else{
                    res.render("index",{data:data})
                }
            })
        }
    })
})
routes.get("/edit/:_id",(req,res)=>{

res.render("update")
});
routes.get("/delete/:_id",(req,res)=>{
    id=req.params.id
    var del=newModel.findByIdAndDelete({_id:id});
    del.exec((err,data)=>{
        if(err) throw err;
        else{
            res.render("index",{data:data})
        }
    })
    
})
module.exports=routes;
