import type { ProjectType } from "../lib/data";
import TagList from "./TagList";
import { Github } from "lucide-react";

const Project = ({
  title,
  description,
  tags,
  githubLink,
  icon: Icon,
}: ProjectType) => (
  <article className="card grid h-full grid-cols-[minmax(0,1fr),auto] grid-rows-[auto,minmax(0,1fr)] gap-y-4 p-7">
    <Icon />
    <a
      href={githubLink}
      target="_blank"
      aria-label="link to code"
      className="flex flex-row items-center gap-1 transition-colors hover:text-indigo-600 dark:hover:text-green-500"
    >
      Code <Github className="scale-75" />
    </a>
    <div className="col-span-full flex flex-col justify-between gap-4">
      <h3 className="text-heading font-heading">{title}</h3>
      <p>{description}</p>
      <TagList
        keyPrefix={`project-other-${title}`}
        tags={tags}
      />
    </div>
  </article>
);

export default Project;
