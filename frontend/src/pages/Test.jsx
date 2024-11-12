import React from 'react';

function ExamPage() {
  return (
    <div className="bg-gray-100 p-4 min-h-screen  mix-h-screen flex flex-col items-center">
     
      {/* Header */}
      <div className="w-full bg-white shadow-md p-4 mb-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Candidate Name: [Your Name]</h2>
          <p className="text-sm">Exam Name: exam name | Date 7th Jan 2024 Shift 1</p>
        </div>
        <div className="text-right">
          <p className="text-blue-600 font-bold text-lg">Remaining Time: 02:59:34</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full max-w-8xl flex-1">
        {/* Question Section */}
        <div className="flex-1 bg-white shadow-md p-6 mr-4   flex flex-col justify-between h-[600px] min-h-[400px] w-[70%]">

          <div>
            <h3 className="text-4xl font-semibold mt-10">Question 1:</h3>
            <p className="mb-6 text-3xl mt-5">
              A LCR circuit behaves like a damped harmonic oscillator. Comparing it with a physical spring-mass damped
              oscillator having damping constant ‘b’, the correct equivalence would be:
            </p>
            {/* Options */}
            <ul className="space-y-2">
              <li className="flex items-center text-3xl">
                <input type="radio" name="option" id="option1" className="mr-2" />
                <label htmlFor="option1">1. L ↔ m, C ↔ k, R ↔ b</label>
              </li>
              <li className="flex items-center text-3xl">
                <input type="radio" name="option" id="option2" className="mr-2" />
                <label htmlFor="option2">2. Option 2 text...</label>
              </li>
              <li className="flex items-center text-3xl">
                <input type="radio" name="option" id="option3" className="mr-2" />
                <label htmlFor="option3">3. Option 3 text...</label>
              </li>
              <li className="flex items-center text-3xl">
                <input type="radio" name="option" id="option4" className="mr-2" />
                <label htmlFor="option4">4. Option 4 text...</label>
              </li>
            </ul>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-evenly mt-10">
            <button className="px-8 py-4 bg-green-600 text-white rounded-md text-3xl">Save & Next</button>
            <button className="px-8 py-4 bg-gray-300 rounded-md text-3xl">Clear</button>
            <button className="px-8 py-4 bg-yellow-500 text-white rounded-md text-3xl">Save & Mark for Review</button>
            <button className="px-8 py-4 bg-blue-500 text-white rounded-md text-3xl">Next &gt;&gt;</button>
          </div>
        </div>

        {/* Side Panel */}
        <div className="w-1/4 bg-white shadow-md p-4 h-[600px]">
          {/* Timer */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Timer</h4>
            <p className="text-2xl font-bold text-red-600">1:05:55</p>
          </div>

          {/* Question Palette */}
          <div className="grid grid-cols-5 gap-2">
            {[...Array(30)].map((_, i) => (
              <button
                key={i}
                className={`p-2 text-center rounded-md ${
                  i === 0
                    ? 'bg-red-500 text-white'
                    : i < 9
                    ? 'bg-green-500 text-white'
                    : i < 12
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-black'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Legend:</h4>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 inline-block mr-2 rounded"></span> Answered
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-red-500 inline-block mr-2 rounded"></span> Not Answered
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-orange-500 inline-block mr-2 rounded"></span> Marked for Review
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-gray-200 inline-block mr-2 rounded"></span> Not Visited
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamPage;
