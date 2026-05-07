import React from 'react'
import { Link } from 'react-router'
import './style/Navbar.css'

function Navbar() {
  return (
    <>
    <din className='main' style={{display: "flex" , backgroundColor : "black" , color : "white" , alignItems:'center' , width:"100%" , padding : "20px"}}>
    <div style={{display:'flex'  , alignItems:"center"}}>
      <div className='logo'> 
        <img src='https://dsn-landing.netlify.app/assets/logo_t.png'  style={{height:'100px' , width:'100px'}} />
      </div>
      <div className='logo-title' style={{color:'white'}}>
        <h3 style={{color:'white'}}>Drivers-<span style={{color:'#0081ff'}}>Socialize</span> Networks</h3>
      </div>
    </div>
    <div>
      <Link to='/'  style={{color: "white" , padding: "10px", textDecoration:"none"}}>Home</Link>
      <Link to='/about' style={{color: "white" ,  padding: "10px", textDecoration:"none"}}>About</Link>
      <Link to='/feature' style={{color: "white",  padding: "10px" , textDecoration:"none" }}>Feature</Link>
      <Link to='/contect' style={{color: "white",  padding: "10px" , textDecoration:"none"}}>Contect</Link>
    </div>
</din>
    </>
  )
}

export default Navbar