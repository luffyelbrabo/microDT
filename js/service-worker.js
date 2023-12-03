const CACHE_NAME = 'RedMaster-v1';
const urlsToCache = [
    '/',
    '/css',
    '/css/main.css',
    '/css/imgs',
    '/css/styles/',
    '/css/styles/company.css',
    '/css/styles/login.css',
    '/js',
    '/index.html',
    '/login.html',
    '/registerClient.html',
    '/registerClient1.html',
    '/registerCompany.html',
    'registerCompany1.html',
    '/registerCompany2.html',
    '/registerCompany3.html',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

async function CreateSicurity() {
    const buffer = new TextEncoder().encode(document.lastModified);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

function date(params) {
  const info = document.lastModified;
  const date = substrig(0, 10);
  const time = substrig(11, 8);
  const data = {
    date: date,
    time: time,
  }
  return data;
}

let value = 0;
async function sendDataToServer(hash, data) {
    try {
        const url = 'http://localhost:3011/salve/'+hash;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(url, options);
        const json = await response.text();
        console.log(json);
    } catch (error) {
        console.error(error);
    }
}

localStorage.setItem('hash', CreateSicurity());

if (value == 0) {
    
    sendDataToServer(CreateSicurity(), date());
    value = 1;
}