import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col 
    items-center justify-center relative overflow-hidden
     mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="py-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Shubham Patil
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
       Full Stack Developer skilled in JavaScript, TypeScript, Next.js, and the MERN stack, with experience in Web3, Ethereum, Solidity, and open-source contributions.
        </p>
        <div className="mt-4">
          <Link href={"/skill"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              MY SKILLS
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
