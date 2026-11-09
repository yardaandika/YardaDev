import { describe, expect, it } from "vitest";
import { cv } from "@/data/portfolio";

// The "Download CV" button must save the user's CV PDF directly from the site itself.
describe("CV download", () => {
  it("points at a same-origin PDF with a fixed download filename", () => {
    expect(cv.url.startsWith("/")).toBe(true);
    expect(cv.url.endsWith(".pdf")).toBe(true);
    expect(cv.filename).toBe("CV-M-Yarda-Andika.pdf");
  });
});
