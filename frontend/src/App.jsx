
import './App.css'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ChooseUs from './pages/ChooseUs'
import ForgotPassword from './pages/ForgotPassword'
// import Login from './pages/Login'
import Signup from './pages/Signup'
import Teams from './pages/Teams'



function App() {
  

  return (
    <>
 <Navbar />
 <HeroSection />
 <Teams />
 <ChooseUs />
 {/* <Login /> */}
 <ForgotPassword />
 <Signup /> 


 <Footer />
    </>
  )
}

export default App
