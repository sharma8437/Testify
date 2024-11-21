import React, { useState } from 'react';

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    
    <div className="border-b border-gray-200 overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 text-left text-gray-800 hover:text-red-600 focus:outline-none"
        onClick={onClick}
      >
        <span className="font-medium">{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="p-4 text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

function HelpAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { question: 'How do I reset my password?', answer: 'To reset your password, go to the login page and click "Forgot Password".' },
    { question: 'How can I contact support?', answer: 'You can reach our support team via the contact form or by calling 1-800-555-1234.' },
    { question: 'Where can I find my order details?', answer: 'Order details are available in your account under "Order History".' },
    { question: 'How do I update my profile?', answer: 'To update your profile, go to the account settings page and make the necessary changes.' },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 py-4'>
    <div className="w-full px-4 md:px-8 lg:px-16 my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Help & FAQs</h2>
      <div className="bg-white border rounded-lg shadow-lg w-full">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
     </div>
  );
}

export default HelpAccordion;
