import react from 'react'

import About from './components/About'
import Contect from './components/Contect'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes , Route} from 'react-router-dom'

function App() {
  return (
    <>

      <Navbar style={{position : "fixed"}}/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/feature' element={<Feature/>}/>
        <Route path='/contect' element={ <Contect/>}/>
        <Route path='/footer' element={ <Footer/>}/>
         
      </Routes>
      

      <h3>Main Page</h3>
  </>

)
}
export default App
