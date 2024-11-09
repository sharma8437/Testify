
import { Routes, Route } from 'react-router-dom'
import './App.css'
import "../src/styles/homePage_containerBoxShadow.css";

import Home from './home/Home'
import AboutUs from './Pages/AboutUs'
import ForgotPassword from './pages/ForgotPassword'

import Login from './Pages/Login'
// import Login from './pages/Login'
import Signup from './pages/Signup'




function App() {
  

  return (
    <>
  
<Routes>
<Route path='/' element={<Home />} />
<Route path='/about' element={<AboutUs />} />

<Route path='/signup' element={<Signup />} />
<Route path='/login' element={<Login />} />
<Route path='/ForgotPassword' element={<ForgotPassword />} />

</Routes>


    </>
  )
}

export default App
