import React from 'react'
import logo from '../Images/logo.png'
import profile from '../Images/profile.jpg'
import '../Styles/NavBar.css'

const NavBar = () => {
  
  
return (
    <>
    <nav className='navbar'>
    <div className='container'>
      <img src={logo} className='logo' alt='Logo' crossOrigin="anonymous"></img>
      <div className='search-bar'>
      <span className="material-icons-sharp">search</span>
      <input type='search' placeholder='Search'/>
      </div>

      <div className='profile-area'>
        <div className='theme-btn'>
      <span className="material-icons-sharp active" >light_mode</span>
      <span className="material-icons-sharp">dark_mode</span>
      </div>
      <div className='profile'>
        <div className='profile-photo'>
          <img src={profile} alt='profile' crossOrigin="anonymous"></img>
        </div>
        <h5>Chua Hua</h5>
        <span className="material-icons-sharp">expand_more</span>
      </div>
      <button id='menu-btn'>
      <span className="material-icons-sharp">menu</span>
      </button>
      </div>
    </div>
    </nav>
    </>
  )
}






export default NavBar