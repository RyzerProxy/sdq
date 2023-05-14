importScripts("/pxs/uv/beta/uv.bundle.js");
importScripts("/pxs/uv/beta/uv.config.js");
importScripts("/pxs/uv/beta/uv.sw.js");

const UV = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
	if (event.request.url.startsWith(location.origin + self.__uv$config.prefix))
		if (event.request.url.includes("netv2.now.gg")) {
			event.respondWith(UV.fetch(event.request.url.replace("netv2.now.gg", "nowgg.nova.rip")));
		} else {
			event.respondWith(UV.fetch(event));
		}
		
});
