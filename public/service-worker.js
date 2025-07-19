/* eslint-disable no-restricted-globals */
// Enhanced Service Worker for First Aid Training PWA
// Provides comprehensive offline functionality including video downloads

const CACHE_NAME = 'first-aid-training-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';
const VIDEO_CACHE = 'videos-v2';
const IMAGE_CACHE = 'images-v2';

const STATIC_ASSETS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/modules',
  '/progress',
  // Add fallback offline page
  '/offline.html'
];

// Network-first strategy for API calls, cache-first for static assets
const CACHE_STRATEGIES = {
  static: ['/', '/static/', '/manifest.json'],
  networkFirst: ['/api/'],
  cacheFirst: ['/images/', '/thumbnails/'],
  staleWhileRevalidate: ['/modules', '/progress']
};

// Install event - cache static assets and offline page
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS)),
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// Activate event - clean up old caches and claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (![STATIC_CACHE, DYNAMIC_CACHE, VIDEO_CACHE, IMAGE_CACHE].includes(cacheName)) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Claim all clients
      self.clients.claim()
    ])
  );
});

// Fetch event with advanced caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle video requests specially
  if (request.url.includes('/videos/') || request.headers.get('range')) {
    event.respondWith(handleVideoRequest(request));
    return;
  }

  // Handle different types of requests
  if (request.method === 'GET') {
    event.respondWith(handleGetRequest(request));
  }
});

// Handle video requests with range support
async function handleVideoRequest(request) {
  const cache = await caches.open(VIDEO_CACHE);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const response = await fetch(request);
    if (response.status === 200 || response.status === 206) {
      // Cache successful video responses
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    // Return offline fallback for videos
    return new Response('Video not available offline', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Handle GET requests with different caching strategies
async function handleGetRequest(request) {
  const url = new URL(request.url);

  // Static assets - cache first
  if (CACHE_STRATEGIES.static.some(pattern => url.pathname.startsWith(pattern))) {
    return cacheFirst(request, STATIC_CACHE);
  }

  // Images - cache first
  if (CACHE_STRATEGIES.cacheFirst.some(pattern => url.pathname.includes(pattern))) {
    return cacheFirst(request, IMAGE_CACHE);
  }

  // API calls - network first
  if (CACHE_STRATEGIES.networkFirst.some(pattern => url.pathname.includes(pattern))) {
    return networkFirst(request, DYNAMIC_CACHE);
  }

  // App routes - stale while revalidate
  if (CACHE_STRATEGIES.staleWhileRevalidate.some(pattern => url.pathname.includes(pattern))) {
    return staleWhileRevalidate(request, DYNAMIC_CACHE);
  }

  // Default strategy - network first with fallback
  return networkFirst(request, DYNAMIC_CACHE);
}

// Caching strategies
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return getOfflineFallback(request);
  }
}

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    return cachedResponse || getOfflineFallback(request);
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  // Fetch in background to update cache
  const fetchPromise = fetch(request).then(response => {
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => {});

  // Return cached version immediately, or wait for network
  return cachedResponse || fetchPromise || getOfflineFallback(request);
}

// Offline fallback responses
function getOfflineFallback(request) {
  const url = new URL(request.url);

  if (request.destination === 'document') {
    return caches.match('/offline.html');
  }

  if (request.destination === 'image') {
    return new Response('', {
      status: 200,
      headers: { 'Content-Type': 'image/svg+xml' },
    });
  }

  return new Response('Offline', {
    status: 503,
    statusText: 'Service Unavailable'
  });
}

// Handle messages from the main thread
self.addEventListener('message', (event) => {
  const { type, payload } = event.data;

  switch (type) {
    case 'DOWNLOAD_VIDEO':
      downloadVideo(payload.videoUrl, payload.videoId);
      break;
    case 'DELETE_VIDEO':
      deleteVideo(payload.videoId);
      break;
    case 'CACHE_MODULE_DATA':
      cacheModuleData(payload);
      break;
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;
    default:
      break;
  }
});

// Download and cache video
async function downloadVideo(videoUrl, videoId) {
  try {
    const cache = await caches.open(VIDEO_CACHE);
    const response = await fetch(videoUrl);

    if (response.status === 200) {
      await cache.put(videoUrl, response);

      // Notify main thread of successful download
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'VIDEO_DOWNLOADED',
            payload: { videoId, success: true }
          });
        });
      });
    }
  } catch (error) {
    console.error('Failed to download video:', error);

    // Notify main thread of failed download
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({
          type: 'VIDEO_DOWNLOADED',
          payload: { videoId, success: false, error: error.message }
        });
      });
    });
  }
}

// Delete cached video
async function deleteVideo(videoId) {
  try {
    const cache = await caches.open(VIDEO_CACHE);
    const keys = await cache.keys();

    for (const request of keys) {
      if (request.url.includes(videoId)) {
        await cache.delete(request);
      }
    }

    // Notify main thread of successful deletion
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({
          type: 'VIDEO_DELETED',
          payload: { videoId, success: true }
        });
      });
    });
  } catch (error) {
    console.error('Failed to delete video:', error);
  }
}

// Cache module data (text content, thumbnails, etc.)
async function cacheModuleData(moduleData) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);

    // Cache module thumbnails
    for (const video of moduleData.videos || []) {
      if (video.thumbnail) {
        try {
          const response = await fetch(video.thumbnail);
          if (response.status === 200) {
            await cache.put(video.thumbnail, response);
          }
        } catch (error) {
          console.log('Failed to cache thumbnail:', video.thumbnail);
        }
      }
    }
  } catch (error) {
    console.error('Failed to cache module data:', error);
  }
}
