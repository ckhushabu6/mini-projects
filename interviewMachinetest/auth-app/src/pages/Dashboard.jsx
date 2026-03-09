import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [user , setUser]= useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("token");
        axios.get(
            "http://localhost:3000/api/profile",
            {
                headers:{
                    Authorization:`Bearer ${token}`    
                }
            }
        )
        .then(res=>{
            setUser(res.data.user);
        })
        .catch(()=>{
            navigate('/login');
        })
    },[])

    const logout = async()=>{
        await axios.post("http://localhost:3000/api/logout");
        localStorage.removeItem("token");
        navigate("/login");
    }
if(!user)return<h3>Loading...</h3>

  return (
    <div>
        <h1>Dashboard</h1>
        <p>Welcome {user.username}</p>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard