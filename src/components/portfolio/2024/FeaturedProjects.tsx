import { projectData } from "./lib/data";
import FeaturedProject from "./helpers/FeaturedProject";

const FeaturedProjects = () => {
  return (
    <section className="section relative">
      <h2
        id="projects"
        className="text-heading absolute -top-16 left-1/2 -translate-x-1/2 scroll-mt-32 font-heading"
      >
        Projects
      </h2>
      <ul className="grid gap-8 px-[2px] pb-2 md:grid-cols-2 md:gap-4 lg:grid-cols-1 lg:gap-14">
        {projectData.featured.map(data => (
          <li
            key={`project-showcase-${data.title}`}
            className="group"
          >
            <FeaturedProject {...data} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProjects;
