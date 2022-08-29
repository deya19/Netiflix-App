import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.scss"

function Navbar({setType}) {

  const [isScrolled,setIsScrolled] = useState(false);

  console.log(window.pageYOffset);
  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll = null
  }

  // console.log(isScrolled);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                <span onClick={() => setType("")}>HomePage</span>
                <span onClick={() => setType("Series")}>Series</span>
                <span onClick={() => setType("movie")}>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <div className="profile">
                 <ArrowDropDown className='icon'/>
                 <div className="options">
                  <span>Settings</span>
                  <Link className='link' to="/login"><span>Logout</span></Link>
                 </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar