const mongoose=require("mongoose");
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    role:{
        type:String, 
        enum:["Alumini","Admin","Student"],
        default:"Student"
    }
})

userSchema.plugin(passportLocalMongoose);
const User=new mongoose.model("User",userSchema);

module.exports= User;

