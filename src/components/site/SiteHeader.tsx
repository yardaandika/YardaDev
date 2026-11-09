import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/yarda-logo.png.asset.json";
import { DownloadCvButton } from "./DownloadCvButton";

const nav = [
  { to: "/", label: "Beranda" },
  { to: "/pengalaman", label: "Pengalaman" },
  { to: "/projects", label: "Project" },
  { to: "/skills", label: "Skill" },
  { to: "/sertifikat", label: "Sertifikat" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-lg border border-border bg-surface">
            <img src={logo.url} alt="Logo Yarda" className="h-4 w-auto" width={20} height={17} />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            Yarda<span className="text-primary">.</span>dev
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "bg-surface-raised text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <DownloadCvButton size="sm" label="CV" className="rounded-full px-4" />
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-border md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 px-5 pb-5 md:hidden">
          <nav className="flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="py-3 text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <DownloadCvButton size="lg" className="w-full rounded-full" />
        </div>
      )}
    </header>
  );
}
