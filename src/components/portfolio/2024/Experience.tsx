import { experience } from "./lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="$font-heading text-heading mb-12 text-center">
        Experience
      </h2>
      <div className="mt-15 pb-40 sm:pb-72 md:mb-36 md:pb-36">
        {experience.map(
          (
            { title, location, description, icon: Icon, date, company },
            index,
          ) => (
            <div
              key={index}
              className="group isolate grid grid-cols-[auto,minmax(0,1fr)] md:grid-cols-[minmax(0,1fr),auto,minmax(0,1fr)]"
            >
              <div className="-z-10 flex flex-col items-center px-[var(--pad)] [--pad:1rem]">
                <div className="relative rounded-full bg-gray-100 p-2 neon-indigo dark:bg-gray-950 dark:neon-green">
                  <Icon />
                  <div className="absolute left-[calc(100%+var(--pad))] top-1/2 aspect-square w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-indigo-700 dark:bg-green-400 md:group-odd:-left-[var(--pad)]" />
                </div>
                <div className="w-[3px] flex-grow bg-gradient-to-b from-indigo-400 dark:from-green-500" />
              </div>
              <article className="card mb-8 border-none p-5 md:p-8 md:group-odd:order-first md:group-even:order-last">
                <div className="flex flex-row flex-wrap items-center">
                  <h3 className="text-lg font-semibold capitalize">{title}</h3>
                  {company && (
                    <span className="ml-auto text-sm text-gray-700 dark:text-white/75">
                      @{company}
                    </span>
                  )}
                </div>
                <p className="pb-1 text-sm font-normal opacity-80">
                  {location}
                </p>
                <p className="mt-1 font-normal text-gray-700 dark:text-white/75">
                  {description}
                </p>
              </article>
              <span className="hidden md:block md:group-odd:order-last md:group-even:order-first md:group-even:text-right">
                {date}
              </span>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
