import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { DownloadCvButton } from "./DownloadCvButton";

const icons = { GitHub: Github, LinkedIn: Linkedin, Instagram: Instagram } as const;

export function SiteFooter() {
  return (
    <footer id="kontak" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-hero opacity-80" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-glow">
                // Mari berkolaborasi
              </p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Punya project atau lowongan? <span className="text-gradient">Ayo ngobrol.</span>
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                Terbuka untuk magang, freelance, dan kolaborasi di bidang web development & AI.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-colors hover:border-primary/60"
              >
                <Mail className="size-4 text-primary" />
                {profile.email}
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-colors hover:border-primary/60"
              >
                <MessageCircle className="size-4 text-primary" />
                {profile.phone}
              </a>
              <DownloadCvButton size="lg" className="rounded-xl" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. Dibuat dengan semangat ngoding.</p>
          <div className="flex items-center gap-2">
            {socials.map((s) => {
              const Icon = icons[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary-glow"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
