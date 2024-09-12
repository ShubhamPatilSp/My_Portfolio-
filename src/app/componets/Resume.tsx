import React from "react";
import { Button } from "../componets/ui/moving-border";

const SimpleResumeViewer = () => {
    const googleDriveFileId = "1IaFTrec5QrgktmHxIVmtlooZz3Jga0Zx";
    const embedUrl = `https://drive.google.com/file/d/${googleDriveFileId}/preview`;

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">My Resume</h1>

            <div className="mb-6">
                <iframe
                    src={embedUrl}
                    width="100%"
                    height="800"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    className="rounded-lg shadow-lg"
                ></iframe>
            </div>

            <div className="flex justify-center">
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

export default SimpleResumeViewer;
