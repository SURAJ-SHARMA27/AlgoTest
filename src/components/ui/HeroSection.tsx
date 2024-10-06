import Link from "next/link";
import { Spotlight } from "./Spotlight";
import { Button } from "./moving-border";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div
        className="h-[80vh] md:h-[60vh] w-full flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0"
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="mt-40 relative z-10 w-full text-center">
        <h1
  className="mt-30 text-3.8xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
  style={{ lineHeight: '1.1' }} // Adjust as needed
>
  AlgoTest
</h1>
          <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
          >
Doing well in Options Trading means backtesting, forward testing, and algo trading. Do it all on AlgoTest, with 20+ brokers integrated.Unlock precision and enhance your trading strategies.          </p>
          <div className="mt-10">
            <Button
              borderRadius="1.75rem"
              className="bg-[#1a1a1a]  text-black dark:text-white border-neutral-200 dark:border-slate-800"
              duration={4000}
            >
              <Link href={"/request"}>Get 25  Backtests</Link>
            </Button>
          </div>
          <p className="mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto flex items-center justify-center">
          AlgoTest is backed by
  <Image
    src={"/ycomb.png"}
    alt="startup template"
    width={30}
    height={30}
    className="mx-2"
    style={{borderRadius:"6px"}}
  />
  Combinator
</p>






        </div>
      </div>

      {/* Adjusted ContainerScroll to appear just below */}
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll titleComponent={<></>}>
          <Image
            src={`/image11.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </>
  );
};


export default HeroSection;
