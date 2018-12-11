importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/19db677b5b6e8c3f07f6.js",
    "revision": "548ef70b2013a6ecf4f3179be14214b5"
  },
  {
    "url": "/_nuxt/40b8977be7f67c5454e4.js",
    "revision": "8ed62a73d210a3c89e66ce73396afce3"
  },
  {
    "url": "/_nuxt/5bfcc459217a05453524.js",
    "revision": "f44ab31b2ea96eb4cc409846ee647b60"
  },
  {
    "url": "/_nuxt/63a441a1852019e06763.js",
    "revision": "ec738f580de7a9985be453110bb393f6"
  },
  {
    "url": "/_nuxt/6fc3780f62dfb7095105.js",
    "revision": "b5eb1018e9d1971d4c81f00571b2267e"
  },
  {
    "url": "/_nuxt/7b0c7f6f9f60f6bb085f.js",
    "revision": "9c7d620760c4ddfccb5d5e62b90f28d9"
  },
  {
    "url": "/_nuxt/8faca668de11ae75a5f1.js",
    "revision": "93aaade981ff6b769186334be964ea3a"
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
