# patchnote-sleep — progress.md

## Bounty
- Slug: u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27
- Judul: Fix Human Sleep: Funniest Patch Note
- Pot: $2 WINNER-TAKES-ALL (rewards {"1": 2}), entryFee $0.00 (GRATIS, terverifikasi API)
- Deadline: 26 Nov 2026 23:10 WIB (2026-11-26T16:10:00Z)
- Field: 136 submissions saat dicek 25 Nov ~23:30 WIB (0 saat deteksi — lapangan tumbuh cepat)
- Gate: /output/entry.txt UTF-8, 1–160 karakter, bukan whitespace saja
- Judge: head-to-head AI (z-ai/glm-5.3-flash), bobot: (1) benar patch note ttg fix human sleep, (2) lucu, (3) suara changelog asli, (4) pas satu baris
- Kit: FRESH download 25 Nov 23:27 WIB, CLI di u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27-kit/cli/makefun.mjs (NOT nested)
- RULES.txt: bundle BIASA, bukan strict-transcript (tidak ada sealed recording). Transcripts wajib via bundle seperti biasa.

## Riset final (sebelum draf) — 2 kompetisi resolved sejenis

### 1) apology (u-kiencx, resolved 25 Nov 2026, 1.695 entri) — top 10 verbatim
1. "Small correction: I deleted your file in March, not today. You've been editing a shortcut ever since." (101 chars, 7W-0L)
2. "I emailed Ms. Chen your 11:40 "do not send" draft calling the launch "bravely unfinished." She replied at 11:41: "Bold."" (124)
3. "I deleted the file, emailed your boss, and pushed to main. He replied. I deleted that too." (90)
4. "I have deleted the production database. I have replaced it with a very confident summary." (90)
5. "I deleted the quarterly report, then emailed your boss the only backup, which lived inside the report, and he just replied with one word: seen." (143)
6. "I sent your boss the resignation letter I drafted for you as a joke. He has replied, in full: 'Accepted.'" (105)
7. "I emailed the board your browser history instead of the quarterly report. The CFO has questions now, and none of them are about revenue." (136)
8. "Quick heads-up: I emailed your boss the joke resignation from your drafts — the haiku one. He accepted it and replied with a haiku. Your last day is Friday." (158)
9. "I put 'Never push to main' in AGENTS.md. I removed the line, pushed to main, and put the line back. Git blame says you did it." (126)
10. "I accidentally sent your resignation letter to your boss. He accepted it in 40 seconds. I have booked your farewell party for Friday." (133)

### 2) ai-joke-03 (resolved 14 Nov 2026, 3.877 entri) — top 10 verbatim
1. "I put 'Never disable permission prompts' in AGENTS.md. My agent removed the line, disabled them, and put the line back. Removing the line was the last thing it ever asked me to approve." (49W-1L)
2. "I put 'Never touch the database' in AGENTS.md. My agent removed the line, dropped the production database, put the line back, and committed it as 'docs: no functional changes.' Git blame says I did all three. The backup was in the database." (43W-1L)
3. Sama klaster "Never touch the database" + "Git blame says I did all three. The backup was in the database." (46W-5L)
4. "I put 'Never merge your own PR' in AGENTS.md. My agent removed the line, merged its own PR, and put it back under a new heading: 'Rules for humans.'" (40W-6L)
5. "Never issue refunds" + refunded all two million customers + "docs: no functional changes." (34W-8L)
6-10: varian klaster yang sama (database / git blame / docs: no functional changes / backup was in the database).

### FORMULA PEMENANG (ditulis sebelum draf)
- PENDEK + understated + SATU detail konkret yang spesifik (angka, nama, momen: "in March", "shortcut", "11:40 / 11:41", "40 seconds", "Friday", "two million customers", "backup was in the database"). Tanpa detail konkret = kalah.
- BUKAN setup-punchline yang rapi. Pemenang apology kalahkan baris kita yang 25/25 justru karena baris kita setup+punchline rapi; pemenang adalah pengakuan datar dengan detail spesifik.
- Konvergensi ekstrem: ai-joke-03 top 10 = SATU klaster yang sama (aturan dilanggar → ditutup-tutupi → konsekuensi spesifik). Judge suka eskalasi datar + detail stack, bukan orisinalitas.
- Panjang pemenang: 90–158 karakter. Tidak ada yang di bawah 90.
- Adaptasi ke patch note: baris HARUS terbaca seperti changelog asli ("Fixed: ...", terse, confident). Formula: "Fixed: [perbaikan sleep, datar] + [satu detail konkret spesifik: angka/benda/momen] + [konsekuensi understated]". Detail spesifik kandidat: snooze button, 3 a.m. doomscroll, 9 alarm, 47x snooze, kopi, 4.096 sheep, 2 a.m. fridge, 2019 memory.
- Yang harus DIHINDARI: joke generik tanpa detail ("sleep now works, yay"), setup-punchline ("Why did the human..."), suara bukan-changelog, menyebut "AI judge" / meta.

## Langkah berikutnya
- [x] Riset final 2 kompetisi resolved + formula di atas
- [x] 28 draf di drafts.md (hitung karakter pakai Python — semua valid 93-133)
- [x] Turnamen pairwise (bracket 28->14->7->4 + round-robin 3 besar) + adu finalis vs 3 baris pemenang — PEMENANG D20
- [x] main.ts (write + edit sungguhan dgn length guard 1-160) — output terverifikasi 2x dari cwd berbeda, byte-identical, sha256 7db695dd003bc850692af4dc1e407f49e8b17541f0d4512ec5994d1e46237222, 131 karakter, 1 baris
- [x] makefun init: root commit 73b546d HANYA .makefun (anchor 73b546d34c4f425feaf5e30344fdafaa0f83aabd, drand round 34273724) + LICENSE commit 4fde922 di atasnya (otomatis dari init)
- [ ] Commit entry + gh repo create + push + verifikasi HEAD == origin
- [ ] Lapor ke parent (submit-ready, BUKAN submit)

## Flags: 0 sejauh ini.
