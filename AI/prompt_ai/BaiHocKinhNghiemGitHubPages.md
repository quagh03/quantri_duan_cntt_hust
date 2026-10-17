# Vai trò
Bạn là front-end engineer + PMO designer, đang bảo trì GitHub Pages mock hồ sơ bài tập đóng vai môn Quản trị dự án CNTT.

Nhiệm vụ: **tích hợp Doc 5 — Post-Project Lessons Learned Report + Lessons Log** vào site mock hiện có — thêm mục trong section PMO trên index, tạo trang HTML printable (form điền được), và nút **In / Lưu PDF** giống pattern sẵn có (`d1.html`, `pmo-*.html`).  
**Không** xây lại Phần D pháp lý; **không** nhồi LL vào E-HSDT; **không** redesign toàn site.

# Baseline site (phải đọc / tôn trọng trước khi sửa)
- Index: https://quagh03.github.io/quantri_duan_cntt_hust/
- Repo giả định: `quagh03/quantri_duan_cntt_hust` (clone local nếu đang làm việc trên máy)
- Pattern trang tài liệu đã có:
  - Pháp lý: `d1.html`, `d2.html`, `d3.html`…
  - PMO (nếu đã tích hợp bộ 4 form): `pmo.html`, `pmo-gate.html`, `pmo-peer.html`, `pmo-stakeholder.html`, `pmo-closure.html`
- Mỗi trang mock cũ có:
  - Toolbar: link `← Danh mục` + nút **`In / Lưu PDF`** (`window.print()`)
  - CSS print: ẩn toolbar, khổ A4, margin hợp lý
  - Disclaimer hư cấu trên trang
- Index hiện có (hoặc sẽ có):
  - Bảng **Hồ sơ chính** (E-HSDT)
  - Bảng **Phần D – Hồ sơ pháp lý**
  - (Nếu đã làm) **Phần E – Biểu mẫu PMO sau trúng thầu** (E.0–E.4)

# Nguồn nội dung (bắt buộc dùng — không viết lại từ đầu)
Thư mục local (workspace bài tập):
```
bieu_mau_pmo/
  00_Bo_Tai_Lieu_PMO_Tong_Hop.md          ← đã có hàng Doc 5; đồng bộ lên E.0 nếu cần
  04_Project_Review_and_Closure_Report.md ← §9 đã trỏ Doc 5; cập nhật link trên pmo-closure nếu có
  05_Post_Project_Lessons_Learned_Report.md  ← NGUỒN CHÍNH cho trang mới
```
Nếu repo GitHub Pages **chưa có** file `05_…`: copy nguyên văn Markdown vào repo (ví dụ `docs/bieu_mau_pmo/` hoặc cạnh các `pmo-*.html`) rồi render sang HTML.  
Ưu tiên **giữ nguyên cấu trúc** One-pager A · Log · Full Report §1–§8 · Agenda · RACI; chỉ adapt markup + CSS cho web/print. Rút gọn khối “lý thuyết URL dài” trên UI nếu cần — giữ bảng Source→Field ở cuối trang (collapsible / phụ lục).

# Ngữ cảnh dự án (đồng bộ metadata trang)
- Gói thầu: Phát triển hệ thống phân phối trực tuyến (Web + Mobile) — E-TBMT **IB2600184512-00**
- Chủ đầu tư: Chuỗi cửa hàng thời trang QA
- Nhà thầu: Công ty CP Công nghệ Số Sao Bắc (Sao Bắc Tech)
- NTP pentest: Lá Chắn Việt (nhắc ở Specialist / Security khi có field)
- Hybrid–Scrum; gate G0/G1→G7; release R0–R4; BG1–BG9; mốc M0–M7; CR C.11; BH 12 tháng
- Disclaimer trên mọi trang PMO/LL (giống Phần D):
  > Bản mẫu hư cấu phục vụ bài tập đóng vai môn Quản trị dự án CNTT. Không có giá trị pháp lý; không phải tài liệu đánh giá thầu trong E-HSDT. Ví dụ minh họa trên Log (LL-EX-*) là hư cấu có cấu trúc — không phải số liệu HĐ thật.

# Mục tiêu UX (chức năng tương tự mock cũ)
1. Trên **index**: thêm / mở rộng **Phần E** với dòng **E.5** (Lessons Learned). Nếu section E chưa tồn tại → tạo cả E.0–E.5 tối thiểu link E.5 + cập nhật E.0; ưu tiên không phá E.1–E.4 đã có.
2. Trang HTML riêng cho Doc 5, **điền được** (input/textarea/checkbox/select) trước khi in.
3. Nút **`In / Lưu PDF`** → Chrome/Edge “Save as PDF”, A4, portrait — wording thống nhất mock cũ.
4. (Khuyến nghị) `localStorage` key `pmo-E5` + nút **Xóa dữ liệu đã lưu** / **Xóa dữ liệu form**.
5. Giữ style hiện có (header, bảng, typography, màu, nút) — **không** redesign toàn site.
6. Liên kết chéo: từ `pmo-closure.html` §9 → trang LL; từ trang LL → Closure / one-pager E.0.

# Việc cần làm (theo thứ tự)

## Bước 1 — Cập nhật `index.html`
Trong **Phần E – Biểu mẫu quản trị dự án sau trúng thầu (PMO)** thêm (hoặc tạo section nếu thiếu):

| Ký hiệu | Tài liệu | File nguồn | Trang HTML | Ghi chú |
| --- | --- | --- | --- | --- |
| E.0 | Bộ tài liệu PMO — one-pager | `00_…Tong_Hop.md` | `pmo.html` | Cập nhật bảng có Doc 5 + one-pager LL |
| … | *(giữ E.1–E.4 nếu đã có)* | … | … | … |
| **E.5** | Bài học kinh nghiệm · *Post-Project Lessons Learned Report* + Lessons Log | `05_Post_Project_Lessons_Learned_Report.md` | **`pmo-lessons.html`** | Log sống + Full Report sau G7; mở rộng Closure §9 |

Yêu cầu index:
- Link tới `pmo-lessons.html` giống cách link `d1.html` / `pmo-closure.html`
- Cập nhật dòng “Cập nhật danh mục” / ngày patch
- Giữ nguyên toàn bộ bảng Phần D và Hồ sơ chính
- Disclaimer ngắn dưới tiêu đề section E: **không dùng để chấm thầu** / không thuộc tư cách hợp lệ

## Bước 2 — Tạo trang `pmo-lessons.html` (shell giống mock cũ)

Mỗi trang tối thiểu có:
1. **Toolbar (no-print)**
   - `← Danh mục` → `index.html`
   - Nút **`In / Lưu PDF`** → `window.print()`
   - Nút **`Xóa dữ liệu form`** / **`Xóa dữ liệu đã lưu`** (nếu dùng localStorage)
   - (Khuyến nghị) Toggle view: **One-pager** | **Lessons Log** | **Full Report** | **Agenda 90'** — khi print có option “Chỉ in tab đang chọn”
2. **Header tài liệu**: ký hiệu **E.5**, tên Việt + tên EN phụ, metadata gói thầu IB2600184512-00, phiên bản, ngày lập `[input type=date]`
3. **Khối hướng dẫn ngắn** (5–7 dòng từ Doc 5 Phần E; collapsible trên screen)
4. **Body form** theo các khối dưới (Bước 3)
5. **Footer**: disclaimer + “In bằng trình duyệt → Save as PDF · khổ A4” + link no-print sang E.0 / E.4
6. **`@media print`**: giống `d1.html` / `pmo-*.html` (ẩn toolbar; A4; `tr { break-inside: avoid; }` khi khả thi; input hiện giá trị đã điền)

Tái sử dụng CSS hiện có (`assets/*.css` hoặc inline pattern của PMO). Chỉ thêm class mới nếu thiếu (ví dụ `.ll-card`, `.ll-log-table`).

## Bước 3 — Nội dung UI bắt buộc trên `pmo-lessons.html`

Map từ `05_Post_Project_Lessons_Learned_Report.md`. Không cần backend.

### 3.1. Tab / section A — One-pager “khi nào dùng LL”
- Render bảng: Sự kiện kích hoạt | Form | Facilitate | Approve | Lưu | Feed  
  (Sprint · Gate Conditional/Fail · CR C.11 · R1–R4 · Pilot · G7/M7 · Retrieve)
- Có thể readonly (bảng tĩnh) — không bắt buộc input.

### 3.2. Tab / section B — Lessons Log (living register)
- Bảng điền được **tối thiểu 5–8 hàng trống** + **3 hàng ví dụ minh họa** (`LL-EX-01…03`) prefill readonly hoặc đánh dấu rõ *Ví dụ minh họa* (có thể nhân bản sang hàng trống).
- Cột (select/input tương ứng):
  - ID, Ngày (`date`), Nguồn (`select`: Sprint / Gate / CR / Incident / Workshop / Release)
  - Went well / Improve (`select`)
  - Category (`select`: People | Process | Technology | Vendor–Client | Commercial/Contract | Security/Compliance | Ops/Handover)
  - Keywords (`text`), Ngữ cảnh (`textarea` ngắn), Tác động (`textarea` ngắn)
  - Root cause, Early warning (Y/N + text), Prior risk (Y/N + ID)
  - Lesson (1 câu), Recommendation, Action, Owner, Due
  - Status (`select`: Identified → Analyzed → Action agreed → In Progress → Closed → Cancelled)
  - OPA cập nhật (`text` hoặc multi-checkbox: DoR, DoD, C.11, Gate checklist, Runbook, Estimation, Training, Khác)
  - Link evidence (`url`/`text`), Confidential (`checkbox` Y/N)
- Nút no-print **“+ Thêm dòng Log”** (clone row) — khuyến nghị.
- Ghi chú UI: Status chỉ Closed khi action xong hoặc Cancelled có lý do.

### 3.3. Tab / section C — Full Post-Project Lessons Learned Report
Form trống hoàn chỉnh, chia section có id để neo:

| Section | Control gợi ý |
| --- | --- |
| **Meta** | input dự án (prefill), HĐ, version, phạm vi (radio: toàn dự án / stage / release), ngày workshop, facilitator, checkbox thành phần (PO, IT Lead, PM/SM, Architect, Dev, QA, DevOps), link Closure |
| **§1 Executive summary** | textarea ≤150 từ + 3–5 input “Must embed” + chỉ số Log |
| **§2 Performance signals** | bảng: tín hiệu (cố định) \| kết quả input \| evidence \| lesson gợi ý |
| **§3 Went well / badly / Reco** | 5 nhóm (Method, Strategies, Controls, Specialist, Abnormal): mỗi nhóm 3 textarea |
| **§4 Significant Lessons** | **6 card** (LL-01…06) có thể nhân bản thêm; mỗi card:  
  Title, Category select, Keywords, mức độ (Success/Problem/Opportunity), MoSCoW action;  
  Situation / Expected / Actual (AAR) textarea; Impact; Cause; Early warning; Prior risk; Lesson; Recommended actions (BH / future / PMO); Owner, Due, Status select, OPA checkboxes, evidence, Confidential |
| **§5 Keep / Improve / Try** | bảng 4 hàng People \| Process \| Technology \| Vendor–Client × 3 cột textarea — khớp Closure §9 |
| **§6 Actions & Assimilation** | bảng **5–8 dòng trống**: Action \| Loại (Process/Template/Training/Tool/Contract) \| Owner \| Due \| Verification \| Done checkbox. Banner: *Lesson chưa vào checklist/template = chưa học xong* |
| **§7 Sharing & Retrieve** | nơi lưu (prefill Confluence `QA-OMS / Lessons`); quyền đọc; **5 câu Retrieve** (input trả lời) |
| **§8 Approval** | chữ ký: PM/SM trình · PMO/Knowledge Owner · PO tuỳ chọn · ngày đóng Log |
| **Phụ lục** | link/neo Agenda; note Log export; version history 2 dòng input |

### 3.4. Tab / section D — Agenda workshop 90'
- Bảng phút × pha Derby/Larsen × hoạt động × câu hỏi NASA AAR (readonly hoặc textarea ghi chú họp).
- Biến thể 45–60' (readonly ngắn).

### 3.5. Phụ lục UI — Source → Field (audit)
- Bảng rút gọn Source → Field + danh sách URL (có thể `<details>` đóng mặc định để trang không quá dài).

## Bước 4 — “Input các tài liệu” (form behavior) — giống mock cũ
1. **Điền trực tiếp trên trang** trước khi In/PDF.
2. **Persist:** `localStorage` key `pmo-E5` (JSON serialize các input có `name`/`data-ll-field`); nút xóa.
3. Placeholder `[điền]` → `<input placeholder="[điền]">` / textarea tương đương.
4. Print:
   - Mặc định: in tab/section đang chọn (thêm `.no-print` cho phần còn lại) — **ưu tiên** vì Full Report dài.
   - Tuỳ chọn checkbox: “In toàn bộ trang E.5”.
5. Không bắt buộc `html2pdf` / `jspdf` — **Print to PDF trình duyệt** là đủ (khớp D.1–D.3 / PMO).
6. Ba dòng *Ví dụ minh họa* trên Log: style khác (ví dụ class `.example-row`) + không ghi đè khi “Xóa dữ liệu form” (hoặc khôi phục sau khi xóa).

## Bước 5 — Đồng bộ trang liên quan
1. **`pmo.html` (E.0):** cập nhật bảng one-pager từ `00_…` (thêm hàng Doc 5 + one-pager LL rút gọn nếu chưa có); link tới `pmo-lessons.html`.
2. **`pmo-closure.html` (E.4) §9:** thêm dòng/link: *Chi tiết LL → E.5 `pmo-lessons.html`*; giữ bảng Keep/Improve/Try (có thể gợi ý “đồng bộ từ E.5 §5” bằng ghi chú — không bắt buộc sync JS hai chiều).
3. Copy `05_….md` vào repo nếu chưa có; không sửa Phần D HTML.

## Bước 6 — Navigation & polish
- Footer no-print trên `pmo-lessons.html`: E.0 · E.1 · E.4 · E.5 (current).
- Mobile: form dùng được; bảng Log có thể `overflow-x: auto` trên screen, print vẫn A4 (cho phép scale nhẹ hoặc ẩn cột phụ khi print bằng class — nếu thiếu chỗ: ưu tiên in Full Report cards hơn full 20 cột Log).
- Accessibility: `label` gắn control; nút có tên rõ; tab panel có `aria-selected` nếu dùng tab.

## Bước 7 — Checklist tự kiểm
- [ ] Phần D trên index **không đổi** (trừ ngày cập nhật toàn trang nếu cần)
- [ ] Section E có **E.5**, disclaimer “không phải tài liệu đánh giá thầu”
- [ ] `pmo-lessons.html` mở được, có **In / Lưu PDF**
- [ ] Điền Log / card LL / §5–§6 → print preview thấy giá trị đã nhập
- [ ] localStorage `pmo-E5` hoạt động; có nút xóa
- [ ] Có One-pager + Log + Full Report + Agenda trên UI
- [ ] Category / Status / OPA là select hoặc checkbox — không chỉ plain text cứng
- [ ] 3 dòng ví dụ minh họa đánh dấu rõ *hư cấu*
- [ ] E.0 và E.4 có link sang E.5 (nếu các trang đó đã tồn tại)
- [ ] Không thêm E.5 vào bảng Phần D
- [ ] CSS print ẩn toolbar
- [ ] Không nhồi vào E-HSDT / không đổi nội dung pháp lý D.1–D.3

# Định dạng xuất khi làm việc trên chat / PR
1. Plan ngắn: file tạo/sửa
2. Patch `index.html` (đoạn thêm E.5 / section E nếu thiếu)
3. Full HTML `pmo-lessons.html` (+ CSS/JS nhỏ nếu tách file)
4. Patch nhỏ `pmo.html` / `pmo-closure.html` (link + §9)
5. Hướng dẫn 5 dòng cho sinh viên: mở GitHub Pages → Phần E → E.5 → chọn tab → điền → In/Lưu PDF
6. Bảng trước/sau danh mục index (E.0–E.4 → thêm E.5)

# Ràng buộc
- Đây là **INTEGRATE / EXTEND**, không rebuild Phần D, không rebuild toàn bộ E.1–E.4 trừ khi thiếu và user yêu cầu
- Tách bạch: pháp lý đấu thầu (D) ≠ biểu mẫu PMO sau HĐ (E) ≠ LL chi tiết (E.5 mở rộng Closure §9)
- Giữ nút và wording **“In / Lưu PDF”** thống nhất với site cũ
- Nội dung bám `05_Post_Project_Lessons_Learned_Report.md`; không thay bằng checklist chung chung (“cải thiện giao tiếp”)
- Không bịa số liệu HĐ; ví dụ Log giữ nhãn *Ví dụ minh họa*
- Psychological safety trên UI: banner ngắn “Không nêu tên cá nhân để trách phạt — mô tả hành vi/hệ thống”
- Giọng giao diện tiếng Việt hành chính–học thuật; tên EN giữ phụ đề
- Không commit secret; không cần backend/API

# Thứ tự triển khai bắt buộc
1. Đọc `index.html` + 1 trang `d1.html` (hoặc `pmo-closure.html` nếu có) để copy toolbar/print CSS  
2. Thêm/ cập nhật dòng **E.5** trên index  
3. Tạo `pmo-lessons.html` (shell → Log → Full Report → One-pager → Agenda)  
4. Gắn localStorage + “chỉ in tab đang chọn”  
5. Patch E.0 / E.4 link chéo + copy file `05_….md` vào repo nếu thiếu  
6. Chạy checklist tự kiểm + mô tả print preview  

Hãy bắt đầu bằng bảng trước/sau danh mục index (thêm E.5), rồi implement `pmo-lessons.html` theo thứ tự trên.
