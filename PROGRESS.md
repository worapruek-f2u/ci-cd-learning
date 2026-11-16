# CI/CD with GitHub — Learning Progress

> คำสั่งสำหรับ session ใหม่: "อ่าน PROGRESS.md แล้วสอนต่อจากบทที่ค้างไว้"

## ผู้เรียน
- Git: commit / branch / push / pull ได้ — ยังไม่เข้าใจ Pull Request
- ไม่เคยใช้ GitHub Actions / CI/CD
- เป้าหมาย: CI + CD แบบ "พอใช้งานได้" เร็วที่สุด, บทสั้น
- สไตล์: ผสม (Claude อธิบาย + สร้างไฟล์บางส่วน, ผู้เรียนลงมือบางส่วน)
- Stack: NestJS + TypeScript, Node 24, npm, Docker มีในเครื่อง, ไม่มี `gh` CLI

## แผนบทเรียน
| # | บท | สถานะ |
|---|----|-------|
| 0 | Setup project NestJS + git init | ✅ |
| 1 | CI/CD คืออะไร + push ขึ้น GitHub repo ใหม่ | ⏳ |
| 2 | Workflow แรก: GitHub Actions รัน lint/test/build | ⬜ |
| 3 | Pull Request + ให้ CI ตรวจก่อน merge (branch protection) | ⬜ |
| 4 | CD: build Docker image → push GitHub Container Registry (GHCR) | ⬜ |
| 5 | CD: deploy ให้เข้าเว็บได้จริง (เลือก platform ตอนถึงบท) | ⬜ |
| 6 | Secrets, environment variables, สรุป + cheat sheet | ⬜ |

## บันทึก
- 2026-11-16: สร้าง NestJS project (`nest new`), lint/test/build ผ่านในเครื่อง, แก้ warning `void bootstrap()` ใน `src/main.ts`
