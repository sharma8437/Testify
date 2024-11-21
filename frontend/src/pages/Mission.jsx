import React from 'react';
import '../styles/homePage_containerBoxShadow.css'

const OurMission = () => {
  const missionPoints = [
    {
      title: "Automated Candidate Assessments",
      description: "Streamline your recruitment process with customizable online tests. Create and assign assessments tailored to the skills and roles required.",
      icon: "💼"
    },
    {
      title: "Secure Live Video Monitoring",
      description: "Ensure the integrity of assessments with real-time video monitoring.",
      icon: "🔒"
    },
    {
      title: "User-Friendly HR Dashboard",
      description: "Simplified and intuitive interface for managing and reviewing assessments.Monitor results and candidate progress seamlessly.",
      icon: "💡"
    }
  ];

  return (
    
    <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
    <div className="max-w-screen-2xl container mx-auto md:px-20 py-4">

   
    <div className="py-12 px-6 bg-base-100 custom-gradient-shadow ">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-600">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {missionPoints.map((point, index) => (
          <div
            key={index}
            className="p-6 bg-white  shadow-lg rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
          >
            <div className="flex items-center justify-center mb-4 text-5xl ">
              {point.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-red-600">{point.title}</h2>
            <p className="text-gray-600">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  
  );
};

export default OurMission;
