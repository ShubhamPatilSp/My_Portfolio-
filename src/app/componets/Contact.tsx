"use client";

import React from "react";
import { BackgroundBeams } from "../componets/ui/background_beams";
import { Github, Linkedin, X } from "lucide-react";
import { Button } from "../componets/ui/moving-border";

function Contact() {
    const name = "Shubham Patil";
    const phoneNumber = "+91 8421518624";
    const email = "xshuubhampatil@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/shubham-patil-8494982b0";
    const githubUrl = "https://github.com/ShubhamPatilSp";
    const twitterUrl = "https://x.com/x_shuubhamm";

    return (
        <div className="min-h-screen bg-black py-12 pt-36 relative mt-[-70px]">
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0 animate-fadeIn" />
            <div className="max-w-3xl mx-auto p-10 relative z-10 bg-black shadow-lg rounded-lg border-t-4 border-purple-500">
                <h1 className="text-5xl md:text-8xl text-center font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">
                    Contact
                </h1>
                <div className="space-y-6 mt-10 text-lg text-center">
                    <div className="p-6 bg-gray-900 rounded-lg shadow-md">
                        <p className="text-2xl font-semibold text-purple-400">Name</p>
                        <p className="text-white">{name}</p>
                    </div>
                    <div className="p-6 bg-gray-900 rounded-lg shadow-md">
                        <p className="text-2xl font-semibold text-purple-400">Phone Number</p>
                        <p className="text-white">{phoneNumber}</p>
                    </div>
                    <div className="p-6 bg-gray-900 rounded-lg shadow-md">
                        <p className="text-2xl font-semibold text-purple-400">Email</p>
                        <a href={`mailto:${email}`} className="text-blue-400 hover:underline">
                            {email}
                        </a>
                    </div>
                </div>
                <div className="mt-10 flex justify-center space-x-4">
                    <Button asChild variant="outline">
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5 mr-2" />
                            LinkedIn
                        </a>
                    </Button>
                    <Button asChild variant="outline">
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 mr-2" />
                            GitHub
                        </a>
                    </Button>
                    <Button asChild variant="outline">
                        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                            <X className="w-5 h-5 mr-2" />
                            Twitter
                        </a>
                    </Button>
                </div>
                <div className="text-center mt-16">
                    <p className="text-gray-500 text-sm">
                        {/* Additional content or message here if needed */}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
