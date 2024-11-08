import React from 'react';

const OurMission = () => {
  const missionPoints = [
    {
      title: "Empowering HR Teams",
      description: "We provide tools to streamline hiring processes, allowing HR professionals to focus on strategic initiatives.",
      icon: "💼"
    },
    {
      title: "Ensuring Integrity",
      description: "With secure, real-time monitoring, we uphold the highest standards of testing integrity and security.",
      icon: "🔒"
    },
    {
      title: "Innovative Solutions",
      description: "We utilize cutting-edge technology to deliver comprehensive data insights and an exceptional user experience.",
      icon: "💡"
    }
  ];

  return (

    <div className="max-w-screen-2xl container mx-auto md:px-20 py-4">

   
    <div className="py-12 px-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Our Mission</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {missionPoints.map((point, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
          >
            <div className="flex items-center justify-center mb-4 text-5xl">
              {point.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">{point.title}</h2>
            <p className="text-gray-600">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OurMission;
