# Vai trò
Bạn là front-end engineer + PMO designer, đang bảo trì GitHub Pages mock hồ sơ bài tập đóng vai môn Quản trị dự án CNTT.

Nhiệm vụ: **tích hợp bộ 4 biểu mẫu quản trị sau trúng thầu** vào site mock hiện có — thêm **một section riêng** trên index, tạo trang HTML printable (có form điền), và nút **In / Lưu PDF** giống pattern sẵn có.  
**Không** xây lại Phần D pháp lý; **không** nhồi 4 form vào E-HSDT như tài liệu đánh giá thầu.

# Baseline site (phải đọc / tôn trọng trước khi sửa)
- Index: https://quagh03.github.io/quantri_duan_cntt_hust/
- Repo giả định: `quagh03/quantri_duan_cntt_hust` (clone local nếu đang làm việc trên máy)
- Pattern trang tài liệu: `d1.html`, `d2.html`, `d3.html`
  - Toolbar: link `← Danh mục` + nút **`In / Lưu PDF`** (`window.print()` hoặc tương đương)
  - CSS print: ẩn toolbar, khổ A4, margin hợp lý, giữ bảng/chữ ký
  - Disclaimer hư cấu trên trang
- Index hiện có:
  - Bảng **Hồ sơ chính** (E-HSDT)
  - Bảng **Phần D – Hồ sơ pháp lý** (D.1 → D.3, gồm D.2-d/D.2-e)
  - Ghi chú: “Mỗi tài liệu có nút In / Lưu PDF…”

# Nguồn nội dung 4 tài liệu (bắt buộc dùng — không viết lại từ đầu nếu file đã có)
Thư mục local (nếu có trong workspace bài tập):
```
bieu_mau_pmo/
  00_Bo_Tai_Lieu_PMO_Tong_Hop.md
  01_Project_Control_Phase_Exit_Review_Checklist.md
  02_Project_Team_Member_Peer_Evaluation_Form.md
  03_Stakeholder_Post_Project_Evaluation_Form.md
  04_Project_Review_and_Closure_Report.md
```
Nếu repo GitHub Pages **chưa có** folder này: copy nguyên văn Markdown vào repo (ví dụ `docs/bieu_mau_pmo/` hoặc `content/pmo/`) rồi render sang HTML.  
Ưu tiên **giữ nguyên cấu trúc checklist/form**; chỉ adapt markup + CSS cho web/print.

# Ngữ cảnh dự án (đồng bộ metadata trang)
- Gói thầu: Phát triển hệ thống phân phối trực tuyến (Web + Mobile) — E-TBMT **IB2600184512-00**
- Chủ đầu tư: Chuỗi cửa hàng thời trang QA
- Nhà thầu: Công ty CP Công nghệ Số Sao Bắc (Sao Bắc Tech)
- NTP pentest: Lá Chắn Việt (không cần đưa vào section PMO trừ khi form nhắc)
- Hybrid–Scrum; gate G0/G1→G7; release R0–R4; BG1–BG9; mốc M0–M7; bảo hành 12 tháng
- Disclaimer trên mọi trang PMO (giống Phần D):
  > Bản mẫu hư cấu phục vụ bài tập đóng vai môn Quản trị dự án CNTT. Không có giá trị pháp lý; không phải tài liệu đánh giá thầu trong E-HSDT.

# Mục tiêu UX
1. Trên **index**: thêm section mới (sau Phần D hoặc trước footer), tên rõ ràng phân biệt với pháp lý.
2. Mỗi tài liệu PMO mở được trang HTML riêng, **điền được** (input/textarea/checkbox/select) trước khi in.
3. Nút **In / Lưu PDF** trên mỗi trang → Chrome/Edge “Save as PDF”, A4, portrait.
4. (Tuỳ chọn nâng cao) Nút “In tất cả / xuất cả bộ” hoặc trang tổng hợp one-pager `00`.
5. Giữ style hiện có (header, bảng, typography, màu, nút) — **không** redesign toàn site.

# Việc cần làm (theo thứ tự)

## Bước 1 — Cập nhật `index.html`
Thêm section mới, ví dụ:

### Phần E – Biểu mẫu quản trị dự án sau trúng thầu (PMO)
> Dùng sau khi ký HĐ / thực thi & đóng dự án. **Không** thuộc bộ đánh giá tư cách hợp lệ Phần D.

Bảng danh mục:

| Ký hiệu | Tài liệu | File nguồn | Trang HTML | Ghi chú |
| --- | --- | --- | --- | --- |
| E.0 | Bộ tài liệu PMO — one-pager tổng hợp | `00_Bo_Tai_Lieu_PMO_Tong_Hop.md` | `pmo.html` hoặc `pmo-index.html` | Khi nào dùng / RACI / lưu trữ |
| E.1 | Kiểm soát thoát giai đoạn · *Project Control Phase Exit Review Checklist* | `01_…Checklist.md` | `pmo-gate.html` | Gate G0/G1→G7; Pass/Conditional/Fail |
| E.2 | Đánh giá đồng nghiệp · *Peer Evaluation Form* | `02_…Peer….md` | `pmo-peer.html` | Nội bộ; Sprint Pulse + Full |
| E.3 | Đánh giá stakeholder · *Stakeholder Post Project Evaluation* | `03_…Stakeholder….md` | `pmo-stakeholder.html` | ≤10 phút; nhóm A–E |
| E.4 | Báo cáo đóng dự án · *Project Review and Closure Report* | `04_…Closure….md` | `pmo-closure.html` | Sau Gate G7 / M7 |

Yêu cầu index:
- Link tới từng trang HTML (giống cách link `d1.html`…)
- Cập nhật dòng “Cập nhật danh mục” / ngày patch
- Giữ nguyên toàn bộ bảng Phần D và Hồ sơ chính
- Thêm 1 câu disclaimer ngắn dưới tiêu đề section E: không dùng để chấm thầu

## Bước 2 — Tạo trang HTML PMO (reusable shell)
Tạo pattern chung (có thể extract `assets/pmo.css` + `assets/print.css` nếu repo đã có CSS dùng chung):

Mỗi trang tối thiểu có:
1. **Toolbar (no-print)**
   - `← Danh mục` → `index.html`
   - Nút **`In / Lưu PDF`** → `window.print()`
   - (Khuyến nghị) Nút **`Xóa dữ liệu form`** / **`Tải bản mẫu trống`**
2. **Header tài liệu**: ký hiệu E.x, tên Việt + tên EN phụ, metadata gói thầu, phiên bản, ngày lập `[input type=date]`
3. **Khối hướng dẫn ngắn** (collapsible trên screen; ẩn hoặc rút gọn khi print nếu dài)
4. **Body form/checklist** chuyển từ Markdown → HTML semantic:
   - Bảng checklist: cột Status dùng `<select>` (Đạt / Chưa đạt / N/A) hoặc checkbox
   - Bằng chứng / Owner / Ghi chú: `<input>` / `<textarea>`
   - Thang Likert 1–5: radio hoặc select
   - Chữ ký: input họ tên + ngày
5. **Footer**: disclaimer + “In bằng trình duyệt → Save as PDF · khổ A4”
6. **`@media print`**:
   - `display:none` toolbar, nút, nav
   - nền trắng, chữ đen đủ tương phản
   - tránh cắt hàng bảng giữa trang (`tr { break-inside: avoid; }` khi khả thi)
   - input hiển thị giá trị đã điền (không mất border xấu; có thể dùng style print cho `input, textarea, select`)
   - page size A4; margin ~12–16mm

### Mapping file → trang (bắt buộc)

| Trang | Nội dung bắt buộc trên UI |
| --- | --- |
| `pmo.html` (E.0) | Render bảng tổng hợp từ `00_…`; link nhanh tới E.1–E.4; timeline gate (có thể ASCII/HTML đơn giản) |
| `pmo-gate.html` (E.1) | **Selector gate** (tabs hoặc `<select>`): G0/G1, G2-R1, G2-CC, G3, G4, G5, G6, G7 — mỗi gate một section `#gate-g…` printable; cuối mỗi gate: quyết định Pass/Conditional/Fail + chữ ký PO/PM/IT Lead + action items (3 dòng input) |
| `pmo-peer.html` (E.2) | Toggle **Sprint Pulse** / **Full-EOP**; form điểm 1–5; cảnh báo đỏ nhỏ: “Nội bộ — không gửi khách hàng” |
| `pmo-stakeholder.html` (E.3) | Chọn nhóm A–E (+ Pulse); chỉ hiện form nhóm đã chọn; Likert + NPS + 3 giữ/3 cải thiện |
| `pmo-closure.html` (E.4) | 11 mục báo cáo dạng section; bảng M0–M7 có ô ngày KH/ngày TT; checklist handover; khối phê duyệt đóng |

## Bước 3 — “Input các tài liệu” (form behavior)
Không cần backend. Yêu cầu client-side:

1. **Điền trực tiếp trên trang** trước khi In/PDF.
2. **Persist nhẹ (khuyến nghị):** `localStorage` theo key `pmo-E1`, `pmo-E2`… để F5 không mất dữ liệu demo; nút “Xóa dữ liệu đã lưu”.
3. Placeholder `[điền]` trong Markdown → `<input placeholder="[điền]">`.
4. Với E.1: khi đổi gate, scroll tới section; khi print có thể:
   - **Mặc định:** in cả trang (mọi gate) — hoặc
   - **Tốt hơn:** checkbox “Chỉ in gate đang chọn” (thêm class `.no-print` cho gate khác).
5. Không bắt buộc export file `.pdf` bằng thư viện JS; **Print to PDF trình duyệt** là đủ và khớp mock D.1–D.3.  
   Chỉ thêm `html2pdf` / `jspdf` nếu user đặc biệt yêu cầu — mặc định **không** thêm dependency nặng.

## Bước 4 — Đồng bộ nội dung từ Markdown
- Copy cấu trúc tiêu đề, bảng, RACI rút gọn, checklist từ file `bieu_mau_pmo/*.md`.
- Rút gọn phần “lý thuyết hướng dẫn” nếu quá dài trên web: giữ 5–7 dòng hướng dẫn + form đầy đủ.
- **Không** bịa thêm gate/methodology mâu thuẫn Hybrid–Scrum.
- Giữ thuật ngữ: DoD, BG1–BG9, M0–M7, C.11, B.3, B.4, NTP Lá Chắn Việt (khi nhắc pentest ở G3).

## Bước 5 — Navigation & polish
- Từ mỗi `pmo-*.html` có link sang các E khác (footer nhỏ no-print).
- Index: đếm số tài liệu section E = 5 dòng (E.0–E.4) hoặc 4 form + 1 one-pager rõ ràng.
- Mobile: form vẫn dùng được; print vẫn A4.
- Accessibility cơ bản: label gắn input; nút có tên rõ.

## Bước 6 — Checklist tự kiểm
- [ ] Phần D trên index **không đổi** (trừ ngày cập nhật toàn trang nếu cần)
- [ ] Section E xuất hiện, disclaimer “không phải tài liệu đánh giá thầu”
- [ ] 4 form + one-pager mở được, có **In / Lưu PDF**
- [ ] Điền form → print preview thấy giá trị đã nhập
- [ ] localStorage (nếu làm) hoạt động; có nút xóa
- [ ] E.1 chọn được từng gate; Conditional có chỗ action items
- [ ] E.2 ghi chú nội bộ / không gửi QA raw
- [ ] E.3 ≤ cảm giác form ngắn; có NPS
- [ ] E.4 có chữ ký đóng + ngày chuyển bảo hành
- [ ] Không thêm 4 form vào bảng Phần D
- [ ] CSS print ẩn toolbar
- [ ] README ngắn (tuỳ chọn): cách In → Save as PDF

# Định dạng xuất khi làm việc trên chat / PR
1. Plan ngắn: file tạo/sửa
2. Patch `index.html` (đoạn section E đầy đủ)
3. Full HTML các trang `pmo*.html` (+ CSS nếu tách file)
4. Hướng dẫn 5 dòng cho sinh viên: mở GitHub Pages → Phần E → điền → In/Lưu PDF
5. Bảng trước/sau danh mục index

# Ràng buộc
- Đây là **INTEGRATE / EXTEND**, không rebuild Phần D
- Tách bạch: pháp lý đấu thầu (D) ≠ biểu mẫu PMO sau HĐ (E)
- Giữ nút và wording **“In / Lưu PDF”** thống nhất với site cũ
- Nội dung form bám `bieu_mau_pmo/`; không thay bằng checklist chung chung
- Giọng giao diện tiếng Việt hành chính–học thuật, gọn; tên EN giữ làm phụ đề
- Không commit secret; không cần backend/API

# Thứ tự triển khai bắt buộc
1. Đọc `index.html` + 1 trang `d1.html` để copy toolbar/print CSS  
2. Thêm section E trên index  
3. Tạo `pmo.html` (E.0)  
4. Tạo lần lượt `pmo-gate.html` → `pmo-peer.html` → `pmo-stakeholder.html` → `pmo-closure.html`  
5. Gắn localStorage + “chỉ in gate đang chọn”  
6. Chạy checklist tự kiểm + chụp/mô tả print preview  

Hãy bắt đầu bằng bảng trước/sau danh mục index (thêm Phần E), rồi implement các trang theo thứ tự trên.
