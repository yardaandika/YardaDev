import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
      <div
        className={`relative overflow-hidden ${large ? "aspect-[16/10] md:aspect-[21/9]" : "aspect-[16/10]"}`}
      >
        <img
          src={project.image}
          alt={`Tampilan project ${project.title}`}
          loading="lazy"
          width={1280}
          height={800}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[11px] text-primary-glow backdrop-blur">
          {project.type}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs text-muted-foreground">{project.category}</p>
        <h3 className={`mt-2 font-semibold ${large ? "text-2xl" : "text-xl"}`}>{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-accent px-2.5 py-1 font-mono text-[11px] text-accent-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-glow transition-colors hover:text-foreground"
          >
            <Github className="size-4" />
            Lihat di GitHub
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}
