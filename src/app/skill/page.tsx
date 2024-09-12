// import React from "react";

// const skills = {
//   "Blockchain & Web3": [
//     "Solidity",
//     "Ethereum",
//     "Smart Contracts"
//   ],
//   "Full Stack Development": [
//     "Next.js",
//     "React.js",
//     "Node.js",
//     "Express.js",
//     "JavaScript",
//     "TypeScript"
//   ],
//   "Front-end Technologies": [
//     "HTML",
//     "CSS",
//     "Tailwind",
//     "Bootstrap"
//   ],
//   "Additional Technologies": [
//     "Java"
//   ]
// };

// const SkillsSection: React.FC = () => {
//   return (
// <<<<<<< HEAD
//     <div className="container mx-auto px-4 py-8 max-w-4xl">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Skills</h1>
//       <div className="grid gap-8 md:grid-cols-2">
//         {Object.entries(skills).map(([category, skillList]) => (
//           <div key={category} className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">{category}</h2>
//             <div className="flex flex-wrap gap-2">
//               {skillList.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full transition-colors duration-300 hover:bg-blue-200"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
// =======
//     <div style={styles.container}>
//               <h1 style={styles.title}>My Skills</h1>
//               <div style={styles.skillsContainer}>
//                 {skills.map((skill, index) => (
//                   <div key={index} style={styles.skillCard}>
//                     {skill}
// >>>>>>> b92fa9ef4ed658a32735bb155af24150bbe3c00f
//                   </div>
//                 ))}
//               </div>
//             </div>
//   );
// };

// <<<<<<< HEAD
//   export default SkillsSection;
// =======
// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     fontFamily: "Arial, sans-serif",
//     margin: "0 auto",
//     padding: "20px",
//     maxWidth: "900px",
//     textAlign: "center", // Type assertion to avoid the error
//   },
//   title: {
//     fontSize: "28px",
//     margin: "40px 0 20px",
//     color: "#333", // Dark gray for a professional look
//   },
//   skillsContainer: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
//     gap: "20px",
//     marginTop: "20px",
//   },
//   skillCard: {
//     backgroundColor: "#333", // Dark background for the card
//     border: "1px solid #444",
//     borderRadius: "8px",
//     padding: "20px",
//     fontSize: "18px",
//     color: "#ffffff", // White text for better contrast
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
//     transition: "background-color 0.3s, color 0.3s", // Smooth transition for hover effect
//     cursor: "pointer", // Pointer cursor on hover
//   },
// };

// export default SkillsSection;
// >>>>>>> b92fa9ef4ed658a32735bb155af24150bbe3c00f
