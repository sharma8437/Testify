//npm react-icon


import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-base-200 py-2 text-gray-800">
      {/* Social Media Icons at the Top Center */}
      <div className="flex justify-center mt-6">
        <a href="#" className="text-gray-800 hover:text-red-600 mx-8"><FaInstagram size={25} /></a>
        <a href="#" className="text-gray-800 hover:text-red-600 mx-8"><FaWhatsapp size={25} /></a>
        <a href="#" className="text-gray-800 hover:text-red-600 mx-8"><FaLinkedin size={25} /></a>
      </div>

      <div className="container mx-auto flex flex-wrap justify-between items-center mt-4">
        {/* Logo Section Vertically Centered */}
        <div className="w-full md:w-1/4 mb-2 md:mb-0 flex justify-center md:justify-start items-center">
          <div className="text-red-600 ml-12">
            <h1 className="text-4xl font-semibold">Testify</h1>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="w-full md:w-3/4 flex justify-around text-sm mt-2 md:mt-0">
          {/* Explore Section */}
          <div>
            <h3 className="font-bold mb-1">Explore</h3>
            <ul>
              <li className="mb-1"><Link to="/" className="hover:text-red-600">Home</Link></li>
              <li className="mb-1"><Link to="/service" className="hover:text-red-600">Services</Link></li>
              <li className="mb-1"><Link to="/About" className="hover:text-red-600">About us</Link></li>
              <li><Link to="/support" className="hover:text-red-600">Support</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-bold mb-1">Company</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:text-red-600">Terms & Conditions</a></li>
              <li className="mb-1"><a href="#" className="hover:text-red-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-600">Contact us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold mb-1">Get in touch</h3>
            <address className="not-italic text-sm">
              74 sector Mohali , <br />
              Punjab 160055 <br />
              <p className="mt-1">
                +91-8437152529 
                +91-8556989744 <br />
                +91-9023525785
                +91-9517189064 <br />
                <a href="mailto:info@Testify.in" className="hover:text-red-600">info@Testify.in</a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Footer Note at the Bottom Center */}
      <div className="mt-2 text-center text-sm">
        <p>© {new Date().getFullYear()} Testify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


