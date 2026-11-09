import { Download } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cv } from "@/data/portfolio";

/** Same-origin link with the download attribute so the browser saves the PDF directly. */
export function DownloadCvButton({
  variant = "hero",
  size = "xl",
  label = "Download CV",
  className,
}: {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  label?: string;
  className?: string;
}) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={cv.url} download={cv.filename} aria-label="Download CV M Yarda Andika (PDF)">
        <Download />
        {label}
      </a>
    </Button>
  );
}
