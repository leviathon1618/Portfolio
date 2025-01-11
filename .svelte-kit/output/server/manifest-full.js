export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["address_icon.png","building_icon.png","calendar_icon.png","developer image.webp","dev_icon.png","email_icon.png","favicon.png","first_image.jpg","global.css","grad_photo.webp","green_dots.webp","image.webp","index.html","Levi_Delaney_Resume.pdf","my_photo.webp","phone_icon.png","resume_image.jpg","resume_image.webp","reviews/joel_review.txt","reviews/josh_review.txt","reviews/oscar_review.txt","reviews/saurabh_review.txt","robots.txt","splash_image.jpg","splash_image.webp","website_images/heritage-org-nz.png","website_images/heritage-org-nz.webp","website_images/itm-co-nz.png","website_images/itm-co-nz.webp","website_images/joel photo.jpg","website_images/josh photo.jpg","website_images/mercury-co-nz.png","website_images/mercury-co-nz.webp","website_images/oscar photo.jpg","website_images/powerco-co-nz.png","website_images/powerco-co-nz.webp","website_images/rotoruanz.png","website_images/rotoruanz.webp","website_images/saurabh photo.jpg","website_images/smartly.png","website_images/smartly.webp","website_images/southerncross-co-nz.png","website_images/southerncross-co-nz.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg",".css":"text/css",".html":"text/html",".pdf":"application/pdf",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.CDjMBiEs.js","app":"_app/immutable/entry/app.47B2BxyM.js","imports":["_app/immutable/entry/start.CDjMBiEs.js","_app/immutable/chunks/entry.C0DWR1nY.js","_app/immutable/chunks/runtime.C2SNO2lF.js","_app/immutable/chunks/index-client.BS41tC7m.js","_app/immutable/entry/app.47B2BxyM.js","_app/immutable/chunks/runtime.C2SNO2lF.js","_app/immutable/chunks/render.CdNy5nix.js","_app/immutable/chunks/disclose-version.DwQCBEIu.js","_app/immutable/chunks/props.BUyuC1yR.js","_app/immutable/chunks/index-client.BS41tC7m.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Thanks",
				pattern: /^\/Thanks\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
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
