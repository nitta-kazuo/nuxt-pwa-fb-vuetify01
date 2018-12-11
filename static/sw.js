importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e8b777dd07d5765f8b2.js",
    "revision": "cbc91134a16bdc61366dd948390d4cf2"
  },
  {
    "url": "/_nuxt/19db677b5b6e8c3f07f6.js",
    "revision": "548ef70b2013a6ecf4f3179be14214b5"
  },
  {
    "url": "/_nuxt/40b8977be7f67c5454e4.js",
    "revision": "8ed62a73d210a3c89e66ce73396afce3"
  },
  {
    "url": "/_nuxt/5be813b184b976e974b1.js",
    "revision": "40b360fce7dca0562ee957de20c8d902"
  },
  {
    "url": "/_nuxt/5bfcc459217a05453524.js",
    "revision": "f44ab31b2ea96eb4cc409846ee647b60"
  },
  {
    "url": "/_nuxt/6fc3780f62dfb7095105.js",
    "revision": "b5eb1018e9d1971d4c81f00571b2267e"
  },
  {
    "url": "/_nuxt/c9154330067bff69ecf7.js",
    "revision": "15e60c2638cfb3fdba3dd853e74add9f"
  }
], {
  "cacheId": "nuxt-pwa-fb-vuetify02",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp(''), workbox.strategies.networkFirst({"cacheExpiration":{"maxAgeSeconds":86400}}), 'GET')
