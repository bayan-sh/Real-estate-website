import React, { useContext } from "react"
import Heading from "../../common/Heading"
import CountryDropdown from"./CountryDropdown"
import PropertyDropdown from"./PropertyDropdown"
import PriceRangeDropdown from"./PriceRangeDropdown"
import {RiSearch2Line} from "react-icons/ri"
import "./hero.css"
//import context
import { HouseContext } from "../../HouseContext"

const Hero = () => {
  //const {houses}=useContext(HouseContext);

 // console.log(houses);
 const {handleClick} = useContext(HouseContext)
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />
          <div className='px-[30px] py-6 max-w-[1170px]
               mx-auto flex flex-col lg:flex-row justify-between
              gap-4 lg:gap-x-3 relative lg:top-4 lg:shadow-1 
              bg-white lg:bg-transparent lg:backdrop-blur
              rounded-lg'>
  <CountryDropdown />
  <PropertyDropdown /> 
  <PriceRangeDropdown /> 
<button  onClick={()=> handleClick()} className='bg-green-700 hover:bg-green-800 transition w-full lg:max-w-[162px] h-16
rounded-lg flex justify-center items-center text-white text-lg'>
  <RiSearch2Line />
</button>
  </div>


        </div>
      </section>
    </>
  )
}

export default Hero
