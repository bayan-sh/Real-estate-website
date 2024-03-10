import express from 'express'
import multer from 'multer'
import {createprop,updateproperty,deletproperty,getsingleproperty,getallproperty,getpropertybysearch} from './../controllers/propertycontroller.js';
import {creatuser,gettuser,getsingleuser,deletuser} from './../controllers/usercontroller.js';
const upload = multer.diskStorage({ dest: (req,file,cd)=>{

    cd(null,"/")
} });
const router = express.Router()

//create new property
router.post("/", createprop);

//update property
router.put("/:id", updateproperty);

//delet property
router.delete("/:id", deletproperty);

//get single property
router.get("/:id", getsingleproperty);

//get all property
router.get("/", getallproperty);

//get property by search
router.get("/search/getpropertybysearch", getpropertybysearch);

// //create new user
// router.post("/user", creatuser);

// //get single user
// router.get("/user/:id", getsingleuser);

// //get all user
// router.get("/user", gettuser);

// //delet user
// router.delete("/user/:id", deletuser);

export default router;

