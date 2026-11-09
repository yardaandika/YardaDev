import { o as projects } from "./portfolio-BTCbAoS4.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as SectionHeading } from "./SectionHeading-BZf5TT-k.mjs";
import { t as ProjectCard } from "./ProjectCard-JC4ia1Xa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-ulSbxQQ2.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	const [first, ...rest] = projects;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 top-0 h-96 bg-hero" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-5 py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "// Portofolio",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Project yang sudah ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "saya kerjakan"
				})] }),
				description: "Gabungan project akademik, magang, tim, dan riset di bidang web development, AI, dan blockchain."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-2",
				children: [first && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						project: first,
						large: true
					})
				}), rest.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project: p }, p.slug))]
			})]
		})]
	});
}
//#endregion
export { ProjectsPage as component };
