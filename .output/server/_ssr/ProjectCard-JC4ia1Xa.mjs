import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as ArrowUpRight, d as Github } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProjectCard-JC4ia1Xa.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectCard({ project, large = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative overflow-hidden ${large ? "aspect-[16/10] md:aspect-[21/9]" : "aspect-[16/10]"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.image,
				alt: `Tampilan project ${project.title}`,
				loading: "lazy",
				width: 1280,
				height: 800,
				className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[11px] text-primary-glow backdrop-blur",
				children: project.type
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-muted-foreground",
					children: project.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: `mt-2 font-semibold ${large ? "text-2xl" : "text-xl"}`,
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
					children: project.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: project.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-md bg-accent px-2.5 py-1 font-mono text-[11px] text-accent-foreground",
						children: t
					}, t))
				}),
				project.github && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: project.github,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-glow transition-colors hover:text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-4" }),
						"Lihat di GitHub",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
					]
				})
			]
		})]
	});
}
//#endregion
export { ProjectCard as t };
