"use client";
import Link from "next/link";
import courseData from "../data/music.courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { useState } from "react";

interface Course {
  id: number;
  title: String;
  slug: String;
  description: String;
  price: number;
  instructor: String;
  isFeatured: boolean;
  image: any;
}
function FeaturedCourses() {
  const [firstImageRendered, setFirstImageRendered] = useState(false);
  const FeaturedCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            PROJECT BUILDING
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            PROJECTS
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course, index: number) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <Image
                  src={course.image}
                  alt="jordans"
                  height="400"
                  width="400"
                  className={`object-contain ${index === 0 && !firstImageRendered ? "" : "blur-md"
                    }`}
                  onLoadingComplete={() => setFirstImageRendered(true)}
                />
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <div className="mt-20 text-center">
                    <Link
                      href={"/courses"}
                      className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                    >
                      View PROJECTS
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View ALL PROJECTS
        </Link>
      </div>
    </div>
  );
}
export default FeaturedCourses;
