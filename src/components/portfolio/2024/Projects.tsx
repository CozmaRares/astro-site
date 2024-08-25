import Line from "./helpers/Line";
import { projectData } from "./lib/data";
import Project from "./helpers/Project";
import { Code, Code2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const wasOpened = useRef(false);

  useEffect(() => {
    if (isOpen) wasOpened.current = true;
    else if (wasOpened.current) buttonRef.current!.scrollIntoView();
  }, [isOpen]);

  return (
    <section className={cn(Line.containerClass, "section gap-x-0", {})}>
      {isOpen && (
        <>
          <div className="mx-auto">
            <Line className="h-full bg-gradient-to-t" />
          </div>
          <div className="pt-20" />
          <div className="col-start-1 flex items-center justify-center">
            <Line.breakPoint>
              <Code />
            </Line.breakPoint>
          </div>
          <h2 className="text-heading flex flex-row items-center justify-center gap-8 font-heading sm:justify-start">
            <span className="hidden h-[1px] bg-indigo-500 dark:bg-green-600 sm:block" />
            <span className="text-heading font-heading">Other projects</span>
          </h2>
          <div>
            <Line className="mx-auto h-1/2 to-indigo-200 dark:to-green-800" />
            <Line className="mx-auto h-1/2 bg-gradient-to-t to-indigo-200 dark:to-green-800" />
          </div>
          <ul className="grid-like-flex py-12 pr-3 [--gap:1rem] sm:[--cols:2] lg:[--cols:3]">
            {projectData.other.map(data => (
              <li key={`project-other-${data.title}`}>
                <Project {...data} />
              </li>
            ))}
          </ul>
          <div className="mx-auto">
            <Line.breakPoint>
              <Code2 />
            </Line.breakPoint>
          </div>
        </>
      )}
      <button
        ref={buttonRef}
        onClick={() => {
          buttonRef.current!.blur();
          setIsOpen(prev => !prev);
        }}
        className={cn(
          `col-span-full mx-auto h-12 w-36 scroll-mt-32 rounded-xl border-2 border-indigo-600 p-3 text-indigo-600 outline-none transition-colors hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-950 dark:focus:bg-green-400 dark:focus:text-gray-950`,
          { "mt-12": !isOpen },
        )}
      >
        Show {isOpen ? "less" : "more"}
      </button>
    </section>
  );
}
