import { createFileRoute } from "@tanstack/react-router";
import { Award, Calendar } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SectionHeading } from "@/components/site/SectionHeading";
import { certificates, type Certificate } from "@/data/portfolio";

export const Route = createFileRoute("/sertifikat")({
  head: () => ({
    meta: [
      { title: "Sertifikat — M Yarda Andika" },
      {
        name: "description",
        content:
          "Sertifikat pelatihan M Yarda Andika: AI untuk akademik, ASEAN Cybersecurity Skilling Programme, dan workshop aplikasi.",
      },
      { property: "og:title", content: "Sertifikat — M Yarda Andika" },
      {
        property: "og:description",
        content: "Pelatihan dan workshop yang telah diikuti M Yarda Andika.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-hero" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionHeading
          eyebrow="// Sertifikat & pelatihan"
          title={
            <>
              Bukti <span className="text-gradient">belajar</span> saya
            </>
          }
          description="Klik sertifikat untuk melihat ukuran penuh."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certificates.map((c) => (
            <button
              key={c.title}
              type="button"
              onClick={() => setActive(c)}
              className="group overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
            >
              <div className="aspect-[3/2] overflow-hidden bg-background">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 font-mono text-[11px] text-primary-glow">
                  <Award className="size-3.5" /> {c.tag}
                </span>
                <h2 className="mt-3 text-lg font-semibold leading-snug">{c.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
                <p className="mt-3 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <Calendar className="size-3.5" /> {c.date}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl border-border bg-surface p-3">
          <DialogTitle className="sr-only">{active?.title}</DialogTitle>
          {active && (
            <img src={active.image} alt={active.title} className="w-full rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
