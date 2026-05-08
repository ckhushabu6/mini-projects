import React, { useState } from 'react'
import { Link } from 'react-router'
import './style/Navbar.css'

function Navbar() {
  
  const [menuOpen , setMenuOpen] = useState(false);
  return (
    <>
    <div className='main'>
   

      {/* title and logo */}
      <div className='logo-title'> 
        <img src='https://dsn-landing.netlify.app/assets/logo_t.png'  alt='logo'/>
        <h3>Drivers-<span style={{color : 'blue'}}>Socialize</span> Networks</h3>

        <div className='hamburger'>
              ☰
        </div>
      </div>
    
    

      {/* Navigate Link 
        if true (className ="link-tag active")
        if false (class="link-tag")
        Then CSS controls visibility.
      */}
    <div className={`link-tag ${!menuOpen} ? 'active' : '' ` }>
      
      <Link to='/'  >Home</Link>
      <Link to='/about' >About</Link>
      <Link to='/feature' >Feature</Link>
      <Link to='/contect' >Contect</Link>
    </div>
</div>
    </>
  )
}

export default Navbar