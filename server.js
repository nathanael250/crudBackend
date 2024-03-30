const express = require("express");
const mongoose = require("mongoose");
const EmployeeModel = require("./employee.js");
const cors = require("cors");
const path = require("path"); // Import path module
mongoose.connect("mongodb+srv://nathanaelniyogushimwa:nathanadmin@cluster0.wfhnzka.mongodb.net/todo");


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(
   cors({
      orgin:["http://localhost:3000","https://crudfrontend-r880.onrender.com"]
   })
)
app.post("/employees",(req,res)=>{
   EmployeeModel.create(req.body)
   .then(result=>res.json(result))
   .catch(err=>res.json(err));
})

app.get("/fetch",(req,res)=>{
    EmployeeModel.find({})
    .then(result=>res.json(result))
    .catch(err=>res.json(err));
 })

app.get("/userforupdate/:id",(req,res)=>{
   const id = req.params.id;
   EmployeeModel.findById({_id:id})
   .then(result=>res.json(result))
   .catch(err=>res.json(err));
})

app.put("/:id",(req,res)=>{
   const id = req.params.id;
   EmployeeModel.findByIdAndUpdate({_id:id},{email:req.body.email, role:req.body.role})
   .then(result=>res.json(result))
   .catch(err=>res.json(err));
})

app.delete("/deleteuser/:id",(req,res)=>{
   const id = req.params.id;
   EmployeeModel.findByIdAndDelete({_id:id})
   .then(result=>res.json(result))
   .catch(err=>res.json(err))
})

app.listen(5000, console.log("app is starting on port 5000"));