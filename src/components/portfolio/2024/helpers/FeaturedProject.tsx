import type { FeaturedProjectType } from "../lib/data";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import TagList from "./TagList";

export default function FeaturedProject({
  title,
  description,
  tags,
  githubLink,
  demoLink,
  image,
}: FeaturedProjectType) {
  const img = (
    <img
      src={image.src}
      alt={`${title} preview`}
      className={cn("pointer-events-none aspect-video object-cover", {
        "duration-500 group-hover/img:scale-110 group-focus/img:scale-110 motion-safe:transition-transform":
          !!demoLink,
      })}
    />
  );

  return (
    <article className="card mx-auto flex h-full max-w-[650px] flex-col items-center gap-6 p-8 md:max-w-[initial] lg:flex-row lg:group-odd:text-right lg:group-even:flex-row-reverse">
      {demoLink ? (
        <a
          href={demoLink}
          target="_blank"
          className="border-card group/img overflow-hidden rounded-lg lg:w-1/2"
        >
          {img}
        </a>
      ) : (
        <div className="border-card overflow-hidden rounded-lg lg:w-1/2">
          {img}
        </div>
      )}
      <div className="flex w-full flex-grow flex-col justify-between gap-6 lg:w-1/2 lg:items-end lg:group-even:items-start">
        <h3 className="text-heading font-heading font-medium">{title}</h3>
        <p className="z-10 rounded-lg bg-gray-50 from-gray-50 p-4 text-sm dark:bg-gray-800 dark:from-gray-800 sm:text-base md:p-6 lg:!bg-transparent lg:group-odd:-ml-12 lg:group-odd:bg-gradient-to-r lg:group-odd:!pr-0 lg:group-even:-mr-12 lg:group-even:bg-gradient-to-l lg:group-even:!pl-0">
          {description}
        </p>
        <TagList
          keyPrefix={`project-showcase-${title}`}
          tags={tags}
        />
        <div className="flex flex-row gap-4">
          <a
            href={githubLink}
            target="_blank"
            aria-label="link to code"
            className="flex flex-row items-center gap-1 transition-colors hover:text-indigo-600 dark:hover:text-green-500"
          >
            Code <Github className="scale-75" />
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              aria-label="link to demo"
              className="flex flex-row items-center gap-1 transition-colors hover:text-indigo-600 dark:hover:text-green-500"
            >
              Demo <ExternalLink className="scale-75" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
