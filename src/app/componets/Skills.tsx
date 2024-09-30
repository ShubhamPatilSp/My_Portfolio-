import React from 'react';

const skills = {
    "Front-end Technologies": [
        "HTML",
        "CSS",
        "Tailwind",
        "Bootstrap",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "EJS",
    ],
    "Back-end Technologies": [
        "Node.js",
        "Express.js",
        "Mongoose",
        "Redis",
        "Kafka",
        "Postgresql",
        "Postgresql",
        "Passport.js",
        "Express-Session",
        "Cloudinary",
    ],

    "Devops": [
        "AWS",
        "Docker ",
        "Kubernetes ",
        "CI/CD ",
    ]
};

const SkillsSection = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold text-bg-white-800 mb-8 text-center">Skills</h1>
            <div className="grid gap-8 md:grid-cols-2">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">{category}</h2>
                        <div className="flex flex-wrap gap-2">
                            {skillList.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full transition-colors duration-300 hover:bg-blue-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
