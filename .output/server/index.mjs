globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-11-09T11:37:11.525Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"1e01-ZVaqEbeOGzBx1iPBmXFL3Gnu80A\"",
		"mtime": "2026-11-09T11:37:02.195Z",
		"size": 7681,
		"path": "../public/favicon.ico"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"1ca6-VfmLU28jpSL37KUI2TMOukSfmfM\"",
		"mtime": "2026-11-09T11:37:06.581Z",
		"size": 7334,
		"path": "../public/favicon.png"
	},
	"/assets/calendar-Drfe7TDl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f6-ZFQzb9qENj8d8qpbMfdnxBFBrVc\"",
		"mtime": "2026-11-09T14:22:11.640Z",
		"size": 246,
		"path": "../public/assets/calendar-Drfe7TDl.js"
	},
	"/assets/cert-ai-DO_xLgZu.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c24b-PjmFwcyq4Lmxq3WqckhedDOE90g\"",
		"mtime": "2026-11-09T14:22:11.645Z",
		"size": 115275,
		"path": "../public/assets/cert-ai-DO_xLgZu.jpg"
	},
	"/assets/cert-cyber-CNTgPrer.jpg": {
		"type": "image/jpeg",
		"etag": "\"1af72-HxzdZO6vzNXurW3DLwrJKwPoNGI\"",
		"mtime": "2026-11-09T14:22:11.646Z",
		"size": 110450,
		"path": "../public/assets/cert-cyber-CNTgPrer.jpg"
	},
	"/assets/cert-android-BYL2537L.jpg": {
		"type": "image/jpeg",
		"etag": "\"36ea1-2wbHAUH6AYFyKhtAeNTEvw0VGKY\"",
		"mtime": "2026-11-09T14:22:11.645Z",
		"size": 224929,
		"path": "../public/assets/cert-android-BYL2537L.jpg"
	},
	"/assets/cert-office-qHjv6Cqv.jpg": {
		"type": "image/jpeg",
		"etag": "\"33fb2-9If+F+XErNtwayqSAYrJhoWIH74\"",
		"mtime": "2026-11-09T14:22:11.647Z",
		"size": 212914,
		"path": "../public/assets/cert-office-qHjv6Cqv.jpg"
	},
	"/assets/database-B-Xt54qP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"385-Z2UWUfphzsmzlB2FPtPVrNXGMFA\"",
		"mtime": "2026-11-09T14:22:11.641Z",
		"size": 901,
		"path": "../public/assets/database-B-Xt54qP.js"
	},
	"/assets/map-pin-BENxOChB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20f-yoA9sIcasY0ybs1U9Ts2x6/vLeY\"",
		"mtime": "2026-11-09T14:22:11.641Z",
		"size": 527,
		"path": "../public/assets/map-pin-BENxOChB.js"
	},
	"/assets/pengalaman-DdilILtc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1476-1mZrhq1URkT6hTGNUZt851bOpvE\"",
		"mtime": "2026-11-09T14:22:11.642Z",
		"size": 5238,
		"path": "../public/assets/pengalaman-DdilILtc.js"
	},
	"/assets/CV-M-Yarda-Andika-C_ovfB5i.pdf": {
		"type": "application/pdf",
		"etag": "\"4da3b-AllyuYzn0I7pkf2gxv9pFAvLaLI\"",
		"mtime": "2026-11-09T14:22:11.644Z",
		"size": 318011,
		"path": "../public/assets/CV-M-Yarda-Andika-C_ovfB5i.pdf"
	},
	"/assets/index-Bn6cOkBw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f469-cCzTTcJ2BwcsUWPu/gWTkxKRxlk\"",
		"mtime": "2026-11-09T14:22:11.639Z",
		"size": 390249,
		"path": "../public/assets/index-Bn6cOkBw.js"
	},
	"/assets/project-bpjn-C2XdNCjp.jpg": {
		"type": "image/jpeg",
		"etag": "\"238e3-wg1g6w4fE0dE8psK4drFfLEifSU\"",
		"mtime": "2026-11-09T14:22:11.648Z",
		"size": 145635,
		"path": "../public/assets/project-bpjn-C2XdNCjp.jpg"
	},
	"/assets/project-coffee-BuFh_kbS.jpg": {
		"type": "image/jpeg",
		"etag": "\"1944d-VRwuGna1v1aISc9ZirRPvsH2hVY\"",
		"mtime": "2026-11-09T14:22:11.649Z",
		"size": 103501,
		"path": "../public/assets/project-coffee-BuFh_kbS.jpg"
	},
	"/assets/project-carbon-B3kMyO6U.jpg": {
		"type": "image/jpeg",
		"etag": "\"1acf4-9NQW7wDKgeA/kwCxpXtbB90vbUI\"",
		"mtime": "2026-11-09T14:22:11.649Z",
		"size": 109812,
		"path": "../public/assets/project-carbon-B3kMyO6U.jpg"
	},
	"/assets/project-blockchain-S8lSzEpI.jpg": {
		"type": "image/jpeg",
		"etag": "\"229c9-FAh2ERKD8K/RMmxuN/VqaC97MzQ\"",
		"mtime": "2026-11-09T14:22:11.647Z",
		"size": 141769,
		"path": "../public/assets/project-blockchain-S8lSzEpI.jpg"
	},
	"/assets/ProjectCard-BEu_UlRG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"770-TSRr6hEcjF2d7GGPkDybK9EDAdI\"",
		"mtime": "2026-11-09T14:22:11.639Z",
		"size": 1904,
		"path": "../public/assets/ProjectCard-BEu_UlRG.js"
	},
	"/assets/projects-C2t8Cvsp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a8-Tzh0tpU84oLM7sTUSt+wZbJHGZg\"",
		"mtime": "2026-11-09T14:22:11.642Z",
		"size": 936,
		"path": "../public/assets/projects-C2t8Cvsp.js"
	},
	"/assets/SectionHeading-DkpRHXCh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"211-IwCSgfoWq6hj2xsE3Z9D4Ie4jlU\"",
		"mtime": "2026-11-09T14:22:11.640Z",
		"size": 529,
		"path": "../public/assets/SectionHeading-DkpRHXCh.js"
	},
	"/assets/routes-CCkwEYwp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2177-WXxSJQeuBL6P6+1kCayS1uIN7tU\"",
		"mtime": "2026-11-09T14:22:11.642Z",
		"size": 8567,
		"path": "../public/assets/routes-CCkwEYwp.js"
	},
	"/assets/project-crypto-B8xRb79c.jpg": {
		"type": "image/jpeg",
		"etag": "\"1841c-e1LY/6sgKvoh6vbWTsqUGEPo1Fg\"",
		"mtime": "2026-11-09T14:22:11.650Z",
		"size": 99356,
		"path": "../public/assets/project-crypto-B8xRb79c.jpg"
	},
	"/assets/sertifikat-DGlhJsqH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9596-/t3uX8fuXZMac2G9oJN4e5ZsgzY\"",
		"mtime": "2026-11-09T14:22:11.643Z",
		"size": 38294,
		"path": "../public/assets/sertifikat-DGlhJsqH.js"
	},
	"/assets/styles-D5nUtUW4.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14a8c-7j6c0fCadK24EL1nr5ykV7f1bYI\"",
		"mtime": "2026-11-09T14:22:11.650Z",
		"size": 84620,
		"path": "../public/assets/styles-D5nUtUW4.css"
	},
	"/assets/skills-CiqTb2qe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b59-XocAGjj54f85/cLvAdFPYfTyShk\"",
		"mtime": "2026-11-09T14:22:11.643Z",
		"size": 2905,
		"path": "../public/assets/skills-CiqTb2qe.js"
	},
	"/assets/yarda-profile-SNDHUMdc.png": {
		"type": "image/png",
		"etag": "\"3d7c7-GspluCqxoMzv7BUZpxOHhqH32zw\"",
		"mtime": "2026-11-09T14:22:11.651Z",
		"size": 251847,
		"path": "../public/assets/yarda-profile-SNDHUMdc.png"
	},
	"/assets/yarda-logo-B_PKGF4H.png": {
		"type": "image/png",
		"etag": "\"62ff-Dd63JuGy8yAG7eL1/D8JUM5DStg\"",
		"mtime": "2026-11-09T14:22:11.651Z",
		"size": 25343,
		"path": "../public/assets/yarda-logo-B_PKGF4H.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy__PqY5W = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy__PqY5W
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
