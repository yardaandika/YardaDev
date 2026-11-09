import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { education, experience } from "@/data/portfolio";

export const Route = createFileRoute("/pengalaman")({
  head: () => ({
    meta: [
      { title: "Pengalaman & Pendidikan — M Yarda Andika" },
      {
        name: "description",
        content:
          "Pengalaman M Yarda Andika: kerja praktik di BPJN Wilayah II Riau, Head of Media IQ.Primatech, Media Analyst Cryptoniac.id, serta pendidikan S1 Teknik Informatika UIR.",
      },
      { property: "og:title", content: "Pengalaman & Pendidikan — M Yarda Andika" },
      {
        property: "og:description",
        content: "Pengalaman organisasi, profesional, dan riwayat pendidikan M Yarda Andika.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  const cur = education.current;
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-hero" />

      {/* Experience */}
      <section className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionHeading
          eyebrow="// Experience"
          title={
            <>
              Pengalaman <span className="text-gradient">organisasi & profesional</span>
            </>
          }
          description="Perjalanan saya di dunia kerja, magang, dan organisasi kampus."
        />

        <ol className="relative mt-12 space-y-6 border-l border-border pl-6 md:pl-10">
          {experience.map((e) => (
            <li key={e.org} className="relative">
              <span className="absolute -left-[31px] top-7 grid size-3 place-items-center rounded-full bg-primary shadow-glow md:-left-[47px]" />
              <article className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50 md:p-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 font-mono text-[11px] text-primary-glow">
                      <Briefcase className="size-3.5" /> {e.kind}
                    </span>
                    <h2 className="mt-3 text-xl font-semibold md:text-2xl">{e.org}</h2>
                    <p className="mt-1 font-medium text-primary-glow">{e.role}</p>
                  </div>
                  <div className="flex flex-col gap-1 font-mono text-xs text-muted-foreground md:items-end">
                    {e.period && (
                      <span className="flex items-center gap-2">
                        <Calendar className="size-3.5" /> {e.period}
                      </span>
                    )}
                    {e.location && (
                      <span className="flex items-center gap-2">
                        <MapPin className="size-3.5" /> {e.location}
                      </span>
                    )}
                  </div>
                </div>
                {e.project && (
                  <p className="mt-4 rounded-lg border border-border bg-background/40 px-4 py-2 text-sm">
                    <span className="text-muted-foreground">Project: </span>
                    {e.project}
                  </p>
                )}
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="relative mx-auto max-w-6xl px-5 pb-20">
        <SectionHeading
          eyebrow="// Education"
          title={
            <>
              Riwayat <span className="text-gradient">pendidikan</span>
            </>
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <article className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-hero opacity-60" />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-3 py-1 font-mono text-[11px] font-medium text-primary-foreground">
                Pendidikan terbaru
              </span>
              <div className="mt-5 flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent text-primary-glow">
                  <GraduationCap className="size-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold">{cur.school}</h3>
                  <p className="mt-1 text-primary-glow">{cur.degree}</p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">
                    {cur.period} · {cur.location}
                  </p>
                </div>
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="size-4 text-primary" /> Fokus pembelajaran dan eksplorasi:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cur.focus.map((f) => (
                  <span
                    key={f}
                    className="rounded-md border border-border bg-background/50 px-3 py-1.5 text-xs"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-border bg-surface p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Pendidikan sebelumnya
            </p>
            <ol className="mt-6 space-y-5">
              {education.previous.map((s) => (
                <li key={s.school} className="flex items-start gap-4">
                  <span className="mt-1.5 size-2.5 shrink-0 rounded-full border-2 border-primary" />
                  <div>
                    <p className="font-semibold">{s.school}</p>
                    <p className="font-mono text-xs text-muted-foreground">{s.period}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>
    </div>
  );
}
