import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div style={{width : "250px" , background : "#111" , color : "#fff" , height : "100vh" , padding : "20px"}}>
        <h2>Dubai Ops</h2>
        <p> 👥 Users</p>
        <p> 📝 Posts</p>
        <p> 📁 Albums</p>

        <nav>
            <Link to="/">Users</Link><br/>
            <Link to="/posts">Posts</Link><br/>
            <Link to="/albums">Albums</Link>
        </nav>
        </div>
  )
}

export default Sidebar