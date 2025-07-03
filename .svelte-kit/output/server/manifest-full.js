export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Highres_Brownie.glb","Highres_Brownie_couple.glb"]),
	mimeTypes: {".glb":"model/gltf-binary"},
	_: {
		client: {start:"_app/immutable/entry/start.CFAtLOaw.js",app:"_app/immutable/entry/app.B039WKlu.js",imports:["_app/immutable/entry/start.CFAtLOaw.js","_app/immutable/chunks/BqkxySNn.js","_app/immutable/chunks/DdsFtxsH.js","_app/immutable/chunks/BYAblVNE.js","_app/immutable/entry/app.B039WKlu.js","_app/immutable/chunks/BYAblVNE.js","_app/immutable/chunks/DdsFtxsH.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/BU0xgOax.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
