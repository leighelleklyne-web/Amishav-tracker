// Service worker קטן: מאפשר התקנה כאפליקציה. תמיד מנסה קודם את הרשת (כדי לקבל עדכונים), ורק בלי אינטרנט מציג את הגרסה השמורה.
const CACHE='amishav-v1';
const SHELL=['./','./index.html','./firebase-config.js','./icon-192.png','./icon-512.png','./logo.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).catch(()=>{}));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin)return; // Firebase וכל השאר – ישירות לרשת
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp)).catch(()=>{});return r})
    .catch(()=>caches.match(e.request).then(m=>m||caches.match('./index.html'))));
});
