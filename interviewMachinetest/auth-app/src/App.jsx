import {BrowserRouter , Routes , Route} from 'react-router-dom'


import './App.css'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Dashboard' element={<ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>}/>
    </Routes>
    </BrowserRouter>
      </>
  )
}

export default App
