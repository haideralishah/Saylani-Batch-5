
var cacheName = 'weatherPWA-final-2';
var filesToCache = [
    '/',
    '/index.html',
    '/scripts/app.js',
    // '/scripts/baba.js',
    '/styles/inline.css',
    '/images/clear.png',
    '/images/cloudy-scattered-showers.png',
    '/images/cloudy.png',
    '/images/fog.png',
    '/images/ic_add_white_24px.svg',
    '/images/ic_refresh_white_24px.svg',
    '/images/partly-cloudy.png',
    '/images/rain.png',
    '/images/scattered-showers.png',
    '/images/sleet.png',
    '/images/snow.png',
    '/images/thunderstorm.png',
    '/images/wind.png'
];


self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install', e);
    e.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                console.log('[ServiceWorker] Caching app shell', cacheName, cache);
                return cache.addAll(filesToCache);
            })
    );
});

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            console.log(keyList, 'keys')
            return Promise.all(keyList.map(function (key) {
                console.log(key, keyList, '****', cacheName, key !== cacheName)
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
});


