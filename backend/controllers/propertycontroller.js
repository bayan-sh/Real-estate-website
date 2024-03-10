
import createproperty from '../models/creatproperty.js'



//create new properties
export const createprop =  async(req,res)=>{
const newproperty = new createproperty(req.body)
try{
const savedproperty = await newproperty.save() 
res.status(200).json({success:true, message:'successfully created', data:savedproperty});
}catch(err){

    res.status(500).json({success:false, message:'Failed to created. try again'});
}

};
//update property
export const updateproperty = async(req,res)=>{
    const id = req.params.id
try{
const updatedproperty = await createproperty.findByIdAndUpdate(id,{
    $set: req.body
},{new:true})
res.status(200).json({success:true, message:'successfully updated',
 data:updatedproperty});

}catch(err){
    res.status(500).json({success:false, message:'Failed to updated'});


}

};
//delet property
export const deletproperty = async(req,res)=>{
    const id = req.params.id
    try{
       { _id:id}
     await createproperty.findByIdAndDelete(id);
    res.status(200).json({success:true, message:'successfully deleted'
     });
    
    }catch(err){
        res.status(500).json({success:false, message:'Failed to deleted'});
    
    
    }
    
    }; 
  //get single property
  export const getsingleproperty = async(req,res)=>{
    const id = req.params.id
    try{
     const propp =await createproperty.findById(id);
    res.status(200).json({success:true, message:'successfully ',data:propp
     });
    
    }catch(err){
        res.status(404).json({success:false, message:'not found'});
    
    
    }
    
    }; 


  //get all property
export const getallproperty = async(req,res)=>{
    const page = parseInt(req.query.page);
    
    try{
    const properties= await createproperty.find({}).skip(page * 8).limit(8)
    res.status(200).json({success:true,count:properties.length , message:'successful ',data:properties
     });
    }catch(err){ res.status(404).json({success:false, message:'not found'});}
    
    };     
    // get property by search 
    export const getpropertybysearch = async(req,res)=>{
// here i means case sensitive
const address = new RegExp(req.query.address, 'i')
const  price = new Number(req.query.price)
const  type = new RegExp(req.query.type,'i')

try{
    //gte means greater than equal
const propertiess = await createproperty.find({address,price:{$gte:price},type})
res.status(200).json({success:true , message:'successful ',data:propertiess
});
}catch(err){res.status(404).json({success:false, message:'not found'});}

    }