import React from "react";
import Navbar from "../Components/Navbar";

export default function AboutUs() {
  return (

    <>
  <Navbar />
    <div className="flex flex-col min-h-screen justify-center px-6 py-12 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-gray-800">
          A <span className="text-red-600">Testify</span> Memoir
        </h1>
        <p className="text-center text-gray-600 mt-4">
          We’re committed to inspiring minds and fostering a community of
          growth. Hello this is about.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-around mt-10 sm:max-w-5xl sm:mx-auto space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="relative w-full lg:w-1/2 lg:transform lg:hover:scale-105 transition-transform duration-500 ease-in-out">
          <img
            src="https://img.freepik.com/free-photo/taking-applicant-vacancy_1098-13292.jpg?t=st=1731077714~exp=1731081314~hmac=306b39ff45c9acc6c192246e4bf7b0bea54d2f5a3c1a061eff148df6918e481e&w=826"
            alt="Our Team"
            className="rounded-lg shadow-lg object-cover"
          />
          <div className="absolute inset-0 bg-red-600 opacity-20 hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <p className="text-gray-900 text-justify leading-relaxed">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod lectus in ligula sagittis, eget convallis lorem tincidunt. Nullam sit amet massa eget augue facilisis pretium et vel ex. Nam vitae ligula cursus, dictum elit vel, posuere purus. Cras malesuada auctor erat, at sagittis lectus laoreet sed. Donec venenatis vestibulum enim, a viverra nulla volutpat vel. Donec a pharetra arcu. Integer aliquet fringilla nisi at feugiat. Sed malesuada, nisl nec malesuada blandit, tortor dolor feugiat justo, vel venenatis leo nunc id ligula.`}
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