import React from "react";
import {useEffect,useState} from "react";
// import  data 
import {housesData} from '../data1';
// import use params
import { useParams } from "react-router-dom";
// import icons
import {BiBed,BiBath,BiArea} from 'react-icons/bi';
//import link
import {Link} from 'react-router-dom';
import { BASE_URL } from "../utils/config"

// SMART CONTRACT
import Web3 from 'web3'
import PContract from "../contract";

const PropertyDetails = () => {
// CONNECT WALLET

const [error, setError] = useState('')
const [successMsg, setSuccessMsg] = useState('')
const [web3, setWeb3] = useState('')
const [address, setAddress] = useState(null)
const [vmContract, setVmContract] = useState(null)
const [blockNumber, setBlockNumber] = useState('')

useEffect(() => {
 }, [vmContract, address])

const buyHandler = async () => {
  try {
    //const provider = new ethers.providers.Web3Provider();
    //const signer = provider.getSigner();

    let price = web3.utils.toWei('1', 'ether')
    console.log("try to purchase")

    const transaction = await vmContract.methods.buyRealEstate(address, price, house.address, house.year, house.bedrooms, house.bathrooms).send({
      from: address,
      value: price,
      gas: 3000000,
    })
    console.log("PropertyAdded event:");
      const propertyAddedEvent = vmContract.events.PropertyAdded(address, price, house.addr, house.landArea, house.bedrooms, house.bathrooms)
      .on('data', function(event) {
          console.log("PropertyAdded event:", event);
      });
      
    const result = await vmContract.methods.getCurrentBlockNumber().call();
    setSuccessMsg(`To ensure the success of the transaction , Enter the link`)
    setBlockNumber(`https://etherscan.io/block/${result}`);

  } catch(error) {
    setError(error.message)
  }
}

const connectWalletHandler = async () => {
      try {
        // request wallet connect 
        await window.ethereum.request({ method: "eth_requestAccounts" })
        // create web3 instance and set to state var 
        const web3 = new Web3(window.ethereum)
        // set web3 instance
        setWeb3(web3)
        // get list of accounts
        const accounts = await web3.eth.getAccounts()
        // set Account 1 to React state var
        setAddress(accounts[0])
        // create local contract copy
        setVmContract(PContract(web3))
        
      } catch(err) {
         setError(err.message)
       }

}

//----------------------------------------------------------------------------------------------------
    // get the house id
    const{id} = useParams();
    //console.log(id);
    //get the house based on the id 
    const[data,setData]=useState()

  
  useEffect(()=>{
fetch(`${BASE_URL}/property`,{
  method:"GET"}).then((res)=>res.json())
  .then((data)=>{
    console.log(data,"form");
    setData(data.data);
    
  })

  },[]);
    const house = housesData.find(house =>{
 return house.id=== parseInt(id);

    });
    
  return <section><div className='container mx-auto
  min-h=[800px] mb-14'>
   <div className='flex flex-col lg:flex-row 
   lg:items-center
    lg:justify-between'>
     
    <div>
      <h2 className='text-2xl font-semibold'>{house.name}</h2>
      <h3 className='text-lg mb-4'>{house.address}</h3> 
    </div>
    <div className='mb-4 lg:mb-0 flex gap-x-2 
    text-sm'>
      <div className='bg-gray-500 text-white
      px-3 rounded-full'>{house.type}</div>
      <div className='bg-green-500 text-white
      px-3 rounded-full'> {house.country}</div>
    </div>
    <div className='text-3x font-semibold
    text-gray-600'> $ {house.price}</div>
    </div>
    <div className='flex flex-col items-start
    gap-8 lg:flex-row'>
      <div className='max-w-[768px]'>
        <div className='mb-8'>
          <img src={house.imageLg} alt=''/>
        </div>
        <div className='flex gap-x-6 text-gray-700 mb-6'>
          <div className='flex gap-x-2 items-center'>
            <BiBed className='text-2xl'/><div>{house.bedrooms}</div>
          </div>

          <div className='flex gap-x-2 items-center'>
            <BiBath className='text-2xl'/><div>{house.bathrooms}</div>
          </div>

          <div className='flex gap-x-2 items-center'>
            <BiArea className='text-2xl'/><div>{house.surface}</div>
          </div>

        </div>

        <div> {house.description} </div>
        </div>
        <div className='flex-1 bg-white w-full
        mb-8 border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20vp-1 border border-gray-300 rounded-full'> <img src={house.agent.image} alt=''/> </div>
            <div > 
              <div className='font-bold text-lg'>
                {house.agent.name}
              </div>
              <Link to='' className='text-blue-500 text-sm '> View Listings</Link>
               </div>
             </div>
        {/* form*/}
        <form  className='flex flex-col gap-y-4'>
<input className='border border-gray-300 focus:border-green-700
 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Name*'></input>
<input className='border border-gray-300 focus:border-green-700
 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Email*'></input>
<input className='border border-gray-300 focus:border-green-700
 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='phone*'></input>
<textarea className='border border-gray-300 focus:border-green-700 outline-none resize-none 
rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message*' defaultValue='hello, I am interested in[modern Apartment]'></textarea>
<div className='flex gap-x-2'>
  <button className='bg-green-700
  hover:bg-green-800 text-white rounded p-4 text-sm w-full transition'>Send Message</button>
  <button className='border border-green-700 text-green-700
  hover:border-green-500
  hover:text-green-500 rounded p-4 text-sm w-full transition'>Call</button>
</div>

        </form>
        </div>
         </div>

         <div className="container">
                <div className="navbar-brand">
                </div>
                <div className="navbar-end">
                    <button onClick={connectWalletHandler} className="button is-primary">Connect Wallet</button>
                </div>
            </div>
              <div className="container">
                <div className="field">
                  <button 
                    onClick={buyHandler} 
                    className="button is-primary mt-2">Buy</button>
                </div>
                <p>{successMsg}</p>
                <Link to={{ pathname: "https://etherscan.io/block/" }} target="blockNumber">
                  <a>{blockNumber}</a>
               </Link>

              </div>


       <br/>
       <div>
        <span> {error}</span>
        </div>
    </div>
    </section>
    
};

export default PropertyDetails;
