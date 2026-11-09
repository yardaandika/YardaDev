import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Project — M Yarda Andika" },
      {
        name: "description",
        content:
          "Project M Yarda Andika: prediksi harga crypto dengan LSTM, sistem monitoring lokasi BPJN, carbon footprint tracker, dan lainnya.",
      },
      { property: "og:title", content: "Project — M Yarda Andika" },
      {
        property: "og:description",
        content: "Kumpulan project web full-stack dan AI karya M Yarda Andika.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [first, ...rest] = projects;
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-hero" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionHeading
          eyebrow="// Portofolio"
          title={
            <>
              Project yang sudah <span className="text-gradient">saya kerjakan</span>
            </>
          }
          description="Gabungan project akademik, magang, tim, dan riset di bidang web development, AI, dan blockchain."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {first && (
            <div className="md:col-span-2">
              <ProjectCard project={first} large />
            </div>
          )}
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
