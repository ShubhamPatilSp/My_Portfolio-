'use client';

import React from 'react';
import { BackgroundBeams } from '@/app/componets/ui/background_beams';

function MusicSchoolContactUs() {
  const name = "Shubham Patil";
  const phoneNumber = "8421518624";
  const email = "xshuubhampatil@gmail.com";

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      {/* Ensure the container is relative */}
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      {/* Content with higher z-index */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
        I am passion for programming and my BCA background make you a standout candidate. Your enthusiasm and dedication are exactly what we're looking for. I'm confident you'll make a significant impact on our team.
        </p>
        <div className="space-y-4 mt-4 text-white text-center">
          <p>Name: {name}</p>
          <p>Phone Number: {phoneNumber}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;
