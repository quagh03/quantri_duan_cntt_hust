# Kiểm soát thoát giai đoạn dự án  
## Project Control Phase Exit Review Checklist

| Mục | Nội dung |
|---|---|
| **Dự án** | Phát triển hệ thống phân phối trực tuyến (Web + Mobile) — E-TBMT IB2600184512-00 |
| **Chủ đầu tư** | Chuỗi cửa hàng thời trang QA |
| **Nhà thầu** | Công ty CP Công nghệ Số Sao Bắc (Sao Bắc Tech) |
| **Phiên bản** | 1.0 \| **Ngày hiệu lực** | [điền] |
| **Chủ sở hữu form** | PM/SM (Sao Bắc Tech) |
| **Lưu trữ** | Confluence: `QA-OMS / Governance / Phase Gates` + đính kèm biên bản PDF đã ký |

---

### 1. Mục đích
Checklist dùng để **kiểm soát thoát giai đoạn / quality gate** sau khi trúng thầu — quyết định Pass / Conditional Pass / Fail trước khi sang giai đoạn tiếp theo, gắn với BG1–BG9, release R0–R4 và mốc thanh toán M0–M7.  
**Không** dùng để đánh giá nhân sự và **không** thay thế phản hồi stakeholder.

### 2. Thời điểm dùng

| Gate | Thời điểm dự kiến | Giai đoạn | Liên kết release / BG / mốc |
|---|---|---|---|
| **G0/G1** | Hết tuần 6 | Sau GĐ0–GĐ1 + Sprint 0 | R0; BG1–BG2; trước thanh toán M2 |
| **G2** | Tuần 12 và tuần 18 (có thể lặp) | Sau cụm Sprint phát triển | R1 (BG4) / trước M3; code complete BG5 / trước M4 |
| **G3** | Hết tuần 20 | Sau Sprint 7 ổn định hóa | R2 (BG6); trước UAT |
| **G4** | Hết tuần 23 | Sau UAT + đào tạo | BG7; trước thanh toán M5 |
| **G5** | Hết tuần 25 | Sau pilot R3 | Trước go-live |
| **G6** | Tuần 26 | Go-live readiness | R4 (BG8); trước/tại M6 |
| **G7** | Hết tuần 30 | Exit ổn định 30 ngày | BG9; nghiệm thu cuối M7 → bảo hành |

### 3. RACI

| Hoạt động | PO (QA) | IT Lead (QA) | PM/SM | Architect | Proxy PO/BA | QA Lead | DevOps | Ban chỉ đạo QA |
|---|---|---|---|---|---|---|---|---|
| Chuẩn bị evidence & điền checklist | I | C | **R/A** | C | C | C | C | I |
| Review kỹ thuật / tích hợp / bảo mật | C | **R** | A | **R** | C | **R** | **R** | I |
| Quyết định Pass / Conditional / Fail | **A** | C | **R** | C | I | C | I | I (G6/G7: A đồng phê duyệt) |
| Theo dõi action items Conditional | C | C | **A** | R | R | R | R | I |

**Chú thích:** R = Responsible, A = Accountable, C = Consulted, I = Informed.

### 4. Hướng dẫn điền (5–7 dòng)
1. PM mở bản Confluence tương ứng gate **≥ 3 ngày làm việc** trước họp exit review (60–90 phút).
2. Mỗi dòng: điền **Bằng chứng** (link Jira/Confluence/ticket/báo cáo); Status = `Đạt` / `Chưa đạt` / `N/A`.
3. Owner mặc định theo cột; cập nhật nếu ủy quyền.
4. Họp: lần lượt nhóm A→G; ghi blocker vào mục H.
5. Quyết định: **Pass** (không blocker mở mức Cao/Nghiêm trọng liên quan gate) \| **Conditional Pass** (mỗi điều kiện = 1 action item: mô tả + owner + due date) \| **Fail** (không sang phase; lập recovery plan).
6. Ký số hoặc ký giấy; scan lưu cùng trang Confluence; gắn label `gate-gX-pass|conditional|fail`.
7. Action items Conditional **bắt buộc** tạo ticket Jira epic `GATE-Gx` và theo dõi đến Done trước hạn.

### 5. Quy ước đánh giá chung

| Quyết định | Tiêu chí |
|---|---|
| **Pass** | 100% hạng mục bắt buộc = Đạt; không còn lỗi mở Nghiêm trọng/Cao thuộc phạm vi gate; đủ biên bản thương mại nếu gắn mốc thanh toán |
| **Conditional Pass** | ≤ 3 hạng mục chưa đạt, không thuộc blocker bắt buộc (đánh dấu ★); có action items có hạn ≤ [điền, gợi ý 5–10 ngày làm việc] |
| **Fail** | Có blocker ★ chưa đạt; hoặc burn-up/Must-have B.3 lệch ngưỡng cảnh báo không có phương án được Ban chỉ đạo chấp thuận; hoặc thiếu bằng chứng nghiệm thu bắt buộc |

**Cột Status:** Đạt / Chưa đạt / N/A · **★** = bắt buộc để Pass (không được Conditional nếu thiếu).

---

## GATE G0/G1 — Sau khảo sát–thiết kế / Sprint 0 (tuần 6)

**Mục tiêu gate:** SRS + thiết kế + R0 walking skeleton sẵn sàng vào GĐ2 Scrum.  
**Đầu vào:** BG1 (SRS, backlog), bản thảo BG2, PoC CDC, Release Plan.  
**Đầu ra:** Biên bản G0/G1; phê duyệt BG2; điều kiện thanh toán M2.

### Checklist

| # | Hạng mục | Tiêu chí đạt | Bằng chứng / Link / Ticket | Owner | Status | Ghi chú |
|---|---|---|---|---|---|---|
| **A. Scope & backlog** ||||||
| A1 ★ | Phạm vi B.3 trong backlog | 100% mã chức năng TK/CH/DH tại B.3 có epic→story, MoSCoW Must-have gắn mã | Jira filter / BG1 | Proxy PO | | |
| A2 ★ | SRS được PO phê duyệt | Văn bản/email phê duyệt SRS (M1 hoàn tất) | Confluence + email | PO | | |
| A3 | CR mở | Không CR mở chưa phân loại theo C.11; log CR cập nhật | CR log | PM | | |
| A4 | Tech/product debt ban đầu | Danh sách debt đã ghi nhận, không block Sprint 1 | Jira label `debt` | Architect | | |
| **B. Schedule & milestones** ||||||
| B1 ★ | M2 readiness | Thiết kế + Sprint 0 xong theo kế hoạch tuần 6 | Burn-up / lịch Jira | PM | | |
| B2 | Release Plan | R0→R4 đã duyệt; map BG3–BG9 | BG2 – Release Plan | PM | | |
| B3 | Sprint 1 readiness | Sprint Backlog Sprint 1 đạt DoR ≥ 100% story cam kết | Jira Sprint 1 | Proxy PO | | |
| **C. Quality** ||||||
| C1 ★ | Prototype UI/UX | Prototype bấm được; usability ≥ 5 khách hàng thật (theo BG2) | Báo cáo usability | UI/UX | | |
| C2 | DoR/DoD đã công bố | DoR/DoD (C.4.4) trên Confluence, team xác nhận | Confluence | SM | | |
| C3 | PoC CDC | Độ trễ P95 < 3s trên bản sao Main DB | Báo cáo PoC | Architect | | |
| **D. Integration & data** ||||||
| D1 ★ | Quyền đọc Main DB / CDC | Quyền log giao dịch (hoặc môi trường PoC tương đương) sẵn sàng hoặc có kế hoạch có ngày | Ticket IT QA | IT Lead | | |
| D2 | ICD sơ bộ | ICD Main DB / POS / thanh toán / HĐĐT có phiên bản | BG2 – ICD | Architect | | |
| D3 | Mock/stub | Phụ thuộc ngoài chưa sẵn có mock cho Sprint 1–2 | Repo / wiki | Dev Lead | | |
| **E. Security & compliance** ||||||
| E1 | Mô hình dữ liệu PII | Phân loại PII; nguyên tắc NĐ 13/2023 ghi trong thiết kế | HLD mục Privacy | Architect | | |
| E2 | Baseline truy cập | Ma trận quyền DEV/STG; không dùng tài khoản dùng chung không kiểm soát | Runbook IAM | DevOps | | |
| E3 | SAST pipeline | Pipeline CI có bước SAST (có thể cảnh báo ở G0/G1) | CI config | DevOps | | |
| **F. Ops readiness** ||||||
| F1 ★ | DEV/STG + CI/CD | Pipeline xanh triển khai walking skeleton lên STG | URL STG + pipeline | DevOps | | |
| F2 | Monitoring tối thiểu | Health check + log tập trung cho skeleton | Dashboard link | DevOps | | |
| F3 | Kênh phối hợp | Jira/Confluence/chat dự án; lịch Scrum đã chốt | Kick-off minutes | PM | | |
| **G. Commercial / contract** ||||||
| G1 ★ | Biên bản nghiệm thu tăng dần thiết kế | BG1+BG2 được PO/IT Lead xác nhận đủ điều kiện M2 | Biên bản ký | PM | | |
| G2 | Hồ sơ thanh toán M2 | Đủ chứng từ theo HĐ (placeholder theo HĐ thực tế) | Folder commercial | PM | | |
| **H. Decision** ||||||
| H1 | Quyết định gate | Pass / Conditional / Fail | Biên bản này | PO + PM | | |

### Quyết định Gate G0/G1

| Trường | Giá trị |
|---|---|
| Quyết định | ☐ Pass &nbsp;&nbsp; ☐ Conditional Pass &nbsp;&nbsp; ☐ Fail |
| Điều kiện (nếu Conditional) | 1) … Owner: … Due: … / 2) … / 3) … |
| Blockers (nếu Fail) | … |
| Ngày họp | [điền] |

| Vai trò | Họ tên | Chữ ký | Ngày |
|---|---|---|---|
| PO (QA) | | | |
| PM/SM (Sao Bắc Tech) | | | |
| IT Lead (QA) | | | |

**Action items mẫu (Conditional):**  
- [ ] A1: Bổ sung story thiếu mã B.3 `DH-xx` — Proxy PO — due T+3  
- [ ] D1: IT QA cấp quyền đọc CDC trên bản sao — IT Lead — due T+5  
- [ ] F1: Sửa pipeline deploy STG đến xanh 2 lần liên tiếp — DevOps — due T+2  

---

## GATE G2 — Sau cụm Sprint phát triển (R1 tuần 12 / Code complete tuần 18)

**Áp dụng 2 lần (hoặc 1 lần rút gọn + 1 lần đầy đủ):**  
- **G2-R1:** trước/tại R1 MVP (BG4), liên quan M3  
- **G2-CC:** tại code complete (BG5), trước thanh toán M4  

Đánh dấu phiên bản họp: ☐ G2-R1 (T12) &nbsp;&nbsp; ☐ G2-CC (T18)

### Checklist

| # | Hạng mục | Tiêu chí đạt | Bằng chứng / Link / Ticket | Owner | Status | Ghi chú |
|---|---|---|---|---|---|---|
| **A. Scope & backlog** ||||||
| A1 ★ | Must-have theo kế hoạch release | G2-R1: epic tìm kiếm + tồn kho RT + CH cơ bản Done; G2-CC: 100% chức năng B.3 chạy được trên STG | Burn-up B.3 + Jira | Proxy PO | | |
| A2 | Story bị PO từ chối | Số story reject tại review được xử lý hoặc có plan ≤ 1 sprint | Sprint review BB | PO | | |
| A3 | CR / đổi ngang C.11 | Mọi thay đổi ngoài B.3 epic đã qua CR hoặc đổi ngang ghi nhận | CR log | PM | | |
| A4 | Debt không block mốc | Không debt Critical mở block R1/M4 | Jira `debt` | Architect | | |
| **B. Schedule & milestones** ||||||
| B1 ★ | Commitment sprint | Tỷ lệ cam kết sprint đạt ≥ 85% trên các sprint đã đóng của cụm | Báo cáo tuần | SM | | |
| B2 ★ | Burn-up | G2-R1: đúng quỹ đạo R1; G2-CC: Must-have hoàn thành trước tuần 18 (hoặc có phương án Ban chỉ đạo đã duyệt) | Burn-up chart | PM | | |
| B3 | Velocity ổn định | Không giảm > 30% so với TB 3 sprint gần nhất mà không giải thích | Velocity chart | SM | | |
| **C. Quality** ||||||
| C1 ★ | DoD | 100% story Accepted tại review đạt DoD C.4.4 | Checklist DoD / BB BG3 | QA Lead | | |
| C2 ★ | Defect mở | 0 lỗi Nghiêm trọng/Cao mở trên phạm vi release | Jira defect filter | QA Lead | | |
| C3 ★ | Unit test coverage | Coverage mã mới ≥ 70% (bắt buộc tại G2-CC; khuyến nghị tại G2-R1) | CI report | Dev Lead | | |
| C4 | NFR sớm | Từ Sprint 3: P95 API liên quan ≤ 1,5s (smoke); SAST không lỗi Cao | Báo cáo k6 nhẹ / SAST | QA/DevOps | | |
| C5 | Defect leakage nội bộ | Leakage STG←DEV trong ngưỡng team thống nhất [điền %] | Metrics | QA Lead | | |
| **D. Integration & data** ||||||
| D1 ★ | CDC / tồn kho | G2-R1: đồng bộ tồn kho RT demo được trên STG với dữ liệu ẩn danh; G2-CC: tích hợp theo ICD giai đoạn | Demo recording / ICD test | Architect | | |
| D2 | POS / thanh toán / HĐĐT | Trạng thái tích hợp đúng Release Plan; lệch có CR hoặc mock có hạn | Integration board | Architect | | |
| D3 | Dữ liệu STG | Dataset ẩn danh, đủ cho demo PO | Data checklist | BA + DevOps | | |
| **E. Security & compliance** ||||||
| E1 ★ | SAST | Không lỗ hổng Cao/Nghiêm trọng mở trên nhánh chính | SAST dashboard | DevOps | | |
| E2 | Quyền & secret | Secret không hard-code; vault/CI secrets | Review sample PR | Architect | | |
| E3 | PII trên STG | Không PII thật chưa ẩn danh | Data policy check | BA | | |
| **F. Ops readiness** ||||||
| F1 | Monitoring | Dashboard dịch vụ R1/R2 phạm vi; alert cơ bản | Grafana/… link | DevOps | | |
| F2 | Runbook stub | Sự cố deploy/rollback STG có runbook ngắn | Confluence | DevOps | | |
| F3 | Mobile (nếu G2-CC) | Build iOS/Android nội bộ cài được cho QA | TestFlight/Internal | Mobile Lead | | |
| **G. Commercial / contract** ||||||
| G1 ★ | Biên bản sprint review | BG3 đủ cho các sprint trong cụm; làm căn cứ M3/M4 | BB đã ký | PM | | |
| G2 | Thanh toán | G2-CC: hồ sơ đề nghị thanh toán M4 (25%) sẵn sàng khi Pass | Commercial pack | PM | | |
| **H. Decision** ||||||
| H1 | Quyết định | Pass / Conditional / Fail | Biên bản | PO + PM | | |

### Quyết định Gate G2

| Trường | Giá trị |
|---|---|
| Phiên bản gate | ☐ G2-R1 &nbsp;&nbsp; ☐ G2-CC |
| Quyết định | ☐ Pass &nbsp;&nbsp; ☐ Conditional Pass &nbsp;&nbsp; ☐ Fail |
| Điều kiện / blockers | … |
| Ngày họp | [điền] |

| Vai trò | Họ tên | Chữ ký | Ngày |
|---|---|---|---|
| PO (QA) | | | |
| PM/SM | | | |
| IT Lead (QA) | | | |

**Action items mẫu:**  
- [ ] C2: Đóng hết bug Cao `#QA-xxx` — Dev Owner — due trước demo M3/M4  
- [ ] B2: Trình Ban chỉ đạo phương án tăng lực / tái ưu tiên — PM — due T+2  
- [ ] D2: Chốt nhà cung cấp cổng thanh toán (phụ thuộc TĐ-06) — PO — due [điền]  

---

## GATE G3 — Ổn định hóa / trước UAT (tuần 20, sau Sprint 7 / R2)

**Mục tiêu:** Beta kín + báo cáo kiểm thử hệ thống/hiệu năng/bảo mật đạt ngưỡng vào UAT (BG6 → chuẩn bị BG7).

### Checklist

| # | Hạng mục | Tiêu chí đạt | Bằng chứng / Link / Ticket | Owner | Status | Ghi chú |
|---|---|---|---|---|---|---|
| **A. Scope & backlog** ||||||
| A1 ★ | Scope B.3 | 100% Must-have B.3 có trên STG/beta build | Traceability B.3↔Jira | Proxy PO | | |
| A2 | Should/Could | Không nhầm Should/Could vào phạm vi UAT bắt buộc | Backlog labels | PO | | |
| A3 | CR freeze UAT | CR mới sau G3 chỉ xử lý qua C.11; freeze scope UAT đã thông báo | Email/Confluence | PM | | |
| **B. Schedule & milestones** ||||||
| B1 ★ | R2 đúng hạn | Beta kín tuần 20–21 theo Release Plan | Release ticket | PM | | |
| B2 | Kế hoạch UAT | Lịch UAT tuần 21–23, kịch bản & môi trường chốt | UAT plan | QA Lead + PO | | |
| **C. Quality** ||||||
| C1 ★ | Kiểm thử hệ thống | Báo cáo HT đạt; 0 Nghiêm trọng/Cao mở | Test report BG6 | QA Lead | | |
| C2 ★ | Hiệu năng B.4 | P95 thao tác chính ≤ 1,5s @ 1000 VU; API search < 300ms (hoặc đạt ngưỡng cam kết trong báo cáo) | k6 report | QA Lead | | |
| C3 ★ | Tương thích | Chrome/Safari/Firefox/Edge (2 bản gần nhất); iOS 15+; Android 9+; 320px | BrowserStack report | QA Lead | | |
| C4 | Regression tự động | Suite hồi quy xanh trên build ứng viên UAT | CI | QA Lead | | |
| **D. Integration & data** ||||||
| D1 ★ | Tích hợp end-to-end | POS/kho/kế toán/HĐĐT/cổng TT theo ICD — E2E pass trên STG | E2E evidence | Architect | | |
| D2 ★ | CDC | P95 độ trễ < 3s; công cụ đối soát sẵn sàng | CDC metrics | DevOps | | |
| D3 | Data UAT | Bộ dữ liệu UAT ẩn danh + kịch bản nghiệp vụ cửa hàng/kho/shipper | Data pack | BA | | |
| **E. Security & compliance** ||||||
| E1 ★ | Pentest (NTP Lá Chắn Việt) | Không lỗ hổng Cao/Nghiêm trọng mở; OWASP Top 10 | Báo cáo pentest | Architect + NTP | | |
| E2 ★ | TLS / mã hóa PII | HTTPS/TLS 1.3; PII mã hóa khi lưu (theo thiết kế) | Security checklist | Architect | | |
| E3 | SAST/DAST | Không Cao/Nghiêm trọng mở | Scan reports | DevOps | | |
| **F. Ops readiness** ||||||
| F1 ★ | Beta phân phối | TestFlight / Play Internal cho ~50 NV QA | Store consoles | Mobile Lead | | |
| F2 | Monitoring beta | Alert on-call nhà thầu trong dogfooding | On-call roster | DevOps | | |
| F3 | HDSD draft | Bản nháp HDSD + video outline cho đào tạo | Confluence | BA | | |
| **G. Commercial / contract** ||||||
| G1 | BG6 acceptance | Biên bản xác nhận beta + báo cáo KT | BB BG6 | PM | | |
| G2 | Sẵn sàng M5 path | Điều kiện tiến tới UAT/M5 rõ ràng | Checklist M5 | PM | | |
| **H. Decision** ||||||
| H1 | Quyết định vào UAT | Pass / Conditional / Fail | Biên bản | PO + PM | | |

### Quyết định Gate G3

| Quyết định | ☐ Pass &nbsp;&nbsp; ☐ Conditional Pass &nbsp;&nbsp; ☐ Fail |
| Ngày | [điền] |

| Vai trò | Họ tên | Chữ ký | Ngày |
|---|---|---|---|
| PO (QA) | | | |
| PM/SM | | | |
| IT Lead (QA) | | | |

**Action items mẫu:**  
- [ ] E1: Vá finding pentest `#SEC-02` mức Cao — Dev — due trước ngày UAT D-2  
- [ ] C2: Tối ưu API search P95 — Backend — due T+3  
- [ ] F3: Hoàn thiện 3 video đào tạo cửa hàng — BA — due tuần 22  

---

## GATE G4 — Sau UAT (tuần 23, BG7 / trước M5)

### Checklist

| # | Hạng mục | Tiêu chí đạt | Bằng chứng / Link / Ticket | Owner | Status | Ghi chú |
|---|---|---|---|---|---|---|
| **A. Scope & backlog** ||||||
| A1 ★ | UAT scope | 100% kịch bản Must-have B.3 đã chạy UAT | Ma trận UAT | QA Lead | | |
| A2 | Defect từ UAT | 0 Nghiêm trọng/Cao mở; Trung bình có plan trước pilot | Defect burn-down | QA Lead | | |
| A3 | CR phát sinh UAT | Đã phân loại: sửa ngay / CR / backlog bảo hành | CR log | PM | | |
| **B. Schedule & milestones** ||||||
| B1 ★ | M5 | UAT đạt + đào tạo xong đúng tuần 23 | Lịch thực tế | PM | | |
| B2 | Lịch pilot | 03 cửa hàng pilot, tuần 24–25 đã chốt | Pilot plan | PO | | |
| **C. Quality** ||||||
| C1 ★ | Biên bản UAT | UAT Pass (hoặc Conditional có sign-off PO) | BB UAT BG7 | PO | | |
| C2 ★ | Đào tạo | ≥ 90% học viên vượt bài kiểm tra thao tác | Bảng điểm đào tạo | BA | | |
| C3 | HDSD + video | Tài liệu HDSD & video đào tạo đã bàn giao bản UAT | BG7 links | BA | | |
| C4 | DoD UAT build | Build UAT gắn tag; thay đổi sau UAT qua change control | Git tag | DevOps | | |
| **D. Integration & data** ||||||
| D1 | Đối soát dữ liệu UAT | Không sai lệch tồn kho theo kịch bản đối soát | Báo cáo đối soát | Architect | | |
| D2 | Cut-over draft | Kế hoạch cut-over/rollback bản nháp cho pilot | Runbook draft | DevOps | | |
| **E. Security & compliance** ||||||
| E1 | Quyền UAT | Tài khoản UAT thu hồi/điều chỉnh sau UAT theo chính sách | IAM ticket | IT Lead | | |
| E2 | Nhật ký xử lý PII trong UAT | Tuân thủ thỏa thuận dữ liệu thử nghiệm | Checklist | BA | | |
| **F. Ops readiness** ||||||
| F1 ★ | Support pilot | Ma trận hỗ trợ cửa hàng pilot (L1 QA / L2 nhà thầu) | Support roster | PM | | |
| F2 | Training confirmation | Danh sách cửa hàng/kho/shipper đã đào tạo | Attendance | BA | | |
| **G. Commercial / contract** ||||||
| G1 ★ | Thanh toán M5 | Đủ điều kiện đề nghị thanh toán 20% sau UAT đạt | Commercial pack | PM | | |
| G2 | BG7 signed | Kịch bản + BB UAT + HDSD xác nhận | BG7 | PM | | |
| **H. Decision** ||||||
| H1 | Vào pilot | Pass / Conditional / Fail | Biên bản | PO + PM | | |

### Quyết định Gate G4

| Quyết định | ☐ Pass &nbsp;&nbsp; ☐ Conditional Pass &nbsp;&nbsp; ☐ Fail |
| Ngày | [điền] |

| Vai trò | Họ tên | Chữ ký | Ngày |
|---|---|---|---|
| PO (QA) | | | |
| PM/SM | | | |
| IT Lead (QA) | | | |

**Action items mẫu:**  
- [ ] A2: Fix bug Trung bình `#UAT-17` trước pilot D-1 — Dev — due [điền]  
- [ ] F1: Phân ca on-call pilot cuối tuần — SM — due T+1  

---

## GATE G5 — Sau pilot (tuần 24–25, R3)

### Checklist

| # | Hạng mục | Tiêu chí đạt | Bằng chứng / Link / Ticket | Owner | Status | Ghi chú |
|---|---|---|---|---|---|---|
| **A. Scope & backlog** ||||||
| A1 | Feedback pilot | 100% feedback ưu tiên P0/P1 đã triage (fix / CR / wontfix) | Feedback board | Proxy PO | | |
| A2 ★ | Không scope creep | Không phát sinh chức năng ngoài B.3 đưa vào go-live mà chưa CR | CR log | PM | | |
| **B. Schedule & milestones** ||||||
| B1 ★ | Pilot window | Pilot đủ thời lượng đã chốt; báo cáo kết quả tuần 25 | Pilot report | PM | | |
| B2 | Go-live date | Ngày M6 tuần 26 được Ban chỉ đạo xác nhận | Meeting notes | PO | | |
| **C. Quality** ||||||
| C1 ★ | Ổn định pilot | 0 sự cố Nghiêm trọng mở; lỗi Cao có workaround được PO chấp nhận | Incident log | QA Lead | | |
| C2 | UX cửa hàng | Phản hồi 03 cửa hàng pilot không có blocker nghiệp vụ | Mini stakeholder form | BA | | |
| C3 | App RC | Bản RC (ứng viên phát hành) gắn version | Store / git tag | Mobile Lead | | |
| **D. Integration & data** ||||||
| D1 ★ | Dữ liệu thật pilot | Đối soát tồn kho hàng ngày sai lệch = 0 trong cửa sổ pilot (hoặc giải thích có duyệt) | Đối soát 7 ngày | Architect | | |
| D2 ★ | Cut-over/rollback | Kế hoạch cut-over & rollback đã diễn tập hoặc walkthrough | Drill notes | DevOps | | |
| D3 | Đồng bộ CDC PRD-ready | Cấu hình CDC cho PRD đã review | Config review | DevOps | | |
| **E. Security & compliance** ||||||
| E1 | Truy cập pilot | Chỉ cửa hàng/user được phép; nhật ký truy cập | IAM | IT Lead | | |
| E2 | Sự cố bảo mật | Không incident bảo mật mở | Sec log | Architect | | |
| **F. Ops readiness** ||||||
| F1 ★ | Runbook vận hành | Runbook L1/L2, FAQ cửa hàng, escalation | Confluence | DevOps + BA | | |
| F2 ★ | Monitoring PRD | Dashboard + alert + on-call 24/7 kế hoạch go-live | Monitoring | DevOps | | |
| F3 | Training toàn chuỗi (kế hoạch) | Kế hoạch đào tạo lan tỏa trước M6 | Training plan | BA | | |
| **G. Commercial / contract** ||||||
| G1 | Sẵn sàng BG8 | Điều kiện go-live (PRD, store, data) tracked | BG8 checklist | PM | | |
| **H. Decision** ||||||
| H1 | Go / No-Go tiến G6 | Pass / Conditional / Fail | Biên bản | PO + IT Lead + PM | | |

### Quyết định Gate G5

| Quyết định | ☐ Pass &nbsp;&nbsp; ☐ Conditional Pass &nbsp;&nbsp; ☐ Fail |
| Ngày | [điền] |

| Vai trò | Họ tên | Chữ ký | Ngày |
|---|---|---|---|
| PO (QA) | | | |
| PM/SM | | | |
| IT Lead (QA) | | | |

**Action items mẫu:**  
- [ ] D2: Diễn tập rollback 30 phút trên STG mirror — DevOps — due D-2 go-live  
- [ ] C1: Đóng incident `#INC-0x` hoặc xác nhận workaround — PO — due D-1  

---

## GATE G6 — Go-live readiness (tuần 26, R4 / BG8 / M6)

### Checklist

| # | Hạng mục | Tiêu chí đạt | Bằng chứng / Link / Ticket | Owner | Status | Ghi chú |
|---|---|---|---|---|---|---|
| **A. Scope & backlog** ||||||
| A1 ★ | Scope go-live | Đúng phạm vi B.3 + CR đã duyệt; out-of-scope không đưa PRD | Scope baseline | PO | | |
| A2 | Known issues | Danh sách known issues được PO ký chấp nhận | Known issues | QA Lead | | |
| **B. Schedule & milestones** ||||||
| B1 ★ | Cửa sổ go-live | Thời điểm cut-over, war-room, rollback window đã chốt | Go-live plan | PM | | |
| B2 | Truyền thông nội bộ QA | Cửa hàng/kho/shipper/kế toán nhận hướng dẫn | Comms pack | PO | | |
| **C. Quality** ||||||
| C1 ★ | Build PRD | Version go-live = bản đã qua G5; hash/tag lưu | Release notes | DevOps | | |
| C2 ★ | Smoke PRD | Smoke sau deploy Pass | Smoke checklist | QA Lead | | |
| C3 | NFR sẵn sàng đo | Monitoring sẵn để đo uptime/P95 sau go-live | Dashboards | DevOps | | |
| **D. Integration & data** ||||||
| D1 ★ | Chuyển đổi dữ liệu | Đối soát dữ liệu khớp 100% theo tiêu chí BG8 | Data reconciliation | Architect | | |
| D2 ★ | Cut-over thực thi | Các bước cut-over có owner + T+ checklist | Cut-over sheet | DevOps | | |
| D3 ★ | Rollback sẵn sàng | Tiêu chí kích hoạt rollback rõ; backup/RPO≤5p, RTO≤15p | Rollback plan | DevOps | | |
| D4 | Store publish | App Store / Google Play bản chính thức sẵn sàng submit/release | Store status | Mobile Lead | | |
| **E. Security & compliance** ||||||
| E1 ★ | Hardening PRD | TLS, WAF/security header, secret PRD, tắt tài khoản tạm | Sec checklist | Architect | | |
| E2 ★ | Quyền production | Least privilege; break-glass có quy trình | IAM PRD | IT Lead | | |
| E3 | NĐ 13/2023 | Thông báo/chính sách xử lý DL cá nhân theo thỏa thuận QA | Privacy pack | BA + PO | | |
| **F. Ops readiness** ||||||
| F1 ★ | War-room | Danh sách war-room 72h; kênh chat; cầu thang leo thang | Roster | PM | | |
| F2 ★ | Support L1/L2/L3 | SLA nội bộ giai đoạn ổn định đã phổ biến | Support matrix | PM | | |
| F3 | Backup & restore | Backup PRD verified | Restore test note | DevOps | | |
| **G. Commercial / contract** ||||||
| G1 ★ | BG8 | Hệ thống PRD + app + data + cut-over/rollback documented | BG8 pack | PM | | |
| G2 | Mốc M6 | Xác nhận go-live toàn chuỗi (thanh toán theo HĐ — thường gắn M7) | BB go-live | PO | | |
| **H. Decision** ||||||
| H1 ★ | Go / No-Go | Pass mới được cut-over; Fail = dừng/hoãn | Biên bản G6 | Ban chỉ đạo + PO + PM | | |

### Quyết định Gate G6 — GO / NO-GO

| Quyết định | ☐ GO (Pass) &nbsp;&nbsp; ☐ GO with conditions &nbsp;&nbsp; ☐ NO-GO (Fail) |
| Giờ cut-over dự kiến | [điền] |
| Ngày | [điền] |

| Vai trò | Họ tên | Chữ ký | Ngày |
|---|---|---|---|
| PO (QA) | | | |
| Ban chỉ đạo QA (đại diện) | | | |
| PM/SM (Sao Bắc Tech) | | | |
| IT Lead (QA) | | | |

**Action items mẫu:**  
- [ ] D1: Hoàn tất đối soát SKU lệch `#DATA-04` — Architect — trước giờ G  
- [ ] F1: Xác nhận số hotline war-room — PM — T-4h  

---

## GATE G7 — Exit ổn định 30 ngày / nghiệm thu cuối → bảo hành (tuần 30, BG9 / M7)

### Checklist

| # | Hạng mục | Tiêu chí đạt | Bằng chứng / Link / Ticket | Owner | Status | Ghi chú |
|---|---|---|---|---|---|---|
| **A. Scope & backlog** ||||||
| A1 ★ | Phạm vi hợp đồng | B.3 + CR đã duyệt đã giao; out-of-scope chuyển backlog giai đoạn 2/bảo hành | Scope matrix | PO + PM | | |
| A2 | Enhancement backlog | Backlog sau dự án đã bàn giao PO | Jira filter | Proxy PO | | |
| **B. Schedule & milestones** ||||||
| B1 ★ | 30 ngày ổn định | Đủ cửa sổ tuần 27–30; báo cáo vận hành | Ops report 30d | PM | | |
| B2 ★ | M7 | Đủ điều kiện nghiệm thu cuối / thanh toán 15% | Commercial + BB | PM | | |
| **C. Quality** ||||||
| C1 ★ | Uptime B.4 | Uptime ≥ 99,9%/tháng trong cửa sổ đo | Monitoring export | DevOps | | |
| C2 ★ | Đồng bộ | Đối soát 7 ngày liên tiếp không sai lệch tồn kho | Đối soát | Architect | | |
| C3 | Defect leakage PRD | Leakage trong ngưỡng [điền]; 0 Nghiêm trọng mở không có plan | Defect metrics | QA Lead | | |
| C4 | SLA sự cố giai đoạn ổn định | Tuân thủ cam kết xử lý sự cố (theo HĐ/SLA) | Ticket SLA report | PM | | |
| **D. Integration & data** ||||||
| D1 | Tích hợp ổn định | Không sự cố tích hợp P0 mở | Incident log | Architect | | |
| D2 | Blue-green / release | Quy trình phát hành bảo hành đã thử | Release record | DevOps | | |
| **E. Security & compliance** ||||||
| E1 | Residual security | Finding còn lại ≤ Trung bình có plan trong bảo hành | Sec backlog | Architect | | |
| E2 | Thu hồi quyền dự án | Tài khoản tạm nhà thầu thu hẹp theo mô hình bảo hành | IAM | IT Lead | | |
| **F. Ops readiness** ||||||
| F1 ★ | Handover package | Mã nguồn, tài liệu vận hành, tài khoản, license — đủ BG9 | Handover checklist (Form 4 §6) | PM | | |
| F2 ★ | Training xác nhận | Đội vận hành QA xác nhận sẵn sàng độc lập (có hỗ trợ bảo hành) | Sign-off IT Lead | IT Lead | | |
| F3 | Chuyển Kanban bảo hành | Board bảo hành, SLA, lịch phát hành tháng | Jira BH | SM | | |
| **G. Commercial / contract** ||||||
| G1 ★ | Biên bản nghiệm thu cuối | Ký giữa QA và Sao Bắc Tech | BB M7 | PO + PM | | |
| G2 ★ | Ngày bắt đầu bảo hành 12 tháng | Ghi rõ ngày hiệu lực | HĐ phụ lục / BB | PM | | |
| G3 | Thanh toán M7 | Hồ sơ 15% | Commercial | PM | | |
| G4 | Code escrow / license | Theo điều khoản HĐ — checklist đủ hoặc N/A có giải thích | Legal pack | PM | | |
| **H. Decision** ||||||
| H1 ★ | Đóng dự án → bảo hành | Pass / Conditional / Fail | Biên bản G7 | Ban chỉ đạo + PO + PM | | |

### Quyết định Gate G7

| Quyết định | ☐ Pass — đóng dự án, chuyển bảo hành &nbsp;&nbsp; ☐ Conditional Pass &nbsp;&nbsp; ☐ Fail — chưa nghiệm thu |
| Ngày chuyển bảo hành | [điền] |
| Ngày họp | [điền] |

| Vai trò | Họ tên | Chữ ký | Ngày |
|---|---|---|---|
| PO (QA) | | | |
| Ban chỉ đạo QA (đại diện) | | | |
| PM/SM (Sao Bắc Tech) | | | |
| IT Lead (QA) | | | |

**Action items mẫu:**  
- [ ] F1: Bàn giao repo + quyền read cho IT QA — DevOps — due T+2  
- [ ] C1: Giải trình downtime phút `#OPS-30d` — DevOps — due trước ký M7  
- [ ] A2: Import enhancement backlog vào board bảo hành — Proxy PO — due T+5  

---

## Phụ lục A — Mapping nhanh Gate ↔ DoD / BG / Mốc

| Gate | DoD / Quality | BG | Mốc thanh toán liên quan |
|---|---|---|---|
| G0/G1 | DoR Sprint 1; PoC; prototype | BG1, BG2 | M2 (20%) |
| G2-R1 | DoD stories R1 | BG3, BG4 | M3 (theo dõi) |
| G2-CC | DoD + coverage ≥70% | BG3, BG5 | M4 (25%) |
| G3 | NFR B.4 + pentest | BG6 | Trước M5 |
| G4 | UAT + đào tạo ≥90% | BG7 | M5 (20%) |
| G5 | Pilot ổn định | (chuẩn bị BG8) | Trước M6 |
| G6 | Cut-over/rollback | BG8 | M6 |
| G7 | 30 ngày ổn định + handover | BG9 | M7 (15%) + bảo hành |

## Phụ lục B — Lưu trữ & đặt tên file
`[IB2600184512]_Gate-Gx_[Pass|Cond|Fail]_YYYYMMDD.pdf`  
Jira: epic `GATE`, label `phase-exit`.  
Confluence parent: Phase Gates (quyền PO, IT Lead, Ban chỉ đạo: view; PM: edit).

---

*Tài liệu nội bộ PMO Sao Bắc Tech — dùng sau trúng thầu. Không đưa vào E-HSDT như tài liệu đánh giá thầu.*
