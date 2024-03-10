import mongoose, { now } from "mongoose";

const propertySchem= new mongoose.Schema({

title:{
type:String,
required: true,

},
address:{
    type:String,
    required: true,
    },
    country:{
        type:String,
        required: true,
        },


Descreption:{
     type:String,
     required: true,
 },
photo:{
type:String
,
required: true,

},
files:{
type:String,
required: true,


},

bedrooms:{

    type:Number,
    required: true,

},
bathrooms:{

    type:Number,
    required: true,

},
rooms:{

    type:Number,
    required: true,

},
balcony:{

    type:Number,
    required: true,

},
carpetarea:{

    type:Number,
    required: true,

},
furnished:{

    type:String,
    required: true,

},
price:{

    type:Number,
    required: true,

},
status:{
type:Boolean,
required: true,
},
owner:{
    type:String,
    required: true,

},
ownerphone:{
type:Number,
required: true,
},

type:{
    type:String,
    required: true,
},



});

export default mongoose.model("property",propertySchem );