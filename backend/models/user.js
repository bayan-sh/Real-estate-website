import mongoose,{now} from "mongoose";
const userSchem = new mongoose.Schema({

fullname:{
type:String,
required: true,
},
username:{
    type:String,
    required: true,
},
address:{
type:String,
required: true,
},
email:{
type:String,
required: true,
},    
password:{
type:String,
required: true,
},

});

export  default mongoose.model("user",userSchem );