// Service worker ของแอปคลังอะไหล่ — ตั้งใจให้เบาที่สุด:
// ไม่เก็บแคชหน้าเว็บ/ข้อมูล เพื่อไม่ให้ค้างหน้าเก่าหรือยอดสต็อกเก่า (ต้องโหลดจากเครือข่ายเสมอ)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    try { const keys = await caches.keys(); await Promise.all(keys.map(k => caches.delete(k))); } catch (e) {}
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', () => { /* ปล่อยผ่านไปที่เครือข่ายตามปกติ */ });
