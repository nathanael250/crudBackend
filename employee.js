const mongoose = require("mongoose");
const EmployeeSchema = new  mongoose.Schema({
    email:{
        type:String,
        required:true,
        
    },
    role:{
        type:String,
        required:true,
    }
})
const EmployeeModel = mongoose.model("Employee",EmployeeSchema);
module.exports = EmployeeModel;