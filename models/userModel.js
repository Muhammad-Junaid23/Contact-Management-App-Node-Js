const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    user_id:{
       type:mongoose.Schema.Types.ObjectId,
    //    required:true,
       ref:"User",
    },
   username:{
    type:String,
    required: [true,"Please add the User name"]
   },
   email:{
    type:String,
    required: [true,"Please add the User email"],
    unique: [true,"Email already exists....."]
   },
   password:{
    type: String,
    required:[true,"Please enter password...."]
   }
},{
    timestamps:true,
})


module.exports = mongoose.model("Users",userSchema)

