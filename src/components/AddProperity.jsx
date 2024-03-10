import React, { useState } from "react"
import { BASE_URL } from "../utils/config";
const AddProperity = () => {
const[photo,SetPhoto]=useState('');
//const [files ,SetFiles]=useState("");
const [formData, setFormData] = useState({});
//   const [formData , setFormData] = useState({
// title:'',address:'',Descreption:'',photo:'',files:'',bedrooms:1,
// bathrooms:1,
// rooms:1,
// balcony:1,
// carpetarea:1,
// price:0,
// furnished:'',
// status:true,
// owner:'',
// ownerphone:2,
// type:'',

// files:{},


//   })

const h = (event) => {
  SetPhoto(event.target.files[0]);
};

// const m = (event) => {
//   SetFiles(event.target.files[0]);
// };


  // function h(e){
  //   console.log(e);
  //   var reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload=() =>{
  //     console.log(reader.result);
  //     SetPhoto(reader.result)
  //   };
  //   reader.onerror = error =>{
  //     console.log("Error: ",error);
  //   };

  // }

const handleChange = e=>{setFormData(prev=>({...prev,[e.target.id]:e.target.value}))
};
//send data to the server
const handleClick = async(e)=>{
e.preventDefault()
// console.log(address,title,Descreption,bedrooms,bathrooms,rooms,balcony,carpetarea,status,type,price,furnished,owner,ownerphone,photo,19,files)
// const formData = new FormData()
// formData.append('address', address)
// formData.append('title', title)
// formData.append('Descreption', Descreption)
// formData.append('bedrooms', bedrooms)
// formData.append('bathrooms', bathrooms)
// formData.append('rooms', rooms)
// formData.append('balcony', balcony)
// formData.append('carpetarea', carpetarea)
// formData.append('status', status)
// formData.append('type', type)
// formData.append('price', price)
// formData.append('furnished', furnished)
// formData.append('owner', owner)
// formData.append('ownerphone', ownerphone)
// formData.append('photo', photo)
// formData.append('files', files);
console.log(formData);
const reader = new FileReader();
reader.readAsDataURL(photo);
reader.onload = async () => {
  console.log(reader.result);
  const base64String = reader.result;
  const data = { ...formData, photo: base64String };
  await fetch(`${BASE_URL}/property`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};



//  const res= await fetch(`${BASE_URL}/property`,{
//   method:"POST",
//   headers:{
// "Content-Type":"application/json"

//   },
//   body:JSON.stringify(formData,photo)
//  });
//  const data= await res.json();
//  if (data.status == 500 ){
//  window.alert("invalived");
//  console.log("invalived")}
//  else{
//   window.alert("success");
//   console.log("success")}
 }



  return (

    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing </h1>
  <form  method="POST" onSubmit={handleClick}  enctype="multipart/form-data">
  <p className="text-lg mt-6 font-semibold">Tiltle</p>
<input type="text" placeholder="title" id="title"  required onChange={handleChange} 
 //maxLength="32"
 //minLength="10"
 className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
 <p className="text-lg mt-6 font-semibold">Address</p>
<input type="text" placeholder="Address" id="address"  required onChange={handleChange}
//maxLength="32"
//minLength="10"
className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

<p className="text-lg mt-6 font-semibold">Country</p>
<input type="text" placeholder="country" id="country"  required onChange={handleChange}
//maxLength="32"
//minLength="10"
className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>


<p className="text-lg mt-6 font-semibold">Descreption</p>
<input type="text" placeholder="Descreption" id="Descreption"  required onChange={handleChange}
//maxLength="32"
//minLength="10"
className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

<p className="text-lg mt-6 font-semibold">Furnished</p>
<input type="text" placeholder="furnished" id="furnished"  required onChange={handleChange}
//maxLength="32"
//minLength="10"
className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

<p className="text-lg mt-6 font-semibold">Type</p>
<input type="text" placeholder="type" id="type"  required onChange={handleChange}
//maxLength="32"
//minLength="10"
className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

<p className="text-lg mt-6 font-semibold">bedrooms</p>
<input type="number" placeholder="bedrooms" id="bedrooms"  required onChange={handleChange}
///maxLength="32"
//minLength="10"
className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
<p className="text-lg mt-6 font-semibold">bathrooms</p>
<input type="number" placeholder="bathrooms" id="bathrooms"  required onChange={handleChange}
//maxLength="32"
//minLength="10"
className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

<p className="text-lg mt-6 font-semibold">Rooms</p>
<input type="number" placeholder="rooms" id="rooms"  required onChange={handleChange}
//maxLength="32"
//minLength="10"
className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

<p className="text-lg mt-6 font-semibold">Balcony</p>
<input type="number" placeholder="balcony" id="balcony"  required onChange={handleChange}
//maxLength="32"
//minLength="10"
className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

<p className="text-lg mt-6 font-semibold">Carpetarea</p>
<input type="number" placeholder="carpetarea" id="carpetarea"  required onChange={handleChange}
//maxLength="32"
//minLength="10"
className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

<p className="text-lg mt-6 font-semibold">Price</p>
<input type="number" placeholder="price" id="price"  required onChange={handleChange}

className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
<p className="text-lg font-semibold">Images</p>
<input
            type="file"
            id="photo"
            required 
            onChange={h}
            accept="image/*"
            multiple
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
        

          <p className="text-lg mt-6 font-semibold">Property status</p>
<input type="boolean" placeholder="statue" id="status"  required onChange={handleChange}/>


<p className="text-lg mt-6 font-semibold">Name owner</p>
<input type="text" placeholder="name" id="owner"  required onChange={handleChange}

className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

<p className="text-lg mt-6 font-semibold">Owner Phone</p>
<input type="number" placeholder="phone" id="ownerphone"  required onChange={handleChange}

className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

<p className="text-lg font-semibold">Files</p>
<input
            type="file"
            id="files"
            required onChange={handleChange}
            accept=".jpg,.png,.jpeg"
            multiple
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />


<button className="mb-6 w-full px-7 py-3 bg-green-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg active:bg-green-800 active:shadow-lg
 transition duration-150 ease-in-out" type="submit" onClick={handleClick}>
  creat
</button>
</form>
</main>
)

};
export default AddProperity;



// import React, { useState } from "react"
// import { BASE_URL } from "../utils/config";
// const AddProperity = () => {
// const [photo ,SetPhoto]=useState("");
// const [files ,SetFiles]=useState("");
// const [title ,SetTitle]=useState("");
// const [address ,SetAddress]=useState("");
// const [Descreption ,SetDescreption]=useState("");
// const [bedrooms ,Setbedrooms]=useState("");
// const [bathrooms ,Setbathrooms]=useState("");
// const [rooms ,Setrooms]=useState("");
// const [balcony ,Setbalcony]=useState("");
// const [carpetarea ,Setcarpetarea]=useState("");
// const [price ,Setprice]=useState("");
// const [furnished ,Setfurnished]=useState("");
// const [status ,Setstatus]=useState("");
// const [owner ,Setowner]=useState("");
// const [ownerphone ,Setownerphone]=useState("");
// const [type ,Setftype]=useState("");



// //   const [formData , setFormData] = useState({
// // title:'',address:'',Descreption:'',photo:'',files:'',bedrooms:1,
// // bathrooms:1,
// // rooms:1,
// // balcony:1,
// // carpetarea:1,
// // price:0,
// // furnished:'',
// // status:true,
// // owner:'',
// // ownerphone:2,
// // type:'',

// //   })
// //   console.log(photo ,12)

//   function convertToBase64(e){
    
//     //  console.log(e);
//     //  SetPhoto(prev=>({...prev,[e.target.id]:e.target.value}))
//     //  var reader = new FileReader();
//     //  reader.readAsDataURL(e.target.files[0]);
//     // reader.onload=() =>{
      
//     //   console.log(reader.result);
//     //   SetPhoto(reader.result)
      
//     // };
//     // reader.onerror = error =>{
//     //   console.log("Error: ",error);
//     // };
//   }
// //

// function h(e){
 
// //   console.log(e);
// //   SetFile(prev=>({...prev,[e.target.id]:e.target.value}))
// //   var reader = new FileReader();
// //   reader.readAsDataURL(e.target.files[0]);
// //  reader.onload=() =>{

// //   console.log(reader.result);
// //   SetFile(reader.result)
  
   
// //  };
// //  reader.onerror = error =>{
// //    console.log("Error: ",error);
// //  };
// }

// // const handleChange = e=>{setFormData(prev=>({...prev,[e.target.id]:e.target.value}))
// // };
// const handleChange = e=>{
// };


// //send data to the server
// const handleClick = ()=>
// {
// console.log(address,title,Descreption,bedrooms,bathrooms,rooms,balcony,carpetarea,status,type,price,furnished,owner,ownerphone,photo,19,files)
// const formData = new FormData()
// formData.append('address', address)
// formData.append('title', title)
// formData.append('Descreption', Descreption)
// formData.append('bedrooms', bedrooms)
// formData.append('bathrooms', bathrooms)
// formData.append('rooms', rooms)
// formData.append('balcony', balcony)
// formData.append('carpetarea', carpetarea)
// formData.append('status', status)
// formData.append('type', type)
// formData.append('price', price)
// formData.append('furnished', furnished)
// formData.append('owner', owner)
// formData.append('ownerphone', ownerphone)
// formData.append('photo', photo)
// formData.append('files', files);

// console.log(formData);

//  const res=  fetch(`${BASE_URL}/property`,{
//   method:"POST",
//   headers:{
// "Content-Type":"application/json"
//   },
//   body:JSON.stringify(formData)
//  });
//  const data = res.json();
//  if (data.status == 500 ){
//  window.alert("invalived");
//  console.log("invalived")}
//  else{
//   window.alert("success");
//   console.log("success")}
//  }




// // async(e)=>{
// // e.preventDefault()
// // console.log(formData);
// // const datta = { ...formData,photo,file };
// //  const res= await fetch(`${BASE_URL}/property`,{
// //   method:"POST",
// //   headers:{
// // "Content-Type":"application/json"
// //   },
// //   body:JSON.stringify(datta)
// //  });
// //  const data= await res.json();
// //  if (data.status == 500 ){
// //  window.alert("invalived");
// //  console.log("invalived")}
// //  else{
// //   window.alert("success");
// //   console.log("success")}
// //  }



//   return (

//     <main className="max-w-md px-2 mx-auto">
//       <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing </h1>
//   <form  method="POST" onSubmit={handleClick}>
//   <p className="text-lg mt-6 font-semibold">Tiltle</p>
// <input type="text" placeholder="title" id="title"  required onChange={handleChange} 
//  //maxLength="32"
//  //minLength="10"
//  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
//  <p className="text-lg mt-6 font-semibold">Address</p>
// <input type="text" placeholder="Address" id="address"  required onChange={handleChange}
// //maxLength="32"
// //minLength="10"
// className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

// <p className="text-lg mt-6 font-semibold">Country</p>
// <input type="text" placeholder="country" id="country"  required onChange={handleChange}
// //maxLength="32"
// //minLength="10"
// className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>


// <p className="text-lg mt-6 font-semibold">Descreption</p>
// <input type="text" placeholder="Descreption" id="Descreption"  required onChange={handleChange}
// //maxLength="32"
// //minLength="10"
// className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

// <p className="text-lg mt-6 font-semibold">Furnished</p>
// <input type="text" placeholder="furnished" id="furnished"  required onChange={handleChange}
// //maxLength="32"
// //minLength="10"
// className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

// <p className="text-lg mt-6 font-semibold">Type</p>
// <input type="text" placeholder="type" id="type"  required onChange={handleChange}
// //maxLength="32"
// //minLength="10"
// className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

// <p className="text-lg mt-6 font-semibold">bedrooms</p>
// <input type="number" placeholder="bedrooms" id="bedrooms"  required onChange={handleChange}
// ///maxLength="32"
// //minLength="10"
// className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

// <p className="text-lg mt-6 font-semibold">bathrooms</p>
// <input type="number" placeholder="bathrooms" id="bathrooms"  required onChange={handleChange}
// //maxLength="32"
// //minLength="10"
// className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

// <p className="text-lg mt-6 font-semibold">Rooms</p>
// <input type="number" placeholder="rooms" id="rooms"  required onChange={handleChange}
// //maxLength="32"
// //minLength="10"
// className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

// <p className="text-lg mt-6 font-semibold">Balcony</p>
// <input type="number" placeholder="balcony" id="balcony"  required onChange={handleChange}
// //maxLength="32"
// //minLength="10"
// className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

// <p className="text-lg mt-6 font-semibold">Carpetarea</p>
// <input type="number" placeholder="carpetarea" id="carpetarea"  required onChange={handleChange}
// //maxLength="32"
// //minLength="10"
// className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

// <p className="text-lg mt-6 font-semibold">Price</p>
// <input type="number" placeholder="price" id="price"  required onChange={handleChange}

// className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>
// <p className="text-lg font-semibold">Images</p>
// <input
//             type="file"
//             id="photo"
//             required 
//             onChange={(e)=> SetPhoto(e.target.files[0])}
//             accept=".jpg,.png,.jpeg"
//             multiple
//             className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
//           />
        

//           <p className="text-lg mt-6 font-semibold">Property status</p>
// <input type="boolean" placeholder="statue" id="status"  required onChange={handleChange}/>


// <p className="text-lg mt-6 font-semibold">Name owner</p>
// <input type="text" placeholder="name" id="owner"  required onChange={handleChange}

// className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

// <p className="text-lg mt-6 font-semibold">Owner Phone</p>
// <input type="number" placeholder="phone" id="ownerphone"  required onChange={handleChange}

// className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"/>

// <p className="text-lg font-semibold">Files</p>
// <input
//             type="file"
//             id="files"
//             required onChange={h}
//             accept=".jpg,.png,.jpeg"
//             multiple
//             className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
//           />


// <button className="mb-6 w-full px-7 py-3 bg-green-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg active:bg-green-800 active:shadow-lg
//  transition duration-150 ease-in-out" type="submit" onClick={handleClick}>
//   creat
// </button>
// </form>
// </main>
// )

// };
// export default AddProperity;



