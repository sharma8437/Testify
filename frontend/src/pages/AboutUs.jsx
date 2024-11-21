import React from "react";
import Navbar from "../Components/Navbar";
import img1 from "../assets/img1.svg";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-gray-800">
            A <span className="text-red-600">Testify</span> Memoir
          </h1>
          <p className="text-center text-gray-600 mt-4">
            We’re committed to inspiring minds and fostering a community of
            growth. Mehul Updated
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-around mt-10 sm:max-w-5xl sm:mx-auto space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="relative w-full lg:w-1/2 lg:transform lg:hover:scale-105 transition-transform duration-500 ease-in-out">
            <img
              src={img1}
              alt="Our Team"
              className="rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-red-600 opacity-20 hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <p className="text-gray-900 text-justify leading-relaxed">
                Welcome to Testify, your trusted partner in streamlining exam
                and assessment processes for hiring the right talent. At
                Testify, we specialize in creating seamless, secure, and
                efficient online exam solutions for candidates applying for
                jobs.<br/><br/> Our platform empowers HR professionals to evaluate
                candidates with precision, using customizable tests tailored to
                specific job requirements. Whether you're assessing technical
                skills, problem-solving abilities, or cultural fit, Testify
                ensures accuracy and reliability at every step.<br/><br/> We’re committed
                to simplifying the hiring journey, saving time, and helping
                organizations find the perfect match with confidence. Let
                Testify transform the way you conduct exams and identify top
                talent! <br/> <br/> <strong>Testify – Simplify Assessments. Amplify Hiring Success.{" "}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Animated decorative elements */}
        <div className="absolute -top-10 left-5 transform -rotate-45 opacity-50 hidden md:block">
          <div className="w-36 h-36 bg-red-100 rounded-full"></div>
        </div>
        <div className="absolute -bottom-10 right-5 transform rotate-45 opacity-50 hidden md:block">
          <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </>
  );
}
