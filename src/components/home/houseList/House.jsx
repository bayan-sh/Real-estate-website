import React from 'react';
import {useEffect,useState} from "react";
import { BASE_URL } from "../../../utils/config"
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

//import icons
import {BiBed,BiBath,BiArea} from 'react-icons/bi';

const House = ({house}) => {

  const[data,setData]=useState()

  const  {image,type,country,address,bedrooms,bathrooms,surface,price}=house;
  useEffect(()=>{
fetch(`${BASE_URL}/property`,{
  method:"GET"}).then((res)=>res.json())
  .then((data)=>{
    console.log(data,"form");
    setData(data.data);
    
  })

  },[]);
const deleteproperty =(id,title)=>{
  if(window.confirm(`Are you sure want to delet ${title}`)){
    fetch(`${BASE_URL}/property/${id}`,{
      method:"DELETE"}).then((res)=>res.json())
      .then((data)=>{
        console.log(data,"form");
        setData(data.data);
      })
    


  }else{

    
  }
}


 

  return(
    <> 
    
    <div className='bg-white shadow-1 p-5 rounded-lg
  rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>

    <img src={image} alt=''/>
    <div className='mb-4 flex gap-x-2 text-sm'>
      <div className='bg-gray-500 
      rounded-full text-white px-3'>
        {type}
      </div>
      <div className='bg-green-500 
      rounded-full text-white px-3'>
        {country}
      </div>
    </div>
    <div className='text-lg font-semibold 
    max-w-[260px]'>{address}</div>
    <div className='flex gap-x-4 my-4'>
      <div className='flex items-center 
      text-gray-600 gap-1'>
        <div className='text-[20px]'><BiBed/></div>
        <div>{bedrooms}</div>
      </div>
      <div className='flex items-center 
      text-gray-600 gap-1'>
        <div className='text-[20px]'><BiBath/></div>
        <div>{bathrooms}</div>
      </div>

      <div className='flex items-center 
      text-gray-600 gap-1'>
        <div className='text-[20px]'><BiArea/></div>
        <div>{surface}</div>
      </div>

    </div>
  <div className='text-lg font-semibold text-green-600 mb-4'>{price}</div>
  </div>


    {data?.map(data=>(<div className='bg-white shadow-1 p-5 rounded-lg
  rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>

    <img src={data.photo} alt=''/>
    <div className='mb-4 flex gap-x-2 text-sm'>
      <div className='bg-gray-500 
      rounded-full text-white px-3'>
        {data.type}
      </div>
      
      <div className='bg-green-500 
      rounded-full text-white px-3'>
        {data.country}
      </div>
    </div>
    <div className='text-lg font-semibold 
    max-w-[260px]'>{data.address}</div>
    <div className='flex gap-x-4 my-4'>
      <div className='flex items-center 
      text-gray-600 gap-1'>
        <div className='text-[20px]'><BiBed/></div>
        <div>{data.bedrooms}</div>
      </div>
      <div className='flex items-center 
      text-gray-600 gap-1'>
        <div className='text-[20px]'><BiBath/></div>
        <div>{data.bathrooms}</div>
      </div>

      <div className='flex items-center 
      text-gray-600 gap-1'>
        <div className='text-[20px]'><BiArea/></div>
        <div>{data.status}</div>
      </div>

    </div>
  <div className='text-lg font-semibold text-green-600 mb-4'>{data.price}</div>
  <div className='mb-4 flex gap-x-2 text-sm'>
 <FontAwesomeIcon icon={faTrash} onClick={()=> deleteproperty(data._id,data.title)}/>
 
 
 </div>
  </div>
    ))}
  </> 
  );
  

};

export default House;
