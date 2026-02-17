const CACHE_NAME = 'thumbsapp-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/offline.html',
    '/css/core/base.css',
    '/js/core/app.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
            .catch(() => caches.match('/offline.html'))
    );
});