const cacheName = 'my-cache';
const filesToCache = [
  '/ate',
  'index.html',
  'styles.css',
  'app.js',
  'manifest.webmanifest',
  'app-icon.svg',
  'menu-button-icon.svg',
  'close-menu-button-icon.svg',
  'favicon.png',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png'
];
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll(filesToCache))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
    .then(response => response ? response : fetch(e.request))
  )
});
