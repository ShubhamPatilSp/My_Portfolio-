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
        <div className="bg-black text-gray-300 min-h-screen p-4 md:p-8 font-sans">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-white mb-6 text-center">Resume</h1>
                <div className="bg-gray-900 shadow-2xl rounded-lg overflow-hidden border border-gray-800">
                    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-6 md:p-10">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-2">Shubham Patil</h1>
                                <p className="text-lg mb-4">Freelancer</p>
                            </div>
                            <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                                {[
                                    { name: "Email", link: "mailto:xshuubhampatil@gmail.com" },
                                    { name: "Phone", link: "tel:+918421518624" },
                                    { name: "LinkedIn", link: "#" },
                                    { name: "GitHub", link: "#" },
                                    { name: "Portfolio", link: "#" }
                                ].map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-2 py-1 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition duration-300"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </header>

                    <main className="p-6 md:p-10">
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Projects</h2>
                            {isClient && (
                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "SERP Live",
                                            description: "Web app for location-based searches with real-time filtering",
                                            details: [
                                                "Real-time search functionality",
                                                "Location suggestions",
                                                "Responsive UI"
                                            ],
                                            technologies: [
                                                "Next.js", "Tailwind CSS", "TypeScript", 
                                                "SerpAPI", "Axios", "Vercel"
                                            ]
                                        },
                                        {
                                            title: "AI Chat Assistant",
                                            description: "Real-time chat app powered by Google's Gemini AI",
                                            details: [
                                                "Real-time chat",
                                                "Clean session management",
                                                "Responsive design"
                                            ],
                                            technologies: [
                                                "Next.js 14", "TypeScript", "Tailwind CSS", 
                                                "Google AI", "LibSQL", "React Hooks"
                                            ]
                                        },
                                        {
                                            title: "AutoDeploy Pipeline",
                                            description: "Automation pipeline for repository cloning and deployment",
                                            details: [
                                                "Repository cloning",
                                                "Automated build process",
                                                "S3 Integration",
                                                "Redis logging"
                                            ],
                                            technologies: [
                                                "Node.js", "AWS SDK", "Redis", "Git", 
                                                "npm", "TypeScript", "Docker"
                                            ]
                                        }
                                    ].map((project, index) => (
                                        <ProjectCard 
                                            key={index} 
                                            title={project.title} 
                                            description={project.description}
                                            details={project.details}
                                            technologies={project.technologies}
                                        />
                                    ))}
                                </div>
                            )}
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Skills</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <SkillCategory
                                    title="Programming"
                                    skills={["JavaScript", "TypeScript", "Python", "Node.js", "React", "Next.js"]}
                                />
                                <SkillCategory
                                    title="DevOps"
                                    skills={["Docker", "AWS", "Kubernetes", "CI/CD"]}
                                />
                                <SkillCategory
                                    title="Other Skills"
                                    skills={["Monorepos", "OpenAPI", "Message Queues", "Testing"]}
                                />
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Education</h2>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Application</h3>
                                <p className="text-gray-300">Kavayitri Bahinabai Chaudhari North Maharashtra University</p>
                                <p className="text-gray-400 text-sm">July 2019 – July 2023 | Amalner, India</p>
                            </div>
                        </section>
                    </main>
                </div>
                <div className="flex justify-center mt-10 mb-10">
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
        </div>
    );
};

const ProjectCard = ({ title, description, details, technologies }) => (
    <MotionDiv
        className="p-5 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-750 transition duration-300"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="mb-3 text-gray-300 text-sm">{description}</p>
        <ul className="mb-3 list-disc list-inside text-gray-400 text-xs">
            {details.map((detail, index) => (
                <li key={index} className="mb-1">{detail}</li>
            ))}
        </ul>
        <div className="flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
                <span
                    key={index}
                    className="px-2 py-1 bg-indigo-900 text-white rounded-full text-xs"
                >
                    {tech}
                </span>
            ))}
        </div>
    </MotionDiv>
);

const SkillCategory = ({ title, skills }) => (
    <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2 text-white">{title}</h3>
        <div className="flex flex-wrap gap-1">
            {skills.map((skill, index) => (
                <span
                    key={index}
                    className="px-2 py-1 bg-indigo-900 text-white rounded-full text-xs"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export default Resume;
