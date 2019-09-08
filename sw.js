let staticCache = 'staticVersion1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('staticVersion1').then(function(cache) {
      return cache.addAll([
        './',
        './restaurant.html',
        './index.html',
        './js/dbhelper.js',
        './js/main.js',
        './js/restaurant_info.js',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg',
        './data/restaurants.json',
        './css/styles.css'
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName.startsWith('static') &&
          cacheName != staticCacheName;
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;
      return fetch(event.request);
      }
    )
  )
})
