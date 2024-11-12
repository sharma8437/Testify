import React from 'react';

function QuizDetails() {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
   
    >
      <div className="bg-white rounded-lg shadow-lg max-w-full w-full p-6 h-[1209px]">
        {/* Header */}
        <div className="flex items-center mb-4">
          <button className="text-gray-500 mr-2">
            {/* Back Icon */}
            ←
          </button>
          <h2 className="text-1xl font-semibold text-gray-800 " >Detail Quiz</h2>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-1">UI UX Design Quiz</h1>
        <p className="text-2xl text-gray-600 mb-4">GET 100 Points</p>

        {/* Quiz Info Section */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Brief explanation about this quiz
          </h3>
          <div className="flex items-center mb-3">
            <span className="material-icons text-2xl text-gray-700 mr-3">assignment</span>
            <p className='text-2xl'>10 Questions</p>
          </div>
          <div className="flex items-center mb-3">
            <span className="material-icons text-2xl text-gray-700 mr-3">access_time</span>
            <p className='text-2xl'>1 hour 15 min</p>
          </div>
          <div className="flex items-center mb-3">
            <span className="material-icons text-2xl text-gray-700 mr-3">star</span>
            <p className='text-2xl'>Win 10 stars</p>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Please read the text below carefully so you can understand it
          </h3>
          <ul className="list-disc list-inside text-2xl text-gray-700 space-y-2">
            <li>10 points awarded for a correct answer and no points for an incorrect answer</li>
            <li>Tap on options to select the correct answer</li>
            <li>Tap on the bookmark icon to save interesting questions</li>
            <li>Click submit if you are sure you want to complete all the quizzes</li>
          </ul>
        </div>

  

        {/* Terms and Conditions Section */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Terms & Conditions</h3>
          <p className="text-2xl text-gray-700">
            By taking the quiz, you accept the following terms and conditions:
          </p>
          <ul className="list-disc list-inside text-2xl text-gray-700 space-y-2 mt-2">
            <li>You must be at least 18 years old to participate.</li>
            <li>Only one submission per participant will be counted.</li>
            <li>Any misuse of the platform, such as cheating, will result in disqualification.</li>
            <li>Your results may be displayed on the leaderboard if applicable.</li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Contact Information</h3>
          <p className="text-2xl text-gray-700">
            For any queries, issues, or concerns, please reach out to us at:
          </p>
          <ul className="text-2xl text-gray-700 space-y-1 mt-2">
            <li>Email: support@quizplatform.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Quiz Avenue, Education City, Country</li>
          </ul>
        </div>

        {/* Start Quiz Button */}
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizDetails;
