'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "59d0d19fc45ca69230d858f60a5557f8",
".git/config": "5fa7a8c4a532ae705556f91e38bbdd4c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cf8ba425e600df8b957ea9fd471e5314",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "65398c551543a5e17f7c608b0a847a87",
".git/logs/refs/heads/main": "4887df03959a9786bce8a5c39a223bf1",
".git/logs/refs/remotes/origin/main": "7c079676715f0d3d05bca4faef4bfae0",
".git/objects/07/4ba37099353d6e9e5502f4a08db871b760f147": "ac8d5b5bc979d1be29cfdca77fcb5dbc",
".git/objects/09/6ac1c1f253b3791332da39623a7e85dda70dfc": "6be57a4df4e8a96c9ff62ae913e7cd9e",
".git/objects/0a/6d2b4d83ecb77fb66ee79664b187809159d940": "f591028334cfc14fa28b2f74389ef12e",
".git/objects/12/223b03882351f952753c5be90168657b5120d6": "1b0894db5d85944aaede40c94fb13b14",
".git/objects/1c/cdfbe5242823ed26d9505bb9dc990396b4dc4d": "1d3869b4467a06835a1b42c9b9e85dbb",
".git/objects/1d/d435b9af21ff1587d2ef5411ad98951b64429c": "ee192f91ecc9968158005bf835183345",
".git/objects/20/0de82f2f525fd12772000430b6097639f2a3a7": "95b5fd380aa86fb346fd6648778a5c17",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/8088b3a46d8c1d9d73b8c7b0b9b09c0f5f36de": "7a75885622063e40493cd9705c907d96",
".git/objects/26/7b47b00079ac518568eb78c17c69f61ae3b271": "896416e86b5ef8331db3ce82620f2b31",
".git/objects/36/a9f78e43efa7667acda9cbb0f46e9ded2476b8": "baa0cb00db29b8643a64c868126a7722",
".git/objects/3e/dd9e1b2d2d46c6d967f55887ca5e690b6ad64c": "47406e841df0ed06768982fef9083d2b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/2d758bccd823d028e3fa52e038a994476dd52e": "3aa8ff281151bf67060e99e4f2d71937",
".git/objects/55/4f3d512722f47a9da01469c3412cd7cf8e993a": "c07a938a8ac5b11f81b7564daabe8554",
".git/objects/5c/af173655d0ba9106f76320f3f6cacd131845cd": "317240be21b3a9e57dac8547136b02fb",
".git/objects/5e/6bf9a8b1a7d2555baa632f2ab818b5b801a224": "5e59e77b42fd650b17b89ec8a76cbe13",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/919138c76ea089f935d58727750087e28b6688": "6afec535929940650afca426ee1d79aa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/c285f9cf8057b8dc8d5ba84f041da8f51a6321": "c5c3bf135989a0376b92109c6bd2ae62",
".git/objects/94/da1c8047a0ac1485556a95936cacdce265a507": "5a9a25f8a139f5c2b3b2bc631f21d40e",
".git/objects/9b/34a0f7866b1f9085af414acef1977b8b18be2a": "f03241abe329d70a8eb4fa7624d52434",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/97e2b0f6e7bc394c4c305efbed56306c6190c2": "295338730c0e5e929e7e3d1fd9ab6801",
".git/objects/b3/ad1e67a7fa3855b026db952d76f6a206947a98": "da1fab0f3dfdd7c41c37bad6c4bc4129",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/a98407c52375a41d41f2d35e20992bf1dd0e12": "5fd2ae3e93944f0acfdceb50d9ef0ea9",
".git/objects/d0/8a3e0f40e50c4a79f3ed24e594e19ffe5226f5": "f38c8513c36fde576c281c59d4113d4a",
".git/objects/dc/e1f5a579dc030f2d3e2487c35934034d588b7e": "a4a26df6df80db6ea67cff04000e71cc",
".git/objects/e2/a10125e140bd7468346d37144a2261e8d2d3c1": "504320e6f8f5dfcdf0b1a307bab39302",
".git/objects/e5/872968cc425fa8960b437b8c045386871e5a45": "09e8a943215f0fcda3372c82efd864ab",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f7/0060689fffb6012e1cb1c4a8bcbfaf818b31a3": "694a469f30a1bdef881cfc69f1eef01f",
".git/objects/f9/3e3a1a1525fb5b91020da86e44810c87a2d7bc": "3bfabf2b9b9d1a341e4263f23c96a46b",
".git/objects/fa/23df4c52b55195782ca92034c0baef8f823c7b": "f7928eb5294cad00797208f1750a167d",
".git/objects/fc/b14a5816329a60a44e6669332f69c1180d532c": "d2ca335bdc51fdfe375d064173cba92e",
".git/refs/heads/main": "3ea7ad71c343c6d602410bf228512fca",
".git/refs/remotes/origin/main": "3ea7ad71c343c6d602410bf228512fca",
"assets/AssetManifest.json": "8c7d2a93a72f0b2616d35d6d885829ee",
"assets/data/AteroscleroseColesterol.html": "4a08446944a7a4bc29159a7cfbd159c6",
"assets/data/AteroscleroseDoen%25C3%25A7asassociadas.html": "a470a71eecfbff68e2675726a85b622a",
"assets/data/AteroscleroseFatoresderisco.html": "adf58df3c839bbf02b70955a668c5710",
"assets/data/AteroscleroseOque%25C3%25A9.html": "b918657eac112632deeea0afff365a18",
"assets/data/AterosclerosePreven%25C3%25A7%25C3%25A3o.html": "aab401569e4022904b594335865dab0e",
"assets/data/AteroscleroseSintomas.html": "ac0c89ed4018dfef71d7f43e3c80c6b7",
"assets/data/AteroscleroseTratamento.html": "7d6f8c4991eb145956ba277a58664b52",
"assets/data/topics.yaml": "f523bce6948f8010fefe9721161b216d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/avatar.png": "0f47c57d2b8b52f1ed6a56c7c5f8a862",
"assets/images/logo1.png": "5b04f94cc6dd6d4128a858512e41688d",
"assets/images/map_mockup.PNG": "ee92771b239c77ebc7f1c426f9c14345",
"assets/images/medicine/1.png": "4a42582f9b67e07347fc4732a6d8a2dc",
"assets/images/medicine/2.png": "47f654e1e89c269734a8273f3012fb02",
"assets/images/medicine/3.png": "4ad582fd71e0223eac6b7a21c830410f",
"assets/NOTICES": "8cf3362e5289bc7315f1654df4cca7e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "21e04bec422e12b039a7186f7da3af37",
"/": "21e04bec422e12b039a7186f7da3af37",
"main.dart.js": "1a703616bf7d69e75b3c296ca139dc07",
"manifest.json": "6477fb4e2b54591ab9b475dd7196cc59",
"README.md": "d41d8cd98f00b204e9800998ecf8427e",
"version.json": "76aec40bf057b0a184a8f020d80f2cac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
