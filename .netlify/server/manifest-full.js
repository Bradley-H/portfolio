export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","finger.png","git.png","head.svg","html.webp","invoice.webp","IP.webp","me.png","me.svg","me2.png","node.webp","password.webp","portfolio.json","portfolio.webp","python.webp","Resume.pdf","sass.webp","simon.webp","svelte.webp","TS.webp","vue.webp","WeChat.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp",".json":"application/json",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.72e77769.js","app":"_app/immutable/entry/app.922a02b4.js","imports":["_app/immutable/entry/start.72e77769.js","_app/immutable/chunks/index.d3d7413e.js","_app/immutable/chunks/singletons.c9bc3520.js","_app/immutable/entry/app.922a02b4.js","_app/immutable/chunks/index.d3d7413e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/portfolio/[item]",
				pattern: /^\/portfolio\/([^/]+?)\/?$/,
				params: [{"name":"item","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,2,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
