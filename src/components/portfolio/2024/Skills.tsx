import { skills } from "./lib/data";

export default function Skills() {
  return (
    <section className="section">
      <Divider />
      <h2
        id="skills"
        className="text-heading scroll-mt-32 pb-8 text-center font-heading"
      >
        My Skills
      </h2>
      <ul className="mx-auto flex flex-row flex-wrap justify-center gap-2 md:w-5/6">
        {skills.map((skill, idx) => (
          <li
            key={skill}
            className="card bg-card px-5 py-3"
          >
            {skill}
          </li>
        ))}
      </ul>
      <Divider />
    </section>
  );
}

function Divider() {
  return (
    <div className="mx-auto mt-32 w-1 rounded-full bg-indigo-800 neon-indigo dark:bg-green-300 dark:neon-green sm:my-24 sm:h-28" />
  );
}
