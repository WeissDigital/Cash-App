const CACHE_NAME = 'cashapp';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  // просто пропускаем — главное чтобы SW был
});
