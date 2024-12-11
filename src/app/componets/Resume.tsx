"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Button } from "./ui/moving-border";

const MotionDiv = dynamic(
    () => import("framer-motion").then((mod) => mod.motion.div),
    { ssr: false }
);

const Resume = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="bg-black text-gray-300 min-h-screen p-8 font-sans">
            <h1 className="text-3xl font-bold text-bg-white-900 mb-8 text-center">Resume</h1>
            <div className="max-w-5xl mx-auto bg-gray-900 shadow-2xl rounded-lg overflow-hidden border border-gray-800">
                <header className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-10">
                    <h1 className="text-5xl font-bold mb-2">Shubham Patil</h1>
                    <p className="text-xl mb-4">Freelancer</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        {[
                            { name: "xshuubhampatil@gmail.com", link: "mailto:xshuubhampatil@gmail.com" },
                            { name: "+91 8421518624", link: "tel:+918421518624" },
                            { name: "LinkedIn", link: "#" },
                            { name: "GitHub", link: "#" },
                            { name: "Portfolio", link: "#" }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </header>

                <main className="p-10">
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 text-white">Projects</h2>
                        {isClient && (
                            <>
                                <ProjectCard
                                    title="SERP Live"
                                    description="Developed a web app for location-based searches with real-time filtering using Next.js and TypeScript."
                                    details={[
                                        "Real-time search functionality",
                                        "Location suggestions with auto-updating results",
                                        "Responsive and interactive user interface",
                                    ]}
                                    technologies={[
                                        "Next.js",
                                        "Tailwind CSS", 
                                        "TypeScript", 
                                        "SerpAPI", 
                                        "Axios", 
                                        "Vercel"
                                    ]}
                                />
                                <ProjectCard
                                    title="AI Chat Assistant"
                                    description="Built a real-time chat application powered by Google's Gemini AI, enabling instant AI interactions with a modern user interface."
                                    details={[
                                        "Real-time chat functionality",
                                        "Clean session management",
                                        "Responsive design",
                                        "Elegant error handling",
                                    ]}
                                    technologies={[
                                        "Next.js 14",
                                        "TypeScript", 
                                        "Tailwind CSS", 
                                        "Google Generative AI", 
                                        "LibSQL", 
                                        "React Hooks"
                                    ]}
                                />
                                <ProjectCard
                                    title="AutoDeploy Pipeline"
                                    description="Developed a comprehensive automation pipeline to clone repositories, build projects, and upload outputs to AWS S3 using Node.js and Redis for logging."
                                    details={[
                                        "Repository Cloning: Utilized child process to clone Git repositories and execute build scripts",
                                        "Build Process: Managed project builds by reading package.json, executing npm commands",
                                        "S3 Integration: Employed the AWS SDK to upload built files to a specified S3 bucket",
                                        "Logging Mechanism: Integrated Redis for real-time logging of the pipeline process",
                                        "Environment Configuration: Utilized environment variables for secure configuration",
                                    ]}
                                    technologies={[
                                        "Node.js",
                                        "AWS SDK",
                                        "Redis",
                                        "Git",
                                        "npm",
                                        "JavaScript",
                                        "TypeScript",
                                        "EJS",
                                        "Bash scripting",
                                        "Docker",
                                    ]}
                                />
                                <ProjectCard
                                    title="Video Transcoder"
                                    description="Automated video transcoding pipeline using AWS S3 and FFmpeg for multiple resolutions."
                                    details={[
                                        "S3 Integration: Utilizes the AWS SDK to download original videos from S3 and upload transcoded versions",
                                        "FFmpeg Utilization: Implements fluent-ffmpeg to transcode videos into 360p, 480p, and 720p resolutions",
                                        "Environment Management: Loads environment variables for configuration",
                                        "Asynchronous Processing: Employs Promises for handling multiple transcoding operations concurrently",
                                        "File Handling: Utilizes Node.js's fs module for file operations",
                                    ]}
                                    technologies={[
                                        "Node.js",
                                        "AWS SDK",
                                        "FFmpeg",
                                        "JavaScript",
                                        "TypeScript",
                                        "EJS",
                                        "Promises",
                                        "S3",
                                    ]}
                                />
                                <ProjectCard
                                    title="Traveller"
                                    description="A travel platform inspired by Airbnb, offering personalized stays with secure authentication and responsive design."
                                    details={[
                                        "User authentication using Passport.js and Express-Session",
                                        "Data validation with Joi",
                                        "Image management via Cloudinary",
                                        "Responsive and user-friendly design",
                                    ]}
                                    technologies={[
                                        "MERN Stack",
                                        "Passport.js", 
                                        "Joi", 
                                        "Cloudinary", 
                                        "Bootstrap"
                                    ]}
                                />
                                <ProjectCard
                                    title="Photography Studio"
                                    description="A sleek platform showcasing photography with immersive animations and an interactive user experience."
                                    details={[
                                        "Smooth scrolling implementation",
                                        "Responsive and interactive design",
                                        "Optimized image loading",
                                        "Engaging user interface",
                                    ]}
                                    technologies={[
                                        "Next.js", 
                                        "React", 
                                        "Tailwind CSS", 
                                        "Framer Motion", 
                                        "Lenis Scroll"
                                    ]}
                                />
                            </>
                        )}
                    </section>

                    <section className="mb-12">
  <h2 className="text-3xl font-semibold mb-6 text-white">Skills</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <SkillCategory
      title="Front-end Technologies"
      skills={[
        "Next.js",
        "React.js",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Tailwind",
        "Bootstrap",
      ]}
    />
    <SkillCategory
      title="Back-end Technologies"
      skills={[
        "Node.js",
        "Express.js",
        "Mongoose",
        "MongoDB",
        "Redis",
        "Kafka",
        "PostgreSQL",
        "Prisma",
      ]}
    />
    <SkillCategory
      title="DevOps"
      skills={[
        "Docker",
        "AWS",
        "Kubernetes",
        "CI/CD",
      ]}
    />
    <SkillCategory
      title="Other Skills"
      skills={[
        "Monorepos (Turborepo)",
        "OpenAPI",
        "Message Queues (Kafka, Redis)",
        "Testing (Node.js applications)",
        "Rate Limiting",
        "Authentication (NextAuth, Passport.js)",
      ]}
    />
  </div>
</section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 text-white">Education</h2>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Application</h3>
                            <p className="text-gray-300">Kavayitri Bahinabai Chaudhari North Maharashtra University</p>
                            <p className="text-gray-400">July 2019 – July 2023</p>
                            <p className="text-gray-400">Amalner, India</p>
                        </div>
                    </section>
                </main>
            </div>
            <div className="flex justify-center mt-7 mb-[40px]">
                <Button asChild>
                    <a
                        href="/courses/cv/Shubham Patil Resume 7.pdf"
                        download
                        className="inline-flex items-center px-4 py-2"
                    >
                        Download CV
                    </a>
                </Button>
            </div>
        </div>
    );
};

const ProjectCard = ({ title, description, details, technologies }) => (
    <MotionDiv
        className="mb-8 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-750 transition duration-300"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
        <p className="mb-4 text-gray-300">{description}</p>
        <ul className="mb-4 list-disc list-inside text-gray-400">
            {details.map((detail, index) => (
                <li key={index} className="mb-1">{detail}</li>
            ))}
        </ul>
        <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
                <span
                    key={index}
                    className="px-3 py-1 bg-indigo-900 text-white rounded-full text-sm"
                >
                    {tech}
                </span>
            ))}
        </div>
    </MotionDiv>
);

const SkillCategory = ({ title, skills }) => (
    <div className="mb-6">
        <h3 className="text-xl font-medium mb-3 text-white">{title}</h3>
        <ul className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <li
                    key={index}
                    className="px-3 py-1 bg-indigo-900 text-white rounded-full text-sm"
                >
                    {skill}
                </li>
            ))}
        </ul>
    </div>
);

export default Resume;

