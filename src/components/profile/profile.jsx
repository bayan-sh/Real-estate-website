import React from 'react';
import  Axios  from 'axios';
import { useState, useEffect } from 'react';
import './profile.css'

export default function PersonalProfile() {

//   const [users, setUsers] = useState([]);


// const store = window.localStorage.getItem("UserId");

//   useEffect(()=>{
//     Axios.get("http://localhost:4000/user")
// .then(res => {
  
//   setUsers(res.data)
// })

//   },[])
//   const filter =users.filter((user)=>user._id==store);
// console.log(store);

 

  return(
    <p>bayan</p>
  //  <>
  //  {
  //   filter.length!=0?
   
  //  filter.map(user => {
  //   return (
  //     <div class="card">
  //     <div class="card_background_img"></div>
  //     <div class="card_profile_img"></div>
  //     <div class="user_details">
  //         <h3>{user.fullname}</h3>
  //         <p>Client</p>
  //     </div>
  //     <div class="card_count">
  //         <div class="count">
  //             <div class="fans">
  //                 <h3>Full name</h3>
  //                 <p>{user.fullname}</p>
  //             </div>
  //             <div class="following">
  //                 <h3>Email</h3>
  //                 <p>{user.email}</p>
  //             </div>
  //             <div class="post">
  //                 <h3>phone number</h3>
  //                 <p>0992582189</p>
  //             </div>
  //         </div>
  //          {/* <div class="btn">Follow</div> */}
  //     </div>
  // </div>
  //   )
    
  //  }):<div class ="Enter-login">
    
  //   <h1>You have account Login</h1>
  //   <a href="/login"> <div class="btn" >  Login</div></a>
  //   <span class="not-have-account">You not have account</span>
  //   <a href="/creatAnAccount" class="create-account">Create an account</a>
   
  //  </div>
  
  // }
  //  </>

  );
}


