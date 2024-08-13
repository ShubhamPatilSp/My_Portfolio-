"use client";

import React from "react";
import { BackgroundBeams } from "../componets/ui/background_beams";

function MusicSchoolContactUs() {
  const name = "Shubham Patil";
  const phoneNumber = "8421518624";
  const email = "xshuubhampatil@gmail.com";

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      {/* BackgroundBeams start immediately */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0 animate-fadeIn" />

      {/* Content with higher z-index */}
      <div className="max-w-3xl mx-auto p-10 relative z-10 bg-white dark:bg-gray-900 shadow-lg rounded-lg border-t-4 border-purple-500 dark:border-indigo-500">
        {/* Heading */}
        <h1 className="text-5xl md:text-8xl text-center font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 dark:from-indigo-400 dark:to-purple-500">
          Contact Us
        </h1>

        {/* Introductory Text */}
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-xl text-center leading-relaxed">
          {`With a passion for programming and a solid BCA background, I stand out as a candidate ready to make a significant impact on your team. My enthusiasm and dedication are exactly what you're looking for.`}
        </p>

        {/* Contact Information */}
        <div className="space-y-6 mt-10 text-lg text-center">
          <div className="p-6 bg-purple-100 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-2xl font-semibold text-purple-700 dark:text-indigo-400">Name</p>
            <p className="text-gray-800 dark:text-gray-200">{name}</p>
          </div>

          <div className="p-6 bg-purple-100 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-2xl font-semibold text-purple-700 dark:text-indigo-400">Phone Number</p>
            <p className="text-gray-800 dark:text-gray-200">{phoneNumber}</p>
          </div>

          <div className="p-6 bg-purple-100 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-2xl font-semibold text-purple-700 dark:text-indigo-400">Email</p>
            <p className="text-gray-800 dark:text-gray-200">{email}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2024 Shubham Patil. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;
