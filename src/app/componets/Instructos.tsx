'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'harkirat singh',
      designation: 'Teacher',
      image:
        '/courses/harkirat singh.jpg',
    },
    {
      id: 2,
      name: 'Hitesh Choudhary',
      designation: 'Teacher',
      image:
        '/courses/hitesh sir.png',
    },
    {
      id: 3,
      name: 'shradha khapra',
      designation: 'Teacher',
      image:
        '/courses/shradha khapra.jpg',
    },
    {
      id: 4,
      name: 'Anurag sir',
      designation: 'Teacher',
      image:
        '/courses/Anurag sir.png',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet my Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">This is the best teacher I have ever seen.</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div> 
        </WavyBackground>
    </div>
  )
}

export default Instructors
