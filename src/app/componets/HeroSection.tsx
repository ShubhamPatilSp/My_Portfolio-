"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { Spotlight } from "./ui/Spotlight";

function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="block bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
            Shubham Patil
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl"
        >
          Innovative Full Stack Developer specializing in JavaScript, TypeScript, Next.js, and MERN stack.
          Experienced in Web3, Ethereum, and Solidity. Passionate open-source contributor crafting seamless digital experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          {/* <Link href="/projects" className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all duration-200">
            View Projects
          </Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-emerald-400 transition-all duration-200">
            Contact Me <span aria-hidden="true">→</span>
          </Link> */}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;