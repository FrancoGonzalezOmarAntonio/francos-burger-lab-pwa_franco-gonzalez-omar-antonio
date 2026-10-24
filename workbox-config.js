module.exports = {
	globDirectory: '.',
	globPatterns: [
		// jpg, jpeg y webp: las fotos de tus 15 productos
		'**/*.{js,html,json,svg,png,jpg,jpeg,webp,css}'
	],
	// Archivos que NO son parte de la app: no se precachean
	globIgnores: [
		'**/node_modules/**/*',
		'servidor-ssr*/**/*',
		// tu servidor Django (SSR) se llama servidor-FAGO: incluye venv/ con miles de archivos
		'servidor-FAGO/**/*',
		// el propio Service Worker y su librería no se precachean a sí mismos
		'sw.js',
		'workbox-*.js',
		'docs/**/*',
		'**/*.report.html',
		'reporte-lighthouse*.html',
		'workbox-config.js'
	],
	swDest: 'sw.js',
	// Activa el Service Worker nuevo de inmediato y toma control de las pestañas abiertas
	skipWaiting: true,
	clientsClaim: true,
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
