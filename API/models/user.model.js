const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    FullName:{type: String,required: true},
    Email: {type:String,required:true,unique:true},
    Password: {type:String,required:true},
    LevelStudy:{type:String},
    Specialty:{type:String},
    Profession:{type:String},
    SocietyName:{type:String},
    ActivityField:{type:String},
    Category:{type:String},
    Role:{type:String},
   
})


module.exports=mongoose.model('user', UserSchema)