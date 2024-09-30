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
                    <p className="text-xl mb-4">Full Stack Developer</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        {["xshuubhampatil@gmail.com", "+91 8421518624", "LinkedIn", "GitHub", "Portfolio"].map((item, index) => (
                            <a key={index} href="#" className="px-3 py-1 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition duration-300">
                                {item}
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
                                    title="AutoDeploy Pipeline"
                                    description="Developed a comprehensive automation pipeline to clone repositories, build projects, and upload outputs to AWS S3 using Node.js and Redis for logging."
                                    details={[
                                        "Repository Cloning: Utilized child process to clone Git repositories and execute build scripts.",
                                        "Build Process: Managed project builds by reading package.json, executing npm commands, and handling stdout/stderr logging.",
                                        "S3 Integration: Employed the AWS SDK to upload built files to a specified S3 bucket.",
                                        "Logging Mechanism: Integrated Redis for real-time logging of the pipeline process.",
                                        "Environment Configuration: Utilized environment variables for secure configuration.",
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
                                        "S3 Integration: Utilizes the AWS SDK to download original videos from S3 and upload transcoded versions.",
                                        "FFmpeg Utilization: Implements fluent-ffmpeg to transcode videos into 360p, 480p, and 720p resolutions.",
                                        "Environment Management: Loads environment variables for configuration.",
                                        "Asynchronous Processing: Employs Promises for handling multiple transcoding operations concurrently.",
                                        "File Handling: Utilizes Node.js's fs module for file operations.",
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
                                    description="A refined travel platform inspired by Airbnb, offering personalized stays."
                                    details={[
                                        "Dynamic User Authentication: Integrates Passport.js for seamless user authentication and session management.",
                                        "Enhanced Data Handling: Utilizes Express.js and Joi for dynamic routing and robust data validation.",
                                        "Image Management: Integrates Cloudinary for efficient image storage and management.",
                                        "User Experience: Features responsive design with Bootstrap and EJS.",
                                        "Comprehensive Middleware: Implements middleware for session management, error handling, and validation.",
                                    ]}
                                    technologies={[
                                        "MERN Stack",
                                        "EJS",
                                        "Passport.js",
                                        "Express-Session",
                                        "Joi",
                                        "Cloudinary",
                                        "Bootstrap",
                                    ]}
                                />
                                <ProjectCard
                                    title="Portfolio"
                                    description="A modern portfolio website built with Next.js and Tailwind CSS, showcasing projects and skills with a visually striking design."
                                    details={[
                                        "Design Features: Incorporates animated tooltips, gradient backgrounds, and hover effects.",
                                        "Interactive Elements: Includes infinite scrolling, custom navigation menus, spotlight effects, and sticky scroll reveals.",
                                        "Showcase Sections: Highlights featured projects, includes a hero section, team member section, and custom footer.",
                                        "Custom Components: Features testimonial cards and a section detailing reasons to choose the services offered.",
                                    ]}
                                    technologies={["Next.js", "React.js", "Tailwind CSS", "JavaScript", "TypeScript"]}
                                />
                            </>
                        )}
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 text-white">Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                                    "Postgresql",
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
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold mb-6 text-white">Education</h2>
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-2xl font-medium text-white mb-2">
                                Bachelor of Computer Application
                            </h3>
                            <p className="text-lg mb-1">Pratap College, Amalner, India</p>
                            <p className="text-gray-400 mb-4">July 2020 to July 2023</p>
                            <p>
                                Relevant Coursework: Database management, web development,
                                computer networks, software engineering.
                            </p>
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
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export default Resume;
