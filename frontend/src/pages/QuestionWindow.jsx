import React, { useState } from "react";

function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const isCorrectAnswer = selectedAnswer === "D";

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 py-4">
    <div className="bg-red-200 min-h-screen flex items-center justify-center">
<div className="bg-white rounded-lg shadow-lg max-w-[800px] w-full p-6 h-[668px]">
        <h1 className="text-2xl font-bold mb-4">UI UX Design Quiz</h1>
        <p className="mb-6">
          What is the meaning of UI UX Design?
        </p>
        <ul className="list-disc ml-6">
          <li
            className={`cursor-pointer rounded-md px-4 py-2  ${
              selectedAnswer === "A" &&
              "bg-blue-100 border border-blue-300 text-blue-700"
            }`}
            onClick={() => handleAnswerChange("A")}
          >
            User Interfoce and User Experience
          </li>
          <li
            className={`cursor-pointer rounded-md px-4 py-2  ${
              selectedAnswer === "B" &&
              "bg-blue-100 border border-blue-300 text-blue-700"
            }`}
            onClick={() => handleAnswerChange("B")}
          >
            User Introface and User Experience
          </li>
          <li
            className={`cursor-pointer rounded-md px-4 py-2  ${
              selectedAnswer === "C" &&
              "bg-blue-100 border border-blue-300 text-blue-700"
            }`}
            onClick={() => handleAnswerChange("C")}
          >
            User Interfice and Using Experience
          </li>
          <li
            className={`cursor-pointer rounded-md px-4 py-2  ${
              selectedAnswer === "D" &&
              " bg-blue-100 border border-blue-300 text-blue-700"
            }`}
            onClick={() => handleAnswerChange("D")}
          >
            User Interface and User Experience
          </li>
        </ul>
        <button
          className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {showResult && (
          <div className="mt-4">
            {isCorrectAnswer ? (
              <p className="text-green-600">Correct Answer!</p>
            ) : (
              <p className="text-red-600">Wrong Answer. Try Again!</p>
            )}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Quiz;