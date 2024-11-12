import React from 'react';
import time from "../assets/time.svg"
import user from "../assets/user.svg"
import time2 from "../assets/time2.svg"
import lock from "../assets/lock.svg"

const ChooseUs = () => {
  return (

    <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>

   
    <div className="p-8  text-gray-900 max-w-screen-2xl container mx-auto md:px-20 py-12">
      <h1 className="text-5xl font-bold mb-10 text-center text-red-600">Why Choose Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {[
          {
            images:time,
            title: 'Seamless Integration',
            description: 'Our platform seamlessly integrates with existing HR tools, ensuring a smooth and efficient workflow.'
          },
          {
            images:lock,
            title: 'Secure Live Video Recording',
            description: 'We offer secure, real-time video recording to monitor assessments and maintain the highest standards of integrity.'
          },
          {
            images:time2,
            title: 'Data-Driven Insights',
            description: 'Get detailed analytics and data-driven insights to make informed hiring decisions quickly and effectively.'
          },
          {
            images:user,
            title: 'User-Friendly Dashboard',
            description: 'Our intuitive dashboard is designed for ease of use, giving HR teams all the necessary tools at their fingertips.'
          },
          {
            images:time,
            title: 'Customizable Assessments',
            description: 'Create and customize assessments tailored to specific job roles and requirements, ensuring candidate suitability.'
          },
          {
            images:time,
            title: '24/7 Support',
            description: 'Our dedicated support team is available around the clock to assist you with any questions or issues.'
          }
        ].map((item, index) => (
          <div
            key={index}
            className="p-8 bg-white  hover:shadow-red-400 rounded-lg shadow-lg hover:shadow-sm hover:scale-105 transform transition duration-300 border border-gray-200"
          >
           <div className="flex items-center justify-center">
  <img src={item.images} alt="time" className="w-8 h-20" />
</div>
            <h2 className="text-2xl font-semibold mb-4 text-red-500 hover:text-blue-700 transition duration-300">
              {item.title}
            </h2>
            <p className="text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ChooseUs;
