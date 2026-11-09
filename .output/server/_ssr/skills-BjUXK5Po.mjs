import { l as softSkills, s as skillGroups } from "./portfolio-BTCbAoS4.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as SectionHeading } from "./SectionHeading-BZf5TT-k.mjs";
import { _ as Brain, l as HeartHandshake, m as CodeXml, p as Database } from "../_libs/lucide-react.mjs";
import { n as DownloadCvButton } from "./DownloadCvButton-BeKBnDNq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-BjUXK5Po.js
var import_jsx_runtime = require_jsx_runtime();
var icons = [
	CodeXml,
	Brain,
	Database
];
function SkillsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-96 bg-hero" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-5 py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "// Kemampuan",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Skill & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "tech stack"
				})] }),
				description: "Teknologi yang saya pakai untuk membangun aplikasi web dan model AI.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadCvButton, {
					size: "lg",
					className: "rounded-full"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 space-y-6",
				children: [skillGroups.map((g, i) => {
					const Icon = icons[i] ?? CodeXml;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 rounded-3xl border border-border bg-surface p-6 md:grid-cols-[280px_1fr] md:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm text-muted-foreground",
								children: g.code
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-xl font-semibold",
							children: g.title
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
							children: g.items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-3 text-sm transition-colors hover:border-primary/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-primary" }), s]
							}, s))
						})]
					}, g.title);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6 rounded-3xl border border-border bg-surface p-6 md:grid-cols-[280px_1fr] md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 place-items-center rounded-xl bg-accent text-primary-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm text-muted-foreground",
							children: "04"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-xl font-semibold",
						children: "Professional & Soft Skills"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-3",
						children: softSkills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border bg-background/40 px-4 py-2 text-sm",
							children: s
						}, s))
					})]
				})]
			})]
		})]
	});
}
//#endregion
export { SkillsPage as component };
