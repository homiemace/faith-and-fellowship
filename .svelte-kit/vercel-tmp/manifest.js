export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.svg","fonts/Muli-Bold.ttf","fonts/Muli-BoldItalic.ttf","fonts/Muli-ExtraLight.ttf","fonts/Muli-ExtraLightItalic.ttf","fonts/Muli-Italic.ttf","fonts/Muli-Light.ttf","fonts/Muli-LightItalic.ttf","fonts/Muli-Semi-BoldItalic.ttf","fonts/Muli-SemiBold.ttf","fonts/Muli.ttf","images/faithandfellowshipbackground.jpg","mstile-150x150.png","robots.txt","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"text/xml",".svg":"image/svg+xml",".ttf":"font/ttf",".jpg":"image/jpeg",".txt":"text/plain",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.BpUzyq4R.js","app":"_app/immutable/entry/app.B5Gkl29V.js","imports":["_app/immutable/entry/start.BpUzyq4R.js","_app/immutable/chunks/entry.DKnvZz0t.js","_app/immutable/chunks/scheduler.DWBu5tsU.js","_app/immutable/entry/app.B5Gkl29V.js","_app/immutable/chunks/scheduler.DWBu5tsU.js","_app/immutable/chunks/index.frEX2zQP.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js'))
		],
		routes: [
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/announcements",
				pattern: /^\/announcements\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/bible-search",
				pattern: /^\/bible-search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
