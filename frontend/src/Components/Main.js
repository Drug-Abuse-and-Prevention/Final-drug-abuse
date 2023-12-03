import React from 'react';
import '../Styles/StyleMain.css';
import { Link } from "react-router-dom";
const MainSection = () => {
  return (
    <main className="flex-col items-center justify-center min-h-screen p-8 bg-gray-400 bg">
      <div className=" mb-8 text-center">
        <h3 className="text-yellow-700 text-2xl font-bold mb-2">Drug Abuse Prevention</h3>
        <div className='font-bold text-xl ml-40 mr-40 text-center mb-8 text-yellow-700'>
          <p>
            Welcome to our Drug Abuse Prevention website. We are dedicated to spreading awareness about the dangers of drug abuse and providing resources to help prevent it.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="p-6 rounded-lg shadow-lg bg-gray-100">
          <h2 className="text-gray-500 text-xl font-semibold mb-4">Recognizing Drug Abuse</h2>
          <p className="text-gray-500">
            Learn about the signs and symptoms of drug abuse. Understanding the early indicators can help in prevention and intervention.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-gray-100">
          <h2 className="text-gray-500 text-xl font-semibold mb-4">Prevention Strategies</h2>
          <p className="text-gray-500">
            Discover effective prevention strategies, educational programs, and community initiatives that can help prevent drug abuse among individuals and communities.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-gray-100">
          <h2 className="text-gray-500 text-xl font-semibold mb-4">Report Us (Anonymously)!</h2>
          <p className="text-gray-500">
          Reporting drug abuse is a powerful stand against the destruction of lives and dreams. Be the voice that speaks out, the hand that reaches out, and the heart that cares.
          </p>
          <p className='text-xl font-bold text-gray-500'>Don't worry about your identity!!</p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-gray-100">
          <h2 className="text-gray-500 text-xl font-semibold mb-4">Request to Every One !</h2>
          <p className="text-gray-500">
          We urge all students to be aware of the risks associated with drug abuse.Prevention starts with education, support, and fostering a sense of community. Don't let drugs hinder your college experience; instead, be proactive, make responsible choices, and prioritize your health and future.     </p>
        </div>
        <div className=' flex flex-col items-center justify-center mt-8 '>
          <Link to="/reportform">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Report us! Save SomeOne!
              </button>
          </Link>
       </div>
      
      </div>
    </main>
  );
};

export default MainSection;

  