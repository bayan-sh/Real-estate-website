import React, { useState ,useContext} from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import { DataContext } from '../../dataContext';
import {Cookies, useCookies, withCookies} from 'react-cookie';

const Header = (props) => {
  const {data}=useContext(DataContext);
  const [navList, setNavList] = useState(false)
  const [cookies, setCookies] = useCookies(['access_token']);
  const removeCookies=()=>{
    setCookies('access_token','');

    window.localStorage.removeItem("UserId");
    window.location.reload(false);

  

  }
  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">

          <div class="icon-bar">
         

  
  <a href="/AddProperity"><i class="far fa-plus-square"></i> Add Real Estate</a>
  {
  data
  ?<button  onClick={removeCookies} className="Btn-logout">logout   <i class="fa fa-sign-out"></i></button>
  :<a href="/Login"><i class="fa fa-fw fa-user"></i> Login</a>
  
  
  } 
  <div></div>
  </div>


          {/* <div className='button flex'>
          <Link to='/AddProperity' > 
          <button className='border border-green-700 text-white-700
  hover:border-green-500
  hover:text-green-500 rounded p-4 text-sm  transition'> Add real estate</button>
         </Link>
         <Link to='/creatAnAccount'> 
         <button className='border border-green-700 text-white-700
          hover:border-green-500
            hover:text-white-500 rounded p-4 text-sm  transition'>Sign up</button></Link>
            </div> */}
          </div>
          

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
