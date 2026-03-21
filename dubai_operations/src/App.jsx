import './App.css'
import {Routes ,Route } from 'react-router'
import Users from './pages/Users'
import Posts from './pages/Posts'
import Albums from './pages/Albums'

function App() {
  
  return (
    <>
   <h1>Hii, this is my new project ...</h1>
   <Routes >
    <Route path='/users' element={<Users/>}/>
    <Route path='/posts' element={<Posts/>}/>
    <Route path='/albums' element={<Albums/>}/>
   </Routes>

    </>
  )
}

export default App
