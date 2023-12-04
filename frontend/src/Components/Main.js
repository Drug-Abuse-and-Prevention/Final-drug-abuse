import React from "react";
import "../Styles/StyleMain.css";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <main className="flex-col items-center justify-center min-h-screen p-8 bg-gray-400 bg">
      <div className="mb-8 text-center">
        <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Drug Abuse Reporting and Prevention
        </h3>
        {/* <div className="font-bold text-xl mx-4 mb-8 text-center text-white">
          <p>
            Welcome to our Drug Abuse Prevention website. We are dedicated to
            spreading awareness about the dangers of drug abuse and providing
            resources to help prevent it.
          </p>
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-lg shadow-lg bg-gray-100">
          <h2 className="text-gray-500 text-xl font-semibold mb-4">
            Recognizing Drug Abuse
          </h2>
          <p className="text-gray-500">
            Learn about the signs and symptoms of drug abuse. Understanding the
            early indicators can help in prevention and intervention.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-gray-100">
          <h2 className="text-gray-500 text-xl font-semibold mb-4">
            Prevention Strategies
          </h2>
          <p className="text-gray-500">
            Discover effective prevention strategies, educational programs, and
            community initiatives that can help prevent drug abuse among
            individuals and communities.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-gray-100">
          <h2 className="text-gray-500 text-xl font-semibold mb-4">
            Report Us (Anonymously)!
          </h2>
          <p className="text-gray-500">
            Reporting drug abuse is a powerful stand against the destruction of
            lives and dreams. Be the voice that speaks out, the hand that
            reaches out, and the heart that cares.
          </p>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-gray-100">
          <h2 className="text-gray-500 text-xl font-semibold mb-4">
            Share your stories/Ask for help Anonymously
          </h2>
          <p className="text-gray-500">
            Breaking Chains, a safe space where you can share your stories and
            seek support anonymously. If you're struggling with drug abuse or
            addiction, you can ask for help without revealing your identity.
            Share your journey, inspire others.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <Link to="/reportform">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 mb-4 text-xl">
            Report Anonymously
          </button>
        </Link>
        <Link to="/helpdesk">
          <button className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 mb-4  text-xl">
            Share your story/Ask for help
          </button>
        </Link>
        <Link to="/help">
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 text-xl">
            Need Counselling? Click here
          </button>
        </Link>
      </div>
    </main>
  );
};

export default MainSection;
