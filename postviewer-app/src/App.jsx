import { useEffect , useState } from "react"
import './App.css';
function App() {
 
const [posts , setPosts] = useState([]);
const [loading , setLoading] = useState(true);
const [error , setError] = useState(null);

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
  .then((res)=>{
    console.log(res)
    if(!res.ok){
      throw new Error("Failed to fetch data");
    }
    return res.json();
  })
  .then((data)=>{
    setPosts(data);
    setLoading(false);
  })
  .catch((err)=>{
    setError(err.message);
    setLoading(false)
  });
},[]);

if(loading){
  return <div className="center">Loading...</div>;
}

if(error){
  return <div className="center error">Error: {error}</div>
}
  return (
    <>
    <div className="container">
      <h1>Posts</h1>
      <div className="grid">
        {posts.map((post)=>(
          <div key={post.id} className="card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>

          </div>
        ))}
      </div>
    </div>
    
    </>
  )
}

export default App
