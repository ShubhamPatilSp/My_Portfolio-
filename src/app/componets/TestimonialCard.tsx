"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const musicSchoolTestimonials = [
  {
    quote:
      'Code is like humor. When you have to explain it, it’s bad.',
    name: 'Cory House',
    title: 'The Elegance of Code',
  },
  {
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    name: 'Patrick McKenzie',
    title: 'The Journey of Mastery',
  },
  {
    quote:
      "A computer is like a violin. You can imagine a novice trying to make sounds with a violin for the first time. That's like the relationship between a user and their computer.",
    name: 'Walter O\'Brien',
    title: 'The Symphony of Computing',
  },
  {
    quote:
      'Good code is its own best documentation. As you\'re about to add a comment, ask yourself, \'How can I improve the code so that this comment isn\'t needed?\'',
    name: 'Steve McConnell',
    title: 'Code as a Communicator',
  },
  {
    quote:
      'The most important property of a program is whether it accomplishes the intention of its user.',
    name: 'C.A.R. Hoare',
    title: 'User-Centric Programming',
  },
];

function MusicSchoolTestTestimonial(){
    return(
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
             <h2 className="text-3xl font-bold text-center mb-8 z-10"> Voices of Success</h2>
             <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                <InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="right"
        speed="slow"
      />
                </div>
             </div>
        </div>
    )
}

export default MusicSchoolTestTestimonial;