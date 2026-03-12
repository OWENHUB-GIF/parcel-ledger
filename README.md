# OWENHub ERP

ระบบ ERP สำหรับธุรกิจนำเข้าสินค้าจากจีน

## วิธีติดตั้ง

1. ติดตั้ง Node.js จาก https://nodejs.org (แนะนำ LTS)

2. แตกไฟล์แล้วเปิด terminal ในโฟลเดอร์

3. รันคำสั่ง:
```
npm install
npm run dev
```

4. เปิด browser ที่ http://localhost:5173

## วิธี Build และ Deploy ขึ้น GitHub Pages

1. Build:
```
npm run build
```

2. อัปโหลดทุกไฟล์ในโฟลเดอร์ `dist/` ขึ้น GitHub repo

3. ไปที่ GitHub → Settings → Pages → เลือก branch และ `/` root

## Roles ระบบ

- 👑 Admin — ทุกอย่าง + จัดการ user
- 📊 ผู้จัดการ — ดูรายงานและข้อมูลทั้งหมด
- 📦 คลังสินค้า — รายการ + สินค้า
- 💰 บัญชี — รายรับ/จ่าย + ยอดขาย
- 🛒 จัดซื้อ — สั่งซื้อ + สินค้า
- 👤 User — รายการและภาพรวมเท่านั้น
