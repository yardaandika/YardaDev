import { createFileRoute } from "@tanstack/react-router";
import { Brain, Code2, Database, HeartHandshake } from "lucide-react";
import { DownloadCvButton } from "@/components/site/DownloadCvButton";
import { SectionHeading } from "@/components/site/SectionHeading";
import { skillGroups, softSkills } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skill — M Yarda Andika" },
      {
        name: "description",
        content:
          "Skill M Yarda Andika: Python, JavaScript, PHP, React, Node.js, FastAPI, Machine Learning, LSTM, MySQL, MongoDB, dan lainnya.",
      },
      { property: "og:title", content: "Skill — M Yarda Andika" },
      {
        property: "og:description",
        content: "Tech stack web development, data & AI, serta tools yang dikuasai M Yarda Andika.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

const icons = [Code2, Brain, Database];

function SkillsPage() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-hero" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionHeading
          eyebrow="// Kemampuan"
          title={
            <>
              Skill & <span className="text-gradient">tech stack</span>
            </>
          }
          description="Teknologi yang saya pakai untuk membangun aplikasi web dan model AI."
          action={<DownloadCvButton size="lg" className="rounded-full" />}
        />

        <div className="mt-12 space-y-6">
          {skillGroups.map((g, i) => {
            const Icon = icons[i] ?? Code2;
            return (
              <div
                key={g.title}
                className="grid gap-6 rounded-3xl border border-border bg-surface p-6 md:grid-cols-[280px_1fr] md:p-8"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid size-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-sm text-muted-foreground">{g.code}</span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold">{g.title}</h2>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {g.items.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-3 text-sm transition-colors hover:border-primary/60"
                    >
                      <span className="size-1.5 rounded-full bg-primary" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="grid gap-6 rounded-3xl border border-border bg-surface p-6 md:grid-cols-[280px_1fr] md:p-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-xl bg-accent text-primary-glow">
                  <HeartHandshake className="size-5" />
                </span>
                <span className="font-mono text-sm text-muted-foreground">04</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold">Professional & Soft Skills</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-background/40 px-4 py-2 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
