import React, { useContext } from "react"
import Heading from "../../common/Heading"
import { BASE_URL } from "../../../utils/config"
//import context
import { HouseContext } from "../../HouseContext"
//import components
import House from './House';
//import link
import {Link, useParams} from 'react-router-dom';
import {useEffect,useState} from "react";
//import icon
import {ImSpinner2} from 'react-icons/im';
import { housesData } from "../../../data1";

const HouseList = () => {
    const {houses, loading} = useContext(HouseContext);

    const {id} = useParams();
    //if loading is true 
    if(loading)
    {
        return (<ImSpinner2 className="mx-auto animate-spin
         text-green-700 text-4l mt-[200px]" />);
    }
    if(houses.length < 1)
    {
 return <div className="text-center text-3xl
  text-gray-400 mt-48">
     sorry ,nothing found
 </div>

  }
    return(
        <section className="mb-20">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2
                 lg:grid-cols-3 gap-4 lg:gap-14">
                {
        houses.map((house , index)=>{
    return(
    <Link to = {`/property/${house.id}`} key={index}>
        <House house = {house}/>
    </Link>
    )
})}
</div>
            </div>
        
        
        </section>
    )
}
export default HouseList