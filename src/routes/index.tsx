import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Code2, Database, GraduationCap, MapPin, Sparkles } from "lucide-react";
import profileImg from "@/assets/yarda-profile.png.asset.json";
import { Button } from "@/components/ui/button";
import { DownloadCvButton } from "@/components/site/DownloadCvButton";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  certificates,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M Yarda Andika — Full-Stack Web Developer & AI Enthusiast" },
      {
        name: "description",
        content:
          "Portofolio M Yarda Andika: mahasiswa Teknik Informatika UIR yang membangun aplikasi web full-stack dan solusi AI. Download CV, lihat skill & project.",
      },
      { property: "og:title", content: "M Yarda Andika — Full-Stack Web Developer & AI" },
      {
        property: "og:description",
        content:
          "Mahasiswa Teknik Informatika UIR yang membangun aplikasi web full-stack dan solusi AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const groupIcons = [Code2, Brain, Database];

function Index() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.2fr_1fr] md:pt-20">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
              <span className="size-2 rounded-full bg-primary shadow-glow" />
              Terbuka untuk magang & kolaborasi
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] md:text-7xl">
              Halo, saya <br />
              <span className="text-gradient">{profile.name}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              <span className="text-foreground">Full-Stack Web Developer</span> &{" "}
              <span className="text-foreground">AI Enthusiast</span> — membangun aplikasi web dan
              model machine learning yang mengubah data menjadi solusi nyata.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <DownloadCvButton />
              <Button asChild variant="glass" size="xl">
                <Link to="/projects">
                  Lihat Project <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <GraduationCap className="size-4 text-primary" /> {profile.university}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> {profile.location}
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:150ms]">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-primary opacity-25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-card">
              <img
                src={profileImg.url}
                alt="Foto profil M Yarda Andika"
                width={500}
                height={500}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 animate-float rounded-2xl border border-border bg-surface-raised/90 px-4 py-3 shadow-card backdrop-blur">
              <p className="font-mono text-[11px] text-muted-foreground">model.predict()</p>
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="size-4 text-primary-glow" /> LSTM · FastAPI
              </p>
            </div>
            <div className="absolute -right-4 top-8 animate-float rounded-2xl border border-border bg-surface-raised/90 px-4 py-3 shadow-card backdrop-blur [animation-delay:1.5s]">
              <p className="font-display text-2xl font-bold text-primary-glow">{projects.length}+</p>
              <p className="text-xs text-muted-foreground">Project</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div className="self-start md:sticky md:top-24">
            <SectionHeading eyebrow="// Tentang saya" title="Ngoding, data, dan rasa penasaran." />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">{profile.about}</p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: `${projects.length}`, l: "Project" },
                { n: `${certificates.length}`, l: "Sertifikat" },
                { n: `${skillGroups.reduce((a, g) => a + g.items.length, 0)}`, l: "Skill teknis" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-surface p-5">
                  <p className="font-display text-3xl font-bold text-gradient">{s.n}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-border bg-surface p-5">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs text-primary-glow">Pengalaman</p>
                <Link
                  to="/pengalaman"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary-glow"
                >
                  Selengkapnya <ArrowRight className="size-3.5" />
                </Link>
              </div>
              <ul className="mt-3 divide-y divide-border">
                {experience.slice(0, 3).map((e) => (
                  <li key={e.org} className="flex flex-col gap-1 py-3 text-sm sm:flex-row sm:justify-between">
                    <span>
                      <span className="font-semibold">{e.role}</span>
                      <span className="text-muted-foreground"> — {e.org}</span>
                    </span>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      {e.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills preview */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="// Skill"
          title="Tech stack yang saya gunakan"
          action={
            <Button asChild variant="link" className="px-0">
              <Link to="/skills">
                Semua skill <ArrowRight />
              </Link>
            </Button>
          }
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = groupIcons[i] ?? Code2;
            return (
              <div
                key={g.title}
                className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary-glow">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{g.code}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-background/40 px-2.5 py-1 text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects preview */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="// Project unggulan"
          title="Hasil karya terbaru"
          description="Dari machine learning sampai aplikasi web berbasis peta."
          action={
            <Button asChild variant="glass" size="lg" className="rounded-full">
              <Link to="/projects">
                Semua project <ArrowRight />
              </Link>
            </Button>
          }
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Certificates teaser */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="// Sertifikat"
          title="Terus belajar, terus bertumbuh"
          action={
            <Button asChild variant="link" className="px-0">
              <Link to="/sertifikat">
                Lihat semua sertifikat <ArrowRight />
              </Link>
            </Button>
          }
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {certificates.map((c) => (
            <Link
              key={c.title}
              to="/sertifikat"
              className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary/50"
            >
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-3">
                <p className="font-mono text-[11px] text-primary-glow">{c.tag}</p>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{c.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
