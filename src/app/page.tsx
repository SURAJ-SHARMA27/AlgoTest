import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CardSpotlightDemo } from "@/components/ui/Card-spot";
import Cofounders from "@/components/ui/Cofounders";
import { Cover } from "@/components/ui/cover";
import { Features } from "@/components/ui/Features";
import HeroSection from "@/components/ui/HeroSection";
import { Meteors } from "@/components/ui/meteors";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import Link from "next/link";
const people = [
  {
    id: 1,
    name: "Raghav Malik",
    designation: "Founder & CEO",
    image:
      "/founder2a.png",
  },
  {
    id: 2,
    name: "Rajat Jaiswal",
    designation: "Founder & CTO",
    image:
      "/founder1a.png",

  },
    
  ];
export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <HeroSection/>
<div className=" relative z-10 w-full text-center">
          <h2
            className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl text-center mx-auto "
          >  The AlgoTest Advantage</h2>
          <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
          >
Features which make AlgoTest the best place for all your trading.

</p>
         
      





        </div>
     <div className="flex flex-wrap justify-center gap-4 mt-10 mb-20">
     <div className="flex flex-col md:flex-row justify-center gap-4 ">
      
     <CardSpotlightDemo
  title="Simple, Fast, & Free Templates"
  description="Access a wide range of ready-to-use templates tailored for everyday trading needs. Whether you’re just starting or refining your strategy, our templates simplify the process, helping you save time and get trading with minimal effort."
  footer="Start with just a click and streamline your trading like never before."
/>

<CardSpotlightDemo
  title="Super Fast Backtesting Speeds"
  description="Test your strategies on over 5 years of historical data with lightning speed. Our platform allows you to refine and optimize your trades in a fraction of the time, giving you a clear edge over the market without any cost."
  footer="Experience rapid, data-driven backtesting without limitations."
/>

<CardSpotlightDemo
  title="Seamless Execution of Strategies"
  description="Execute your strategies effortlessly with just one click. No more complex setups or delays—run your trades in real-time and focus on what really matters: your trading performance."
  footer="Take control of your trading with seamless, one-click execution."
/>

   
</div>

</div>
<h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
Accelerate your
due    diligence with <Cover> AlgoTest</Cover>
      </h1>
     <Features/>
     <div className="bg-black height-[40rem] mt-40 relative w-full text-center">
    <h1 className="mt-30 mb-30 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
      Meet our founders
    </h1>
    <div className="mt-20 flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  </div>
  <div>
    
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center px-4 space-y-6 md:space-y-0 md:space-x-6">
  {/* Card 1 */}
  <div className="w-full relative max-w-xs h-92"> {/* Set a fixed height */}
    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
    <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
      <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-2 w-2 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
          />
        </svg>
      </div>

      <h1 className="font-bold text-xl text-white mb-4 relative z-50">
  Power Your Trading with Advanced Tools
</h1>

<p className="font-normal text-base text-slate-500 mb-4 relative z-50">
  AlgoTest simplifies trading workflows. Backtest strategies on historical data, execute trades in real-time, and integrate with over 20 brokers—all in one platform. Get started instantly with a click.
</p>


      <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
        Explore
      </button>

      {/* Meteor effect */}
      <Meteors number={20} />
    </div>
  </div>

  {/* Card 2 - Different content */}
  <div className="w-full relative max-w-xs h-92"> {/* Set a fixed height */}
    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 transform scale-[0.80] rounded-full blur-3xl" />
    <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
      <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-2 w-2 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
          />
        </svg>
      </div>

      <h1 className="font-bold text-xl text-white mb-4 relative z-50">
  Optimize Your Trading Performance
</h1>

<p className="font-normal text-base text-slate-500 mb-4 relative z-50">
  AlgoTest equips traders with powerful tools for backtesting, strategy optimization, and seamless execution. Easily test and deploy your strategies on a fast, reliable platform that enhances your trading workflow.
</p>


      <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
        Get Started
      </button>

      {/* Meteor effect */}
      <Meteors number={20} />
    </div>
  </div>
</div>

    

<footer className="w-full flex items-center justify-center py-3 mb-4 mt-20">
        <Link
          className="flex items-center gap-1 text-current"
          href="https://www.linkedin.com/in/suraj-sharma-239894223/"
          title="Suraj's LinkedIn"
        >
          <span className="text-default-600">Redesigned & built by</span>
          <p className="text-primary">Suraj Sharma</p>
        </Link>
      </footer>

    </div>
    
  );
}
