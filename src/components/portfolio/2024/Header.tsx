import { sections } from "./lib/data";

export default function Header() {
  return (
    <header className="fixed left-1/2 top-0 z-50 w-full min-w-[20rem] bg-white/40 p-5 capitalize backdrop-blur neon-indigo-lg [translate:-50%] dark:bg-gray-950/30 dark:neon-green-lg sm:top-5 sm:w-[39rem] sm:rounded-full">
      <nav className="flex items-center justify-center">
        <ul className="flex w-[20rem] flex-row flex-wrap items-center justify-center gap-4 sm:w-full sm:justify-evenly">
          {sections.map(section => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="relative rounded-full p-3"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
