importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07a471a908f10e1b965c.js",
    "revision": "bd1e4a1c1e4c358b0d540a4de342cf0a"
  },
  {
    "url": "/_nuxt/08adba0b1f84770f7f21.js",
    "revision": "6a4fb88b0243279ee1748a990668d900"
  },
  {
    "url": "/_nuxt/1ca39926f6bed4f1632f.js",
    "revision": "31d63f30ca04dcc4a33eb29ad81af05e"
  },
  {
    "url": "/_nuxt/2005ac3ee956edf17401.js",
    "revision": "84556f7c495e9631131eaaa7638ab80c"
  },
  {
    "url": "/_nuxt/51e9d972e0e596d49872.js",
    "revision": "904c3c22ad20aafb8c677eeb19a1c422"
  },
  {
    "url": "/_nuxt/b46e3baf6f3015cee990.js",
    "revision": "2412cdc3f5173eb0f66640f78d1b12c3"
  },
  {
    "url": "/_nuxt/ef361fcd7df5fb225085.js",
    "revision": "97f8e412e1efded118a7a30816c89097"
  }
], {
  "cacheId": "nuxt-pwa-fb-vuetify01",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp(''), workbox.strategies.networkFirst({"cacheExpiration":{"maxAgeSeconds":86400}}), 'GET')
