// Import necessary modules
import React from "react";
import { MacbookScroll } from "../componets/ui/macbook-scroll"; 
import Link from "next/link";

// Define the props interface for MacbookScrollDemo component
interface MacbookScrollDemoProps {
  className?: string;
}

// Define the MacbookScrollDemo component with proper prop typings
const MacbookScrollDemo: React.FC<MacbookScrollDemoProps> = ({ className }) => {
  return (
    <div className={`overflow-hidden dark:bg-[#0B0B0F] bg-white w-full ${className}`}>
      <MacbookScroll
        title={
          <span>
            Resume <br />
          </span>
        }
        badge={
          <Link href="https://peerlist.io/manuarora">
            {/* Adjust Badge component according to your actual implementation */}
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src="/courses/shubham.png" // Removed curly braces around the image path
        showGradient={false}
      />
      <div className="flex justify-center mt-4">
        <a
          href="/courses/cv/Shubham Patil Resume 7.pdf" // Update this path to the actual path of your PDF
          download
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

// Define the Badge component
const Badge: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Add your SVG paths here */}
    </svg>
  );
};

// Export the MacbookScrollDemo component
export default MacbookScrollDemo;
