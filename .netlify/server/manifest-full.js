export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","finger.png","git.png","head.svg","html.webp","invoice.webp","IP.webp","me.png","me.svg","me2.png","node.webp","password.webp","portfolio.json","portfolio.webp","python.webp","Resume.pdf","sass.webp","simon.webp","svelte.webp","TS.webp","vue.webp","WeChat.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp",".json":"application/json",".pdf":"application/pdf"},
	_: {
		entry: {"file":"_app/immutable/start-6fd78b95.js","imports":["_app/immutable/start-6fd78b95.js","_app/immutable/chunks/index-fec6562e.js","_app/immutable/chunks/singletons-51974c8e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/portfolio/[item]",
				pattern: /^\/portfolio\/([^/]+?)\/?$/,
				params: [{"name":"item","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,2], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
