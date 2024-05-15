"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "../componets/ui/tailwindcss-buttons";
import skillData from "@/app/data/skill.json";

function Page() {
  const copy = (button) => {
    const code = reactElementToJSXString(button.component);
    navigator.clipboard.writeText(code).then(() => {
      toast.success("Copied to clipboard!");
    });
  };

  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
    MY SKILLS
</h1>

      <div className="flex flex-wrap justify-center">
        <div className="pb-40 px-4 w-full">
          <Toaster position="top-center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full max-w-7xl mx-auto gap-10">
  {buttons.map((button, idx) => (
    <ButtonsCard key={idx} onClick={() => copy(button)}>
      {button.component}
    </ButtonsCard>
  ))}
</div>
        </div>
      </div>
    </div>
  );
}

export const buttons = [
  
  {
    name: "Unapologetic",
    description: "Unapologetic button with perfect corners",
    component: (
      <p className="px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
        <div className="absolute -bottom-2 -right-2 bg-yellow-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
        <span className="relative">#Javascript</span>
      </p>
    ),
  },
  // ... (rest of the button data)
{
    name: "Shimmer",
    description: "Shimmer button for your website",
    // showDot: false,
    component: (
      <p className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        #react.js
      </p>
    ),
    code: `
        // Button code
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Shimmer
        </button>
  
        // tailwind.config.js code
        {
          "animation": {
            shimmer: "shimmer 2s linear infinite"
          },
          "keyframes": {
            shimmer: {
              from: {
                "backgroundPosition": "0 0"
              },
              to: {
                "backgroundPosition": "-200% 0"
              }
            }
          }
        }
      `,
  },

  {
    name: "Invert",
    description: "Simple button that inverts on hover",
    component: (
      <p className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        #redux
      </p>
    ),
  },
  {
    name: "Tailwindcss Connect",
    description: "Button featured on Tailwindcss Connect website",
    showDot: false,
    component: (
      <p className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
          <span>{`#node.js`}</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </p>
    ),
  },
  {
    name: "Gradient",
    description: "Simple Gradient button with rounded corners",
    component: (
      <p className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
        #express.js
      </p>
    ),
  },
  {
    name: "Sketch",
    description: "Sketch button for your website",
    component: (
      <p className="px-4 py-2 rounded-md border border-black bg-white text-neutral-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
        #mongoDB

      </p>
    ),
  },
  {
    name: "Lit up borders",
    description: "Gradient button with perfect corners",
    component: (
      <p className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          #ejs
        </div>
      </p>
    ),
  },
  {
    name: "Border Magic",
    description: "Border Magic button for your website",
    showDot: false,
    component: (
      <p className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          #html
        </span>
      </p>
    ),
  },


  {
    name: "Favourite",
    description: "Favourite button for your website",
    component: (
      <p className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
       #CSS
      </p>
    ),
  },
  {
    name: "Outline",
    description: "Outline button for your website",
    component: (
      <p className="px-4 py-2 rounded-xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
        #sass
      </p>
    ),
  },
  {
    name: "Simple",
    description: "Elegant button for your website",
    component: (
      <p className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
        #tailwind
      </p>
    ),
  },
  {
    name: "Next.js Blue",
    description: "Next.js Blue button for your website",
    component: (
      <p className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
        #git
      </p>
    ),
  },
  {
    name: "Next.js White",
    description: "Next.js White button for your website",
    component: (
      <p className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
       #github
      </p>
    ),
  },
 
  {
    name: "Backdrop Blur",
    description: "Outline button for your website",
    showDot: false,
    component: (
      <p className="px-4 py-2 backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">
        Aceternity UI
      </p>
    ),
  },
  {
    name: "Playlist",
    description: "Playlist button for your website",
    component: (
      <p className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
        learning
      </p>
    ),
  },
  {
    name: "Figma",
    description: "Figma button for your website",
    component: (
      <p className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        learning
      </p>
    ),
  },
  {
    name: "Figma Outline",
    description: "Figma Outline button for your website",
    component: (
      <p className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        learning
      </p>
    ),
  },
  {
    name: "Coming Soon",
    description: "Top Gradient button for your website",
    showDot: false,
    component: (
      <p className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
        <span className="relative z-20">learning</span>
      </p>
    ),
  },
];

export default Page;
