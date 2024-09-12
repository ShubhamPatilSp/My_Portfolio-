import React from "react";

const skills = [
  "Next.js",
  "React.js",
  "HTML",
  "JavaScript",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "Java",
  "VSCode",
  "GitHub",
  "Node.js",
  "Express.js",
];

const SkillsSection = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Skills</h1>

      <div style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.skillCard}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    padding: "20px",
    maxWidth: "900px",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    margin: "40px 0 20px",
    color: "#333", // Dark gray for a professional look
  },
  skillsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  skillCard: {
    backgroundColor: "#333", // Dark background for the card
    border: "1px solid #444",
    borderRadius: "8px",
    padding: "20px",
    fontSize: "18px",
    color: "#ffffff", // White text for better contrast
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    transition: "background-color 0.3s, color 0.3s", // Smooth transition for hover effect
    cursor: "pointer", // Pointer cursor on hover
  },
};

export default SkillsSection;
