const express=require("express");
const app=express();
require("./db/config");
const user=require("./models/usermessage");
const path=require("path");
const hbs=require("hbs");
const User = require("./models/usermessage");

const stpath=path.join(__dirname,"../public");
app.use(express.static(stpath));
app.use(express.urlencoded({extended:false}))
const templatepath=path.join(__dirname,"../templates/views");
const partialspath=path.join(__dirname,"../templates/partials");
app.set("view engine","hbs");
app.set("views",templatepath)
hbs.registerPartials(partialspath);
app.get("",(req,res)=>{
res.render("index")
});
app.post("/contact",async(req,res)=>{
    try{
    
        const userdata=new User(req.body)
        await userdata.save();
        res.status(201).render("index")

       }
       catch(error){
        res.status(500).send(error);

       }
});
    app.get("/about",(req,res)=>{
      
        });
app.listen(3000)