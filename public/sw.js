 // version development 1.2.10 oyea oyea
 // ALMOST WROKING oh yeaysvgadjkfvgvgh696969
 self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('rnsHalls').then(function(cache) {
            return cache.addAll([
                './android-chrome-192x192.png',
                './apple-touch-icon.png',
                './browserconfig.xml',
                './favicon-16x16.png',
                './favicon-32x32.png',
                './favicon.ico',
                './mstile-144x144.png',
                './mstile-70x70.png',
                './safari-pinned-tab.svg',
                './site.webmanifest',
                './assets/material-icons.css',
                './assets/material-icons.woff2',
                './assets/Roboto-Regular.ttf',
                './media/fb.png',
                './media/google.png',
                './media/twitter.png',
            ]);
        })
    );
    self.skipWaiting();
});


self.addEventListener('fetch', function(e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});