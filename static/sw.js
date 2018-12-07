importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0dff94bfbd6b9623f4ec.js",
    "revision": "f4d3210deea03506d85a9bcd084eda58"
  },
  {
    "url": "/_nuxt/48de69b82ee6930af3a3.js",
    "revision": "a9177947fab7f4fd9c5c797d6e62c046"
  },
  {
    "url": "/_nuxt/b13c26d1baaef3fabdfe.js",
    "revision": "828c7641f6372a720a560d83acb04846"
  },
  {
    "url": "/_nuxt/cc0b57177393bfad6d01.js",
    "revision": "edd67bb4f477b30798c78fcaa40db622"
  },
  {
    "url": "/_nuxt/d0e542d5c58dde10a80e.js",
    "revision": "a3c4082c696e024a924de565994ee443"
  },
  {
    "url": "/_nuxt/d5566934a2c9f73fdc39.js",
    "revision": "5a397d5de7940aefdf990152dbcc55cb"
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
