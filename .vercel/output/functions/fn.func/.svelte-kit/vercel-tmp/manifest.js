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
		client: {"start":"_app/immutable/entry/start.Bx-ItGeU.js","app":"_app/immutable/entry/app.B5zXwaRo.js","imports":["_app/immutable/entry/start.Bx-ItGeU.js","_app/immutable/chunks/entry.B9D8i4wQ.js","_app/immutable/chunks/runtime.D03TYric.js","_app/immutable/chunks/index-client.DhEXzatg.js","_app/immutable/entry/app.B5zXwaRo.js","_app/immutable/chunks/runtime.D03TYric.js","_app/immutable/chunks/render.Dd1mBPDN.js","_app/immutable/chunks/disclose-version.PQL5KBpB.js","_app/immutable/chunks/props.DBcn2Srq.js","_app/immutable/chunks/index-client.DhEXzatg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
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
