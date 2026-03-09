import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username , setUsername] = useState("");
    const [password, setPassword]=useState("");
    const [loading , setLoading] = useState(false);
    const[error , setError]= useState(null);

    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!username || password.length<6){
            setError("Invalid input");
            return;
        }

        try{
            setLoading('true');
            const res = await axios.post(
                "http://localhost:3000/api/login",
                {username,password}
            );
            localStorage.setItem("token" , res.data.token);
            navigate("/dashboard");

        }catch(e){
            setError("invalid information");
        }
        setLoading(false);
    } 
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type='text'
            placeholder='Username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />

             <input type='Password'
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />

            <button type='submit'>
                {loading ? "Loading..." : "Login"}
            </button>

        </form>
    </div>
  )
}

export default Login