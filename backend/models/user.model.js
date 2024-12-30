import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Provide name"]
    },
    email:{
        type:String,
        required:[true,"Provide email"],
    },
    phone:{
<<<<<<< HEAD
        type:Number,
=======
        type:String,
>>>>>>> c2f0fa2 (data)
        required:[true,"Provide phone"]
    },
    message:{
        type:String,
    }
})

const UserModel=mongoose.model("User",userSchema)

export default UserModel