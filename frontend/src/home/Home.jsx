import React from 'react'
import Footer from '../components/Footer.jsx'
import HeroSection from '../Components/HeroSection.jsx'
import Teams from '../pages/Teams.jsx'
import Navbar from '../Components/Navbar.jsx'
import ChooseUs from '../pages/ChooseUs.jsx'
import OurMission from '../Pages/Mission.jsx'
import ContactUs from '../Pages/ContactUs.jsx'
import QuizDetails from "../pages/TestDisc.jsx"

import Quiz from "../pages/QuestionWindow.jsx"
import ExamPage from '../pages/Test.jsx'


const Home = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ChooseUs />
   <OurMission />
   <Teams />
 <ContactUs />
    <Footer />
    <QuizDetails/>
  {/* <Quiz/> */}
    <ExamPage/>

   

    
    
    
    </>
  )
}


export default Home