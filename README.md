# KVC-STEM PBL — เว็บไซต์นำเสนอ PA 69

เว็บไซต์นำเสนออย่างเป็นทางการ สำหรับโครงการ **การคิดค้นและปรับเปลี่ยนรูปแบบการจัดการเรียนรู้ KVC-STEM PBL**  
ครูผู้รับผิดชอบ: นางสาวมลิวัลย์ ไวยกรรณ์ — วิทยาลัยอาชีวศึกษาขอนแก่น

## รันบนเครื่อง

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000)

## Deploy บน Vercel

1. Push โปรเจกต์นี้ขึ้น GitHub (โฟลเดอร์ `kvc-stem-pbl`)
2. ไปที่ [vercel.com/new](https://vercel.com/new) แล้ว Import repository
3. ค่าเริ่มต้น: Framework **Next.js**, Root Directory **`kvc-stem-pbl`** (ถ้า repo อยู่ระดับโฟลเดอร์ PA)
4. กด Deploy

หรือใช้ Vercel CLI:

```bash
cd kvc-stem-pbl
npx vercel
```

แนะนำ Node.js **20.9+** บน Vercel (Project Settings → Node.js Version).

## โครงสร้าง

- `src/data/content.ts` — เนื้อหาภาษาไทยจากเอกสาร PA
- `public/slides/` — ภาพสไลด์ 9 หน้าจาก PDF ต้นฉบับ
