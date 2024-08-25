import portrait from "@/assets/images/portfolio/2024/portrait.jpeg";
import { GithubAlt } from "@/components/FAIcons";
import Line from "./helpers/Line";
import { ArrowRight, Download } from "lucide-react";

export default function Intro() {
  return (
    <section
      id="home"
      className={`${Line.containerClass} section scroll-mt-96`}
    >
      <div className="flex flex-col items-center sm:gap-2">
        <Line className="flex-grow" />
        <img
          src={portrait.src}
          alt="Rares' portrait"
          width={96}
          height={96}
          className="aspect-square w-[96px] rounded-full neon-indigo-lg dark:neon-green-lg"
        />
        <Line className="flex-grow-[2] bg-gradient-to-t" />
      </div>
      <div className="pb-32 pt-12 sm:pb-52 sm:pt-40">
        <h1 className="xs:text-3xl pb-6 text-center font-heading text-xl font-medium !leading-[1.5] sm:pb-8 sm:text-left sm:text-5xl md:pb-12 md:text-6xl">
          <p>Hey,</p>
          <p>
            I&apos;m{" "}
            <span className="pr-[var(--shadow-off)] font-normal sm:[--shadow-col:#4338ca] sm:[--shadow-off:5px] sm:[text-shadow:var(--shadow-off)_0px_var(--shadow-col)] sm:dark:[--shadow-col:#16a34a] md:[--shadow-off:7px]">
              R
            </span>
            areș,
          </p>
          <p>a full-stack dev.</p>
        </h1>
        <div className="mx-auto grid w-1/3 min-w-fit flex-col items-center gap-4 sm:mx-0 sm:w-fit sm:grid-cols-[repeat(3,auto)] md:text-lg">
          <a
            href="#contact"
            className="group flex w-full flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gray-950/80 px-7 py-3 text-white outline-none neon-indigo hover:scale-110 focus:scale-110 active:scale-105 motion-safe:transition-transform dark:bg-slate-300/80 dark:text-black dark:neon-green sm:w-fit"
          >
            Contact me{" "}
            <ArrowRight className="opacity-70 delay-150 group-hover:translate-x-1 motion-safe:transition-transform sm:hidden md:inline" />
          </a>
          <a
            href="/portfolio/Rares-Cozma-CV.pdf"
            download
            className="border-card group flex w-full flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white/40 px-7 py-3 outline-none hover:scale-110 focus:scale-110 active:scale-105 motion-safe:transition-transform dark:bg-gray-900/40 sm:w-fit"
          >
            Download CV{" "}
            <Download className="opacity-70 delay-150 group-hover:translate-y-1 motion-safe:transition-transform sm:hidden md:inline" />
          </a>
          <a
            href="https://github.com/CozmaRares/"
            target="_blank"
            aria-label="My Github"
            className="border-card group flex h-full w-full flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white/50 px-7 py-3 outline-none hover:scale-110 focus:scale-110 active:scale-105 motion-safe:transition-transform dark:bg-gray-900/50 sm:w-fit"
          >
            <span className="sm:hidden">My Github</span>
            <GithubAlt className="opacity-70 sm:opacity-100" />
          </a>
        </div>
      </div>
    </section>
  );
}
