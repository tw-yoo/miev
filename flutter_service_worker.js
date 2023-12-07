'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3c1851d5c685d8350813a671b53bb3ef",
"index.html": "4fed6066d92e5a615dfa599f24fd88a4",
"/": "4fed6066d92e5a615dfa599f24fd88a4",
"main.dart.js": "54176f5af2b57af6324d02013906775e",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3aeacc9238e3767464ce02bbc68c9f32",
".git/ORIG_HEAD": "3c2a330ea78358949737f7f1628923ea",
".git/config": "8f8b9f968aa960aa96a544f12d085fd2",
".git/objects/92/a297c05639e3fcfcb91287b5c6fe4d769b9168": "bb654e18586f58daf95c454f5cf94fef",
".git/objects/9b/b84fcb74b0e577052bb85906649e1b4e346b0b": "def1ade8ef5436c7c59b62a156deb4c9",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/56/e6674ca32258e58fa3b217bb1140439bb868c2": "1b9234b1dad09bbbc7c6631730fc1981",
".git/objects/58/607fbf44fdf7b48db931c7a29f24a98e6c3ff0": "8cdae012108f82a1ba9cd8fc61e2d097",
".git/objects/b5/2f549f72c657f706dc33ab90beab575b8546aa": "5bb1c76701f4f520c6cbc5d3eeaf186a",
".git/objects/be/3a13d3652472ccfe3216fca30ab688892546b3": "a585632d6213bbd8207a5878b5777702",
".git/objects/be/9f1456dc6a68b9290a2a8e326d96e8066f945a": "71011181d88cbb2ae5b84122c115c7d6",
".git/objects/be/a7c8b8eeb3bba6f53c6e95133d872d82ac9776": "843edbf169241fbf11f9757d0648fd09",
".git/objects/b3/cb6a59fa88d04e6c82ce4d1fbe7a5dea81317d": "d85f40d025aaf757b19b6b0a298c9c4e",
".git/objects/b4/a273023beecd6b9efdda6509964324e68548d6": "2a1e994f400970986b4530c216710e06",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7": "1780d82c383ef506d78eeb6a874d2dfa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/135a57d5b7149f9efdf20b31fe4823ff55b906": "c59318b8dd616b5b9c6da982daef15f4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/263ecb05993d2da18026da5c9d03012d9ab0e2": "a99a69b6c0260adfeaccc9992d2da771",
".git/objects/f2/07b219bb75ff3782ad58a8d2dc01486e661ca8": "83af902667cf9a9d37d8f651b33278bc",
".git/objects/4b/be975a80ee144275edaf6263ef3fc354135a35": "83d068dd6d30aa2f833e6d3f262c8fde",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/11/3a91880672477f1053a75d0810bcdb48bdb5a5": "67afc448281b649acf0acd381b86780a",
".git/objects/7c/cb8c4ec9c768e4d32694487afd5df86f8f4700": "3f3dcf4c11edb0ba3d071f35d5573a38",
".git/objects/16/38b544caa79d7eb03815c1f628922512561490": "2ad231b72ea9bddf4e755a21cc09ecaf",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/518456790ca77c7cd0ebc400ddb7f3fd67aa47": "0e4832ce5a716028c96c144fac55f3f1",
".git/objects/28/2c008f3f34a08f1addfa1110c0f536db36565a": "c6a10e18e58e54aaf4952ae9b8a082f3",
".git/objects/17/6e69e5ec7be816267e83f3043198d2ff290faa": "96270146d1e0047ace7c9307ddc31688",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/0609737be836c3b3236a43bb3ce246e7fa2028": "4a1ce82e89e88de7691ddd5f6b45e780",
".git/objects/26/0affbcf156d47ddc81b053d6918818163e60b0": "be36dfa12728316d851d3c33f9f7d7bf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/1f9f8128a481a75ca4cb58f4fedb2a9875dac6": "c03ad3ab0651044411756541daac0a3f",
".git/objects/37/52bd0e68442383c1e6270078eddab53928e731": "1f9f7a279c12e9d5af1d0e08d8c2fcfa",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/9b810fa6f11853f42b7d3391f2f2dad1d64199": "fb780f72c5bce1b0a86da23e4729bf27",
".git/objects/99/5556c62f6ae9ffd24d0d5ee3defb23e2bb53bb": "cee43b4a10091abf32d449965231ab7f",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0a/9bb8c7d72e44a23662cc38c525400143aff6d7": "498bb5cfd15463ba609fedda31498afa",
".git/objects/b8/df50921991f1fd85dd5e1fe78fbdb4d7590a41": "a4e1b0e0a37758db2fa03ece4bd3e98e",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/c2711122b1709854c9daf69f343003252ad1c7": "7d7a132d4289c461bc30ca839d8e5b99",
".git/objects/e8/06fb86ee39d857180d0f4f8264750a757ec3f9": "f55a7aa970fee1622c0c5cf598223324",
".git/objects/e0/df58d7ea83e89a9079f7abd812b03f0b21bd02": "faa1e74ce65a8632dd94af4a261acc7b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/38c7cf051cbcf20a737632656f3a20bdecc622": "da3c78d588b7ef9900f9c7f6d3417464",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/4f/56463d55e8e2d256151a22772c58d1a9a4b057": "c27fa7c6f02c063e88f383a6f16ef7c3",
".git/objects/8d/0cf06fd7778692e7be21ddecd16cd974f6bbd4": "eaa1f01590d392e9921d29d83707d0cc",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/82/a4ec82199ef5d43f442efc69958287638c0be4": "8b5a4444ff6f6262a56223749e505229",
".git/objects/40/4465b67fc2f68d73965f42b9f0355685da34a8": "3510e2243611524edb2e937da2b67287",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "48c63a7f91bfdd5f67ab0201c77a0a03",
".git/logs/refs/heads/main": "48c63a7f91bfdd5f67ab0201c77a0a03",
".git/logs/refs/remotes/origin/main": "b0a7cede6e659d004f4a0c5e5ddb5bec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9f0cf9bde3378ccb6d85edc3eef92fd5",
".git/refs/remotes/origin/main": "9f0cf9bde3378ccb6d85edc3eef92fd5",
".git/index": "d65e0db0553d287abadd4614cf62b8d5",
".git/COMMIT_EDITMSG": "cacfe287c0d0c92ff3422b1b8710741c",
".git/FETCH_HEAD": "8ba9542c59e6f8ae2ea2263eb21874d2",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"assets/NOTICES": "5739f137fecf31560c70379ef2cb8b4e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
