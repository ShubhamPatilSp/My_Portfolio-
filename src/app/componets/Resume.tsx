"use client"; // Add this line at the top

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
                    <p className="text-xl mb-4">Full Stack Web3 Developer</p>
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
                                    title="Traveller"
                                    description="A refined travel platform inspired by Airbnb, offering personalized stays."
                                    details={[
                                        "Dynamic User Authentication with Passport.js and Express-Session.",
                                        "Enhanced Data Handling with Express.js and Joi.",
                                        "Image Management using Cloudinary.",
                                        "Responsive Design with Bootstrap and EJS.",
                                        "Comprehensive Middleware for session management, error handling, and validation.",
                                    ]}
                                    technologies={[
                                        "MERN Stack",
                                        "Passport.js",
                                        "Express-Session",
                                        "Joi",
                                        "Cloudinary",
                                        "Bootstrap",
                                    ]}
                                />
                                <ProjectCard
                                    title="Portfolio"
                                    description="A personal portfolio website showcasing projects and skills with a modern, visually striking design."
                                    details={[
                                        "Futuristic Design Elements with animated tooltips, gradient backgrounds, and hover effects.",
                                        "Advanced UI Components including infinite scrolling and customized navigation.",
                                        "Interactive Features like spotlight effects, sticky scroll reveals, and wavy backgrounds.",
                                    ]}
                                    technologies={["Next.js", "Tailwind CSS", "Animated UI Components"]}
                                />
                                <ProjectCard
                                    title="VirtualR"
                                    description="A sleek, modern page designed for creating VR environments with user-friendly tools."
                                    details={[
                                        "User-Friendly Design with a drag-and-drop interface.",
                                        "Cross-Platform Functionality for mobile devices, desktops, and VR headsets.",
                                        "Real-Time Updates & Collaboration features.",
                                        "Analytics Integration for tracking user interactions and performance.",
                                        "Flexible Pricing Plans to meet different needs.",
                                    ]}
                                    technologies={["React", "Tailwind CSS", "VR Technologies"]}
                                />
                            </>
                        )}
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 text-white">Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <SkillCategory
                                title="Blockchain & Web3"
                                skills={[
                                    "Solidity",
                                    "Ethereum",
                                    "Smart Contracts",
                                    "Web3.js",
                                    "Ethers.js",
                                    "dApps",
                                    "OpenZeppelin Contracts",
                                    "Gas Optimization",
                                ]}
                            />
                            <SkillCategory
                                title="Back-end Technologies"
                                skills={[
                                    "Node.js",
                                    "Express.js",
                                    "Mongoose",
                                    "MongoDB",
                                    "JWT",
                                    "Passport.js",
                                    "Express-Session",
                                    "Cloudinary",
                                ]}
                            />
                            <SkillCategory
                                title="Front-end Technologies"
                                skills={[
                                    "HTML",
                                    "CSS",
                                    "Tailwind",
                                    "Bootstrap",
                                    "JavaScript",
                                    "TypeScript",
                                    "React.js",
                                    "Next.js",
                                    "EJS",
                                ]}
                            />
                            <SkillCategory
                                title="Additional Technologies"
                                skills={[
                                    "Java",
                                    "GitHub",
                                    "MetaMask",
                                    "Truffle",
                                    "Hardhat",
                                    "Solidity Documentation",
                                    "OpenZeppelin Documentation",
                                    "Ethereum Whitepaper",
                                    "Mastering Blockchain",
                                    "Mastering Ethereum",
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
