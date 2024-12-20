import React from "react";
import Footer from "../components/Footer.jsx";
import HeroSection from "../Components/HeroSection.jsx";
import Teams from "../pages/Teams.jsx";
import Navbar from "../Components/Navbar.jsx";
import ChooseUs from "../pages/ChooseUs.jsx";
import OurMission from "../Pages/Mission.jsx";
import ContactUs from "../Pages/ContactUs.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import Gridarea from "../components/admin-components/Gridarea.jsx";

import Help from "../Pages/Help.jsx";

import QuizDetails from "../pages/TestDisc.jsx";

// import Quiz from "../pages/QuestionWindow.jsx"
import ExamPage from "../pages/Test.jsx";
import AdminDashboard from "../adminDashboard/AdminDashboard.jsx";
import AdminNavbar from "../components/admin-components/AdminNavbar.jsx";

const Home = () => {
  return (
    <>
       <Navbar />
      <HeroSection />
      <ChooseUs />
      <OurMission />
      <AboutUs/> 
      <Teams />
      <Help />
      <div id="contact">
        <ContactUs />
      </div> 
    
      <Footer />

     
      {/* <AdminDashboard /> */}
     
    </>
  );
};

export default Home;
