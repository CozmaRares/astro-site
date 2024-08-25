import { HelpCircle } from "lucide-react";
import Line from "./helpers/Line";

export default function About() {
  return (
    <section
      id="about"
      className={`${Line.containerClass} section`}
    >
      <div className="flex items-center justify-center">
        <Line.breakPoint>
          <HelpCircle />
        </Line.breakPoint>
      </div>
      <h2 className="flex flex-row items-center">
        <span className="xs:ml-10 mx-4 h-[1px] grow bg-indigo-400 dark:bg-green-300 sm:hidden" />
        <span className="text-heading font-heading">About me</span>
        <span className="xs:mr-10 mx-4 h-[1px] max-w-xs grow bg-indigo-400 dark:bg-green-300" />
      </h2>
      <div className="origin-top">
        <Line className="mx-auto h-full to-indigo-400 dark:to-green-500" />
      </div>
      <div className="my-4 space-y-4 text-base sm:my-16 sm:text-lg">
        <p>
          I got started on this path back in high school when I got into C++. I
          leveled up my skills by messing around with little command-line
          programs and games.
        </p>
        <p>
          Before starting college, I stumbled upon HTML and CSS, dabbled a bit
          in p5.js, and eventually found my love for React. I&apos;m always up
          for learning and broadening my skill set, especially when it comes to
          checking out other web frameworks.
        </p>
        <p>
          Apart from being pretty solid with C/C++ and getting my feet wet with
          Java during my second year in college, I&apos;m totally up for getting
          the hang of other backend languages.
        </p>
      </div>
      <div className="col-span-full flex flex-row items-end pb-20 pl-[calc((var(--col-1)-3px)/2)]">
        <div className="aspect-square w-6 rounded-bl-3xl border-b-[3px] border-l-[3px] border-b-indigo-400 border-l-indigo-400 dark:border-b-green-500 dark:border-l-green-500" />
        <Line className="h-[3px] w-2/5 bg-gradient-to-r" />
      </div>
    </section>
  );
}
