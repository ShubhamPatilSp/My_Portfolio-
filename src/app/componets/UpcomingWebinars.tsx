'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "I Love the programming",
      description:
        "You write the code in sitting  in over room it's so peaceful",
      isFeatured: true,
    },
    {
      title: "The love about computers",
      description:
        "The love with computers are the best love I ever found in the world",
      isFeatured: true,
    },
    {
      title: "The future technology",
      description:
        "The future technology are so so fascinate me",
      isFeatured: true,
    },
    {
      title: "Projects",
      description:
        "Projects like the think you built with your mind and see to actual reality are the most happening think",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Solveing the problem",
      description:
        "Solve the people problem with your code and that is great think for me  ",
      isFeatured: true,
    },
    {
      title: "Helping hand",
      description:
        "Use your telent for helping the people not for only money",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-wxl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          THIS IS WRITTEN BY ME, NOT BY AI.
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          MY THOUGHTS
          </p>
        </div>
        <div className="mt-10">
            <HoverEffect 
            items={featuredWebinars .map((webinar =>(
                {
                    title: webinar.title,
                    description: webinar.description,
                    link: '/',
                    isFeatured: webinar.isFeatured,
  
                }
            )))}
            />
        </div>
        {/* <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>{" "} */}
      </div>
    </div>
  );
}
export default UpcomingWebinars;
