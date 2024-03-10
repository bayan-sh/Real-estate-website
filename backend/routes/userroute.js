import express from 'express'


import {creatuser,gettuser,getsingleuser,deletuser,acceptuser,notifocationuser,creatnotifocation,Logincreat,signupcreat} from './../controllers/usercontroller.js';
const router = express.Router()
//create new user
router.post("/", creatuser);

//get all user
router.get("/", gettuser);

//get single user
router.get("/:id", getsingleuser);


//delet user
router.delete("/:id", deletuser);
//Define a route to accept a user reques
router.put("/:id/accept",acceptuser)


// Define a route to get notifications for a user
router.get("/notifications/:id",notifocationuser)

  
  // Define a route to create a notification
  router.post("/notifications",creatnotifocation)
  //signup
  router.post("/signup",signupcreat)
  //login
  router.post("/login",Logincreat)
//profile


  



export default router;
