import { n as __toESM } from "../_runtime.mjs";
import { a as profile, c as socials } from "./portfolio-BTCbAoS4.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as Instagram, d as Github, i as Menu, o as Mail, r as MessageCircle, s as Linkedin, t as X } from "../_libs/lucide-react.mjs";
import { n as DownloadCvButton } from "./DownloadCvButton-BeKBnDNq.mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BdWEld-m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D5nUtUW4.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var yarda_logo_default = "/assets/yarda-logo-B_PKGF4H.png";
var nav = [
	{
		to: "/",
		label: "Beranda"
	},
	{
		to: "/pengalaman",
		label: "Pengalaman"
	},
	{
		to: "/projects",
		label: "Project"
	},
	{
		to: "/skills",
		label: "Skill"
	},
	{
		to: "/sertifikat",
		label: "Sertifikat"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 place-items-center rounded-lg border border-border bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: yarda_logo_default,
							alt: "Logo Yarda",
							className: "h-4 w-auto",
							width: 20,
							height: 17
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-sm font-semibold tracking-tight",
						children: [
							"Yarda",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "."
							}),
							"dev"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: true },
						className: "rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
						activeProps: { className: "bg-surface-raised text-foreground" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadCvButton, {
						size: "sm",
						label: "CV",
						className: "rounded-full px-4"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-10 place-items-center rounded-lg border border-border md:hidden",
					"aria-label": open ? "Tutup menu" : "Buka menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border/60 px-5 pb-5 md:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col py-3",
				children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					activeOptions: { exact: true },
					onClick: () => setOpen(false),
					className: "py-3 text-muted-foreground",
					activeProps: { className: "text-foreground" },
					children: item.label
				}, item.to))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadCvButton, {
				size: "lg",
				className: "w-full rounded-full"
			})]
		})]
	});
}
var icons = {
	GitHub: Github,
	LinkedIn: Linkedin,
	Instagram
};
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		id: "kontak",
		className: "border-t border-border/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl border border-border bg-surface p-8 md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-hero opacity-80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-[0.2em] text-primary-glow",
							children: "// Mari berkolaborasi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 text-3xl font-semibold md:text-4xl",
							children: ["Punya project atau lowongan? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "Ayo ngobrol."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-muted-foreground",
							children: "Terbuka untuk magang, freelance, dan kolaborasi di bidang web development & AI."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${profile.email}`,
								className: "flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-colors hover:border-primary/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-primary" }), profile.email]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: profile.whatsapp,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm transition-colors hover:border-primary/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4 text-primary" }), profile.phone]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadCvButton, {
								size: "lg",
								className: "rounded-xl"
							})
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					profile.name,
					". Dibuat dengan semangat ngoding."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: socials.map((s) => {
						const Icon = icons[s.label];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": s.label,
							className: "grid size-10 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
						}, s.label);
					})
				})]
			})]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-gradient",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Halaman tidak ditemukan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Halaman yang kamu cari tidak ada atau sudah dipindahkan."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Kembali ke beranda"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "Halaman gagal dimuat"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Terjadi kesalahan. Coba muat ulang atau kembali ke beranda."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Coba lagi"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Beranda"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "M Yarda Andika — Full-Stack Web Developer & AI" },
			{
				name: "description",
				content: "Portofolio M Yarda Andika, mahasiswa Teknik Informatika UIR: web full-stack & AI."
			},
			{
				name: "author",
				content: "M Yarda Andika"
			},
			{
				property: "og:title",
				content: "M Yarda Andika — Full-Stack Web Developer & AI"
			},
			{
				property: "og:description",
				content: "Portofolio M Yarda Andika, mahasiswa Teknik Informatika UIR: web full-stack & AI."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#0a0e1a"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "id",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var $$splitComponentImporter$4 = () => import("./routes-CiVXHjVN.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "M Yarda Andika — Full-Stack Web Developer & AI Enthusiast" },
		{
			name: "description",
			content: "Portofolio M Yarda Andika: mahasiswa Teknik Informatika UIR yang membangun aplikasi web full-stack dan solusi AI. Download CV, lihat skill & project."
		},
		{
			property: "og:title",
			content: "M Yarda Andika — Full-Stack Web Developer & AI"
		},
		{
			property: "og:description",
			content: "Mahasiswa Teknik Informatika UIR yang membangun aplikasi web full-stack dan solusi AI."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./pengalaman-BOB9HH3I.mjs");
var Route$3 = createFileRoute("/pengalaman")({
	head: () => ({ meta: [
		{ title: "Pengalaman & Pendidikan — M Yarda Andika" },
		{
			name: "description",
			content: "Pengalaman M Yarda Andika: kerja praktik di BPJN Wilayah II Riau, Head of Media IQ.Primatech, Media Analyst Cryptoniac.id, serta pendidikan S1 Teknik Informatika UIR."
		},
		{
			property: "og:title",
			content: "Pengalaman & Pendidikan — M Yarda Andika"
		},
		{
			property: "og:description",
			content: "Pengalaman organisasi, profesional, dan riwayat pendidikan M Yarda Andika."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./projects-ulSbxQQ2.mjs");
var Route$2 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Project — M Yarda Andika" },
		{
			name: "description",
			content: "Project M Yarda Andika: prediksi harga crypto dengan LSTM, sistem monitoring lokasi BPJN, carbon footprint tracker, dan lainnya."
		},
		{
			property: "og:title",
			content: "Project — M Yarda Andika"
		},
		{
			property: "og:description",
			content: "Kumpulan project web full-stack dan AI karya M Yarda Andika."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./sertifikat-ygrSjsJX.mjs");
var Route$1 = createFileRoute("/sertifikat")({
	head: () => ({ meta: [
		{ title: "Sertifikat — M Yarda Andika" },
		{
			name: "description",
			content: "Sertifikat pelatihan M Yarda Andika: AI untuk akademik, ASEAN Cybersecurity Skilling Programme, dan workshop aplikasi."
		},
		{
			property: "og:title",
			content: "Sertifikat — M Yarda Andika"
		},
		{
			property: "og:description",
			content: "Pelatihan dan workshop yang telah diikuti M Yarda Andika."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./skills-BjUXK5Po.mjs");
var Route = createFileRoute("/skills")({
	head: () => ({ meta: [
		{ title: "Skill — M Yarda Andika" },
		{
			name: "description",
			content: "Skill M Yarda Andika: Python, JavaScript, PHP, React, Node.js, FastAPI, Machine Learning, LSTM, MySQL, MongoDB, dan lainnya."
		},
		{
			property: "og:title",
			content: "Skill — M Yarda Andika"
		},
		{
			property: "og:description",
			content: "Tech stack web development, data & AI, serta tools yang dikuasai M Yarda Andika."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	PengalamanRoute: Route$3.update({
		id: "/pengalaman",
		path: "/pengalaman",
		getParentRoute: () => Route$5
	}),
	ProjectsRoute: Route$2.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$5
	}),
	SertifikatRoute: Route$1.update({
		id: "/sertifikat",
		path: "/sertifikat",
		getParentRoute: () => Route$5
	}),
	SkillsRoute: Route.update({
		id: "/skills",
		path: "/skills",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
