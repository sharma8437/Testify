import React from "react";
// import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import nikesh from "../assets/nikesh.jpg";

const Teams = () => {
  const teams = [
    {
      id: "1",
      image: nikesh,
      name: "Nikesh Sharma",
      description: "Full Stack Developer specializing in MERN stack. Experienced in building robust applications.",
      expertise: "Frontend Development, Backend Integration, React, Node.js",
      linkedin: "https://www.linkedin.com/in/nikeshsharma",
      instagram: "nikesh_dev",
    },
    {
      id: "2",
      image: nikesh,
      name: "Sonu",
      description: "UI/UX Designer with experience in building user-friendly interfaces.",
      expertise: "UI/UX Design, HTML/CSS, JavaScript",
      linkedin: "https://www.linkedin.com/in/sonu",
      instagram: "sonu_designer",
    },
    {
      id: "3",
      image: nikesh,
      name: "Mehul Kalra",
      description: "Project Manager with expertise in Agile methodologies and React.",
      expertise: "Project Management, Agile Development, React",
      linkedin: "https://www.linkedin.com/in/mehulkalra",
      instagram: "mehul_agile",
    },
    {
      id: "4",
      image: nikesh,
      name: "Aryan Sharma",
      description: "Backend Developer specializing in RESTful APIs.",
      expertise: "Node.js, Express.js, Database Management",
      linkedin: "https://www.linkedin.com/in/aryansharma",
      instagram: "aryan_dev",
    },
    {
      id: "5",
      image: nikesh,
      name: "Sujal",
      description: "Cloud specialist with a focus on scalable infrastructure.",
      expertise: "AWS, DevOps, Docker",
      linkedin: "https://www.linkedin.com/in/sujal",
      instagram: "sujal_cloud",
    },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 py-4">
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="text-center text-3xl text-red-600 font-bold mb-5 ">
        <h1>Meet Our Team!</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 ">
        {teams.map((item, index) => (
          <div
            key={index}
            className="card bg-base-110 w-full sm:w-56 md:w-48 lg:w-56 shadow-md hover:shadow-md hover:shadow-red-300 hover:scale-105 transition-transform duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-xl w-32 h-40 object-cover mx-auto"
              />
            </figure>
            <div className="card-body items-center text-center p-2">
              <h2 className="card-title text-sm">{item.name}</h2>
              <p className="text-xs text-gray-600 mb-1">{item.description}</p>
              <p className="text-xs text-gray-500 italic mb-2">Expertise: {item.expertise}</p>
              <div className="flex gap-2 justify-center">
                <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                  {/* <FaLinkedin className="text-blue-700 text-lg hover:text-blue-500 transition-colors duration-200" /> */}
                </a>
                <a href={`https://www.instagram.com/${item.instagram}`} target="_blank" rel="noopener noreferrer">
                  {/* <FaInstagram className="text-pink-500 text-lg hover:text-pink-400 transition-colors duration-200" /> */}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Teams;
