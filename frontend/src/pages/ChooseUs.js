import React from 'react';
import Logo1Chooseus from "../Assests/Logo1Chooseus.svg"

const ChooseUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-[90%] max-w-6xl p-8 border-2 border-dotted border-red-300 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Why Choose Testify</h2>
        
        <div className="grid grid-cols-3 gap-6">
          {/* Left side icons and texts */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="text-red-600 text-2xl">
                <img src={Logo1Chooseus} alt="logo1" />
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h3 className="font-bold">Time-Saving Efficiency</h3>
                <p>We streamline the assessment process, allowing HR teams to focus on strategic decision-making rather than administrative tasks.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-red-600 text-2xl">
                {/* Icon */}
                <i className="fas fa-lock"></i>
              </div>
              <div>
                <h3 className="font-bold">Secure and Reliable</h3>
                <p>Our platform ensures the confidentiality and integrity of candidate data, providing peace of mind for both candidates and employers.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-red-600 text-2xl">
                {/* Icon */}
                <i className="fas fa-cogs"></i>
              </div>
              <div>
                <h3 className="font-bold">Innovative Features</h3>
                <p>Stay ahead of the curve with our cutting-edge technology, including live video recording for assessments, enhancing both security and engagement.</p>
              </div>
            </div>
          </div>

          {/* Right side image */}
          <div className="col-span-1 flex justify-center">
            <img src="https://via.placeholder.com/250" alt="Why Choose Testify" className="rounded-lg shadow-lg" />
          </div>

          {/* Right side icons and texts */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="text-red-600 text-2xl">
                {/* Icon */}
                <i className="fas fa-users"></i>
              </div>
              <div>
                <h3 className="font-bold">User-Friendly Interface</h3>
                <p>Testify offers an intuitive interface for both candidates and HR professionals, ensuring a seamless experience throughout the assessment journey.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-red-600 text-2xl">
                {/* Icon */}
                <i className="fas fa-expand-arrows-alt"></i>
              </div>
              <div>
                <h3 className="font-bold">Scalability</h3>
                <p>Whether you're a small startup or a large corporation, our platform scales effortlessly to meet your growing needs.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-red-600 text-2xl">
                {/* Icon */}
                <i className="fas fa-thumbs-up"></i>
              </div>
              <div>
                <h3 className="font-bold">Enhanced Candidate Experience</h3>
                <p>We prioritize a smooth and engaging testing experience for candidates, helping you attract top talent.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
