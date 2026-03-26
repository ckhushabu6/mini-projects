import './App.css'
import {Routes ,Route} from 'react-router'
import Users from './pages/Users'
import Posts from './pages/Posts'
import Albums from './pages/Albums'
import Sidebar from './components/Sidebar'

function App() {
  
  return (
    <>
   <h1>Hii, this is my new project ...</h1>
   <div style={{display: 'flex'}}>
    <Sidebar/>
    <div style={{flex:1 , padding : "20px" }}>
    <Routes >
    <Route path='/'  element={<Users/>}/>
    <Route path='/posts' element={<Posts/>}/>
    <Route path='/albums' element={<Albums/>}/>
   </Routes>
    </div>
   </div>
   
   

    </>
  )
}

export default App
