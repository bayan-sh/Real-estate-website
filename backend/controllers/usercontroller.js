import user from '../models/user.js'
import notification from '../models/notification.js';
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
//create new user
 export const creatuser = async(req,res)=>{

 const newuser = new user(req.body)
 try{

 const saveduser = await newuser.save() 
 res.status(200).json({success:true, message:'successfully created', data:saveduser});
 }catch(err){

     res.status(500).json({success:false, message:'Failed to created. try again'});
}

};
//delet user
export const deletuser = async(req,res)=>{
   const id = req.params.id
   try{
      { _id:id}
    await user.findByIdAndDelete(id);
   res.status(200).json({success:true, message:'successfully deleted'
    });
   
   }catch(err){
       res.status(500).json({success:false, message:'Failed to deleted'});
   
   
   }
   
   }; 







  //get single user
  export const getsingleuser= async(req,res)=>{
   const id = req.params.id
   try{
    const userr =await user.findById(id);
   res.status(200).json({success:true, message:'successfully ',data:userr
    });
   
   }catch(err){
       res.status(404).json({success:false, message:'not found'});
   

   }
   
   }; 


  //get all user
  export const gettuser = async(req,res)=>{
    const page = parseInt(req.query.page);
    
    try{
    const userrs= await user.find({}).skip(page * 8).limit(8)
    res.status(200).json({success:true,count:userrs.length , message:'successful ',data:userrs
     });
    }catch(err){ res.status(404).json({success:false, message:'not found'});}
    
    };  
// Define a route to accept a user request
export const acceptuser = async(req,res)=>{
    try {
        const useer = await user.findByIdAndUpdate(req.params.id, { status: 'accepted' }, { new: true });
        const notification = new Notification({ sender: req.params.id, recipient: 'admin', message: `user ${useer.name} (${useer.email}) has been accepted` });
        await notification.save();
        res.send(useer);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
      }

};
// Define a route to get notifications for a user
export const notifocationuser = async(req,res)=>{
    try {
        const notifications = await notification.find({ recipient: req.params.userId });
        res.json(notifications);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
      }

};
// Define a route to create a notification

export const creatnotifocation = async(req,res)=>{
    try {
        const nottification = new notification(req.body);
        await nottification.save();
        res.send(nottification);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
      }


};

// signup
export const signupcreat = async(req,res)=>{
  const { fullname, username, email, password,  address } =
  req.body;
const LowerCaseEmail = email.toLowerCase();
const User = await user.findOne({ email: LowerCaseEmail });
if (User) {
  return res.json({ message: "email already exist!" });
}

const hashedPassword = bcrypt.hashSync(password, 10);
const newUser = new user({
  fullname: fullname,
  username: username,
  email: LowerCaseEmail,
  password: hashedPassword,
  address: address,
});
await newUser.save();

return res.json({ message: "Successful Reg" });

};
//login
export const Logincreat = async(req,res)=>{
  const { email, password } = req.body;
  const lowerCaseEmail = email.toLowerCase();
  const User = await user.findOne({ email: lowerCaseEmail });

  if (!User) {
    return res.json({ message: "email does not exist!dd" });
  }
  const passwordR = await user.findOne({ password: User.password });

  const isPasswordValid = await bcrypt.compare(password, User.password);
  if (!isPasswordValid) {
    return res.json({ message: "email or password does not exist!" });
  }

  const token = jwt.sign({ id: User._id }, process.env.SECRET);
  return res.json({ token , UserID: User._id, message: "Successful Login" })


}

