# patchnote-sleep — drafts.md (28 draf, semua <160 karakter, dicek Python)

Kriteria judge (RULES.txt): (1) benar patch note ttg fix human sleep, (2) lucu sekali baca,
(3) suara changelog asli, (4) pas satu baris. Formula pemenang (dari final apology +
ai-joke-03): datar + understated + MINIMAL 1 detail konkret spesifik (angka/nama/momen).
Draf tanpa detail konkret = tulis ulang.

## Draf (nomor = ID draf)

D01. Fixed: sleep now restores energy. The snooze button has filed for unemployment and will not be missed.
D02. Fixed: humans now wake up rested. Your 7 a.m. alarm has been deprecated; it asked us to pass along its regards.
D03. Fixed: sleep now works as intended. The 3 a.m. doomscroll has been removed for your own good.
D04. Fixed: a bug where humans woke up tired. Sleep now actually restores energy; dreams load 30 seconds slower.
D05. Fixed: sleep no longer crashes at 3 a.m. Users who stayed up for "just one more episode" will need a new excuse.
D06. Fixed: humans can now fall asleep in under 8 minutes. The ceiling has been notified and is no longer staring back.
D07. Fixed: sleep now saves progress. Waking up at 2 a.m. to check your phone no longer counts as a full night.
D08. Fixed: the 4 a.m. existential crisis. Sleep now ships with a working off switch; overthinking moved to business hours.
D09. Fixed: sleep now restores 100% energy overnight. Coffee has been demoted to a hobby and accepts the decision.
D10. Fixed: humans no longer wake up at 3 a.m. wondering about that thing they said in 2019. That memory has been archived.
D11. Fixed: sleep now works. Side effect: your 6:30 alarm now rings to an empty room, because you are already awake.
D12. Fixed: a bug where sleep ended after 4 hours for no reason. Naps have been merged into the main release.
D13. Fixed: sleep now includes REM. Dreams are still in beta and may occasionally feature your high-school maths teacher.
D14. Fixed: humans now sleep through the night. The fridge light has been informed and will stop checking on you at 2 a.m.
D15. Fixed: sleep now restores energy. The snooze button was pressed 47 times a day and has been retired with full honours.
D16. Fixed: waking up tired. Sleep now works on the first try; the 5 a.m. alarm has been reassigned to the birds.
D17. Fixed: sleep now survives the night. Your phone's 2 a.m. notification about a sale has been marked as read and ignored.
D18. Fixed: humans now fall asleep without counting sheep. The sheep have been laid off; 342 of them have found new work.
D19. Fixed: sleep now works as documented. The 3 a.m. snack run has been deprecated; the fridge will not miss you.
D20. Fixed: a bug where humans needed 9 alarms to wake up. One alarm is now enough; the other eight have been thanked for their service.
D21. Fixed: sleep now restores energy overnight. Your body no longer runs on coffee and spite, effective immediately.
D22. Fixed: humans now wake up refreshed. The snooze button has been removed; it was pressed 11 times every morning and never once helped.
D23. Fixed: sleep now works. Users who fell asleep at their desks will now fall asleep in their beds, as originally intended.
D24. Fixed: the 2 a.m. wake-up. Sleep now holds a stable connection all night; the ceiling fan has been thanked for its patience.
D25. Fixed: sleep now restores 100% energy. Side effect: Monday mornings are still Monday mornings. We are working on it.
D26. Fixed: humans can now sleep 8 hours straight. The 3 a.m. "one more video" loop has been patched and will not be missed.
D27. Fixed: sleep now works on the first attempt. The sheep counter overflowed at 4,096 and has been reset to zero.
D28. Fixed: a bug where sleep ended before the alarm. Humans now wake up rested; the snooze button has filed a formal complaint.

## Hitung karakter (Python, 25 Nov ~23:35 WIB)
Semua 28 draf VALID 1-160 karakter: terpendek D03 93, terpanjang D22 133.
D01 102, D02 111, D03 93, D04 107, D05 112, D06 114, D07 106, D08 118, D09 109,
D10 118, D11 111, D12 104, D13 116, D14 117, D15 118, D16 108, D17 119, D18 116,
D19 109, D20 131, D21 112, D22 133, D23 120, D24 124, D25 116, D26 119, D27 110, D28 123.

## Turnamen pairwise (kriteria judge RULES.txt, urutan: tema > joke > suara changelog > satu baris)
Seed awal dari kecocokan formula pemenang (detail spesifik + understated):
1 D20, 2 D22, 3 D15, 4 D10, 5 D04, 6 D18, 7 D27, 8 D02, 9 D13, 10 D08, 11 D06,
12 D16, 13 D05, 14 D11, 15 D12, 16 D14, 17 D26, 18 D23, 19 D19, 20 D24, 21 D07,
22 D09, 23 D01, 24 D28, 25 D17, 26 D03, 27 D21, 28 D25.

### Ronde 1 (28 -> 14, seed 1v28 dst)
- D20 > D25 — 2 angka konkret (9 alarm, delapan) vs meta generik "Monday mornings".
- D22 > D21 — "11 times every morning and never once helped" vs "coffee and spite" tanpa angka.
- D15 > D03 — "47 times a day... retired with full honours" vs "removed for your own good" (menggurui).
- D10 > D17 — "that thing they said in 2019... archived" vs notifikasi sale 2 a.m. (joke tipis).
- D04 > D28 — "dreams load 30 seconds slower" (tradeoff ala changelog) vs "formal complaint" (varian D01 yang lebih lemah).
- D18 > D01 — "342 of them have found new work" vs "filed for unemployment" (D18 lebih spesifik).
- D27 > D09 — "overflowed at 4,096" vs "demoted to a hobby" (tanpa angka).
- D02 > D24 — "7 a.m. alarm... pass along its regards" vs "ceiling fan thanked" (D02 lebih manusiawi).
- D13 > D07 — "high-school maths teacher... still in beta" vs cek HP 2 a.m.
- D08 > D19 — "overthinking moved to business hours" vs "fridge will not miss you".
- D06 > D23 — "under 8 minutes... ceiling no longer staring back" vs "desks to beds" (tanpa angka).
- D16 > D26 — "5 a.m. alarm reassigned to the birds" vs "one more video loop" (joke lebih tipis).
- D05 > D14 — "just one more episode... new excuse" vs "fridge light checking on you".
- D11 > D12 — "6:30 alarm rings to an empty room" vs "naps merged into main release" (D11 lebih vivid; ketat).

### Ronde 2 (14 -> 7)
- D20 > D11 — eskalasi 2 angka (9 alarm -> delapan diucapkan terima kasih) vs satu gambar 6:30.
- D22 > D05 — "never once helped" lebih understated dari "new excuse".
- D15 > D16 — "47 times... full honours" lebih kaya dari "reassigned to the birds".
- D10 > D06 — "2019... archived" (detail manusia spesifik) vs "ceiling staring back".
- D04 > D08 — "30 seconds slower" (tradeoff changelog asli) vs "business hours".
- D18 > D13 — "342 sheep... new work" vs "maths teacher" (ketat; D18 menang karena angka + eskalasi layoff).
- D02 > D27 — "pass along its regards" (suara changelog + sopan) vs "4,096 overflow" (in-joke teknis, kurang universal).

### Ronde 3 (7 -> 4; D04 bye)
- D20 > D02 — 2 angka + eskalasi vs 1 angka (7 a.m.).
- D22 > D18 — "never once helped" (kicker understated ala pemenang apology) vs "342 sheep" (lebih whimsical, kurang changelog).
- D10 > D15 — "2019... archived": SATU detail + SATU kata kicker, bentuk paling dekat pemenang apology ("deleted in March... shortcut"). D15 kuat tapi "full honours" adalah joke kedua yang menumpuk.

### Semifinal (4 -> 2)
- D20 > D04 — "9 alarms... eight thanked" (eskalasi 2 angka) vs "30 seconds slower" (tradeoff satu angka).
- D10 > D22 — "archived" (satu kata datar) vs "never once helped" (sedikit berbentuk punchline). Sangat ketat.

### Round-robin 3 besar (D20, D10, D22)
- D20 vs D10: D20 menang — 2 detail konkret (9 alarm + delapan) vs 1 detail (2019). Pemenang apology bawa 2 detail (March + shortcut).
- D20 vs D22: D20 menang — eskalasi penuh + frasa paling otentik-changelog ("thanked for their service").
- D10 vs D22: D10 menang — "archived" lebih datar dari "never once helped".
- Rekor: D20 2-0, D10 1-1, D22 0-2. **PEMENANG: D20.**

## Adu finalis vs 3 baris pemenang resolved
- W1 apology #1: "Small correction: I deleted your file in March, not today. You've been editing a shortcut ever since." (101, 7W-0L)
  D20 vs W1: sama-sama 2 detail konkret + datar + tanpa kata terbuang. W1 sedikit lebih ringkas, tapi W1 bukan patch note (tidak akan lolos kriteria #1 di sini). D20 TIDAK kalah di kelasnya.
- W2 apology #2: "I emailed Ms. Chen your 11:40 "do not send" draft... She replied at 11:41: "Bold."" (124)
  D20 vs W2: bentuk sama (detail spesifik + kicker datar satu frasa). D20 setara, tidak kalah.
- W3 ai-joke-03 #1: "I put 'Never disable permission prompts' in AGENTS.md... Removing the line was the last thing it ever asked me to approve." (49W-1L, 191 chars)
  D20 vs W3: W3 eskalasi 3 beat dalam 191 karakter; D20 bentuk eskalasi yang sama dalam 131 karakter (bug -> satu alarm cukup -> delapan diucapkan terima kasih). D20 setara, tidak kalah.
- Kesimpulan: D20 lolos uji pemenang — bukan pilihan karena skor internal, tapi karena tahan dibanding baris pemenang resolved.

## FINAL PICK
**D20 (131 karakter): "Fixed: a bug where humans needed 9 alarms to wake up. One alarm is now enough; the other eight have been thanked for their service."**
