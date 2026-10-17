# Báo cáo rà soát và đóng dự án  
## Project Review and Closure Report

| Mục | Nội dung |
|---|---|
| **Dự án** | Phát triển hệ thống phân phối trực tuyến (Web + Mobile) |
| **Mã TBMT / HĐ** | E-TBMT IB2600184512-00 / HĐ số: [điền] |
| **Chủ đầu tư** | Chuỗi cửa hàng thời trang QA |
| **Nhà thầu** | Công ty CP Công nghệ Số Sao Bắc (Sao Bắc Tech) |
| **Loại HĐ** | Trọn gói \| **Thời gian** | 30 tuần (+ bảo hành 12 tháng) |
| **Phiên bản báo cáo** | 1.0 \| **Ngày lập** | [điền] |
| **Cột mốc đóng** | Sau Gate **G7** / nghiệm thu cuối (M7, tuần 30) |
| **Tác giả** | PM/SM: [điền] \| **Rà soát** | Architect, QA Lead \| **Phê duyệt** | PO + Ban chỉ đạo QA |
| **Lưu trữ** | Confluence: `QA-OMS / Closure` + PDF ký số; Jira epic `CLOSURE` |

---

### Mục đích
Tổng hợp evidence-based để **ra quyết định đóng dự án**, chuyển bảo hành 12 tháng, ghi nhận benefits / lessons learned và bàn giao vận hành.  
Báo cáo này **không** thay thế biên bản nghiệm thu pháp lý từng mốc; nó tham chiếu các biên bản đó.

### Thời điểm dùng
Sau khi checklist Gate G7 đạt Pass hoặc Conditional Pass (các điều kiện đóng được gắn ticket và hạn). Lập trong tuần 30; cập nhật phụ lục nếu Conditional.

### RACI

| Mục báo cáo | PM/SM | Architect | QA Lead | Proxy PO | PO QA | Ban chỉ đạo | IT Lead |
|---|---|---|---|---|---|---|---|
| Soạn thảo tổng hợp | **R/A** | C | C | C | C | I | C |
| Số liệu kỹ thuật / NFR / handover | C | **R** | **R** | I | I | I | **R** (xác nhận nhận bàn giao) |
| Benefits & đánh giá nghiệp vụ | C | I | I | C | **R** | **A** | C |
| Phê duyệt đóng & ngày BH | C | I | I | I | **A** | **A** | C |

### Hướng dẫn điền (5–7 dòng)
1. Chỉ điền số liệu có nguồn (Jira, monitoring, biên bản, commercial); thiếu thì để `[điền]` — **không ước lượng giả**.
2. Mỗi mục “Pass/Fail” tham chiếu Gate G7 và BG1–BG9.
3. Phần đánh giá đội/stakeholder chỉ dùng **synthesis ẩn danh** từ Form 2–3.
4. Open items phải có owner + hạn + board bảo hành.
5. Độ dài mục tiêu 6–10 trang khi xuất Word; phụ lục có thể tách file.
6. Gắn link Confluence/Jira vào cột Evidence — không paste screenshot dài vào thân báo cáo.
7. Sau khi ký §11: đổi trạng thái Jira dự án → `Closed`; board BH → `Active`.

---

## 1. Executive summary

### 1.1. Mục tiêu ban đầu vs kết quả

| Mục tiêu (theo HĐ / Project Plan) | Kết quả tại T30 | Evidence |
|---|---|---|
| Bàn giao nền tảng Web + Mobile phân phối online đúng phạm vi B.3 | ☐ Đạt ☐ Đạt một phần ☐ Chưa đạt | Traceability B.3 |
| Go-live toàn chuỗi tuần 26 (M6) | Ngày thực tế: [điền] | BB go-live / Gate G6 |
| Ổn định 30 ngày + nghiệm thu cuối (M7) | Ngày thực tế: [điền] | Gate G7 / BG9 |
| NFR B.4 (hiệu năng, uptime, CDC, bảo mật…) | ☐ Đạt ☐ Conditional ☐ Chưa | Báo cáo đo |
| Thanh toán theo mốc M0–M7 | Trạng thái thu: [điền] | Commercial log |

### 1.2. Tóm tắt một đoạn (≤ 150 từ)
[điền — PM viết: phạm vi giao, lệch tiến độ/chi phí chính, chất lượng, mức sẵn sàng BH, khuyến nghị Go/No-Go đóng]

### 1.3. Quyết định đề xuất
| Quyết định | ☐ **GO đóng dự án** — chuyển bảo hành &nbsp;&nbsp; ☐ **GO có điều kiện** &nbsp;&nbsp; ☐ **NO-GO** — chưa đóng |
| Lý do ngắn | |
| Điều kiện còn mở (nếu có) | Ticket: … Due: … |

---

## 2. Scope delivered vs contracted

### 2.1. Phạm vi B.3 (epic cố định)

| Phân hệ B.3 | Epic / mã chức năng chính | Trạng thái giao | Ghi chú lệch |
|---|---|---|---|
| B.3.1 Tìm kiếm sản phẩm | TK-… | ☐ Full ☐ Partial ☐ Out | |
| B.3.2 Quản lý cửa hàng | CH-… | ☐ Full ☐ Partial ☐ Out | |
| B.3.3 Quản lý đơn hàng | DH-… | ☐ Full ☐ Partial ☐ Out | |

**Tỷ lệ story Must-have Accepted / tổng Must-have:** [điền] %  
**Nguồn:** Jira filter `moSCoW = Must` + map mã B.3.

### 2.2. CR log tóm tắt (C.11)

| Mã CR | Tóm tắt | Quyết định (Duyệt / Đổi ngang / Từ chối) | Ảnh hưởng lịch/phạm vi | Trạng thái giao |
|---|---|---|---|---|---|
| CR-001 | [điền] | | | |
| CR-00x | | | | |

**Số CR duyệt đưa vào scope:** __ &nbsp;&nbsp; **Từ chối:** __ &nbsp;&nbsp; **Chuyển giai đoạn 2/BH:** __

### 2.3. Out-of-scope đã thống nhất không làm trong HĐ này
1. [điền]  
2. [điền]  
3. [điền]  

---

## 3. Schedule & cost performance

> Không bịa số — cập nhật từ lịch thực tế và timesheet / commercial.

### 3.1. Mốc M0–M7

| Mốc | Nội dung kế hoạch | Tuần KH | Ngày KH (từ HĐ) | Ngày thực tế | Lệch (ngày) | Kết quả | Evidence |
|---|---|---|---|---|---|---|---|---|
| M0 | Ký HĐ, kick-off; tạm ứng 20% | 0 | [điền] | [điền] | | ☐ | |
| M1 | SRS duyệt | 3 | | | | ☐ | BG1 |
| M2 | Thiết kế duyệt + Sprint 0 (R0); TT 20% | 6 | | | | ☐ | BG2 / Gate G0-G1 |
| M3 | MVP nội bộ R1 | 12 | | | | ☐ | BG4 / Gate G2-R1 |
| M4 | Code complete; TT 25% | 18 | | | | ☐ | BG5 / Gate G2-CC |
| M5 | UAT đạt + đào tạo; TT 20% | 23 | | | | ☐ | BG7 / Gate G4 |
| M6 | Go-live toàn chuỗi | 26 | | | | ☐ | BG8 / Gate G6 |
| M7 | Nghiệm thu cuối 30 ngày; TT 15%; bắt đầu BH | 30 | | | | ☐ | BG9 / Gate G7 |

**Công thức lệch:** `Lệch (ngày) = Ngày thực tế − Ngày kế hoạch` (âm = sớm).

### 3.2. Release

| Release | Kế hoạch | Thực tế | Ghi chú |
|---|---|---|---|
| R0 Walking skeleton | T6 | [điền] | |
| R1 MVP | T12 | | |
| R2 Beta | T20 | | |
| R3 Pilot | T24–25 | | |
| R4 Go-live | T26 | | |

### 3.3. Man-month & chi phí nhà thầu (nội bộ — có thể ẩn với Ban chỉ đạo nếu HĐ không yêu cầu)

| Vai trò | MM kế hoạch (Project Plan) | MM thực tế | Lệch | Ghi chú |
|---|---|---|---|---|
| PM/SM | 7,0 | [điền] | | |
| Architect | 3,0 | | | |
| BA / Proxy PO | [điền theo C.7] | | | |
| Dev team (gop) | [điền] | | | |
| QA | [điền] | | | |
| DevOps | [điền] | | | |
| UI/UX | [điền] | | | |
| NTP pentest (Lá Chắn Việt) | [điền] | | | |
| **Tổng** | **[điền]** | **[điền]** | | |

**Công thức:** `Lệch MM = MM thực tế − MM kế hoạch`.  
**Giá HĐ / thanh toán lũy kế:** Giá HĐ [điền] · Đã thanh toán [điền] · Còn lại [điền] · Retention/BH [điền].

### 3.4. Chỉ số Agile (tham chiếu C.4.6)

| Chỉ số | Mục tiêu | Thực tế (TB / cuối) | Nguồn |
|---|---|---|---|
| Sprint commitment rate | ≥ 85% | [điền] % | Jira |
| Velocity ổn định | Theo dõi | TB: __ · σ: __ | Charts |
| Release burn-up Must-have @ T18 | 100% B.3 | [điền] % | Burn-up |
| Story reject tại review | Thấp | [điền] | Review BB |
| Defect leakage → UAT/PRD | [ngưỡng điền] | [điền] | QA metrics |

---

## 4. Quality & acceptance evidence

### 4.1. UAT & đào tạo
| Hạng mục | Kết quả | Evidence |
|---|---|---|
| UAT Pass rate (kịch bản Must-have) | [điền] % | BB BG7 |
| Lỗi Nghiêm trọng/Cao mở tại Pass UAT | 0 / [điền] | Jira |
| Đào tạo — % học viên đạt bài KT | [điền] % (mục tiêu ≥ 90%) | Bảng điểm |

### 4.2. Bảo mật & NFR
| Hạng mục | Cam kết B.4 | Kết quả đo | Evidence |
|---|---|---|---|
| Pentest (NTP) | Không Cao/Nghiêm trọng mở | [điền] | Báo cáo pentest |
| P95 thao tác chính | ≤ 1,5s @ 1000 VU | [điền] | k6 |
| API tìm kiếm | < 300 ms | [điền] | k6 |
| Uptime 30 ngày sau GL | ≥ 99,9% | [điền] % | Monitoring |
| CDC P95 | < 3s | [điền] | Metrics |
| Đối soát tồn kho 7 ngày | Sai lệch = 0 | [điền] | Đối soát |
| Unit test coverage | ≥ 70% | [điền] % | CI |

### 4.3. SLA giai đoạn ổn định (T27–T30)
| Loại sự cố | Số ticket | % đạt SLA cam kết | Ghi chú |
|---|---|---|---|
| P0/P1 | | | |
| P2/P3 | | | |

### 4.4. Gate summary
| Gate | Ngày | Quyết định | Điều kiện còn mở tại đóng báo cáo |
|---|---|---|---|
| G0/G1 … G7 | [điền từng dòng hoặc phụ lục] | Pass/Cond/Fail | |

---

## 5. Benefits / outcomes cho QA

### 5.1. Định tính (tại T30)
| Lợi ích kỳ vọng | Mức quan sát (1–5 hoặc Chưa đo) | Ghi chú stakeholder |
|---|---|---|---|
| Tự chủ kênh online | | Form 3 nhóm A |
| Trải nghiệm mua thống nhất Web/App | | |
| Điều phối giao nội bộ rõ ràng hơn | | Nhóm C/D |
| IT QA tiếp quản được vận hành | | Nhóm B |

### 5.2. KPI đề xuất đo sau go-live (không bịa baseline)

| KPI | Định nghĩa | Baseline trước GL | Mục tiêu 30 ngày | Mục tiêu 90 ngày | Owner đo | Nguồn dữ liệu |
|---|---|---|---|---|---|---|---|
| Tỷ lệ đơn online hoàn tất | Đơn success / đơn tạo | [điền] | [điền] | [điền] | PO | Analytics |
| Thời gian đặt hàng TB | Checkout duration | | | | PO | Product analytics |
| Sai lệch tồn kho sau đối soát | Số lệch / ngày | | 0 | 0 | IT Lead | Job đối soát |
| CSAT cửa hàng (pulse) | Form ngắn 1–5 | | | | PO | Form 3-C |
| Uptime | B.4 | — | ≥99,9% | ≥99,9% | DevOps/IT | Monitoring |

---

## 6. Handover package checklist

| # | Hạng mục | Tiêu chí đạt | Link / vị trí | Owner giao | Owner nhận (QA) | Status |
|---|---|---|---|---|---|---|
| 1 | Mã nguồn (repo) + tag release GL | Quyền read/admin theo HĐ; tag `v[x]` | | DevOps | IT Lead | ☐ |
| 2 | Pipeline CI/CD & môi trường DEV/STG/PRD | Tài liệu + quyền | | DevOps | IT Lead | ☐ |
| 3 | Tài khoản & bí mật (vault) | Break-glass + thu hồi tạm | | DevOps | IT Lead | ☐ |
| 4 | HLD / CSDL / ICD / OpenAPI | Bản cuối baseline | | Architect | IT Lead | ☐ |
| 5 | Runbook vận hành + on-call BH | L1/L2/L3 | | DevOps | IT Lead | ☐ |
| 6 | HDSD + video đào tạo | BG7 bản cập nhật sau GL | | BA | PO | ☐ |
| 7 | Bộ test / dữ liệu mẫu ẩn danh | | | QA Lead | IT QA | ☐ |
| 8 | License / thư viện bên 3 / store accounts | Danh mục license | | PM | PO/Legal | ☐ |
| 9 | Code escrow / bàn giao theo HĐ | ☐ Done ☐ N/A có điều khoản | | PM | PO | ☐ |
| 10 | Báo cáo 30 ngày ổn định | BG9 | | PM | PO | ☐ |
| 11 | Danh mục residual bugs + debt | Import board BH | | QA Lead | PO | ☐ |
| 12 | Ma trận quyền PRD sau chuyển BH | | | IT Lead | IT Lead | ☐ |

---

## 7. Open items chuyển bảo hành

| ID | Loại (Bug / Debt / Enhancement) | Mô tả | Severity | Owner BH | SLA/Hạn | Jira |
|---|---|---|---|---|---|---|
| BH-001 | | | | | | |
| BH-00x | | | | | | |

**Quy tắc:** Mọi item Severity Cao+ phải có workaround được PO chấp nhận trước khi Pass G7.

---

## 8. Team & stakeholder evaluation synthesis (ẩn danh)

> Nguồn: Form Peer (Doc 2) + Form Stakeholder (Doc 3). **Không** nêu tên cá nhân nhà thầu.

### 8.1. Đội dự án (People themes)
| Theme điểm mạnh | Theme cần cải thiện | Action đã/chưa triển khai |
|---|---|---|
| | | |

**Tỷ lệ hoàn thành Peer EOP:** [điền] %

### 8.2. Stakeholder
| Nhóm | n | Hài lòng TB | NPS | Top cải thiện |
|---|---|---|---|---|
| Ban chỉ đạo / PO | | | | |
| IT & vận hành | | | | |
| Cửa hàng | | | | |
| Kho / shipper | | | | |
| Kế toán / marketing | | | | |

---

## 9. Lessons learned

> **Tóm tắt chỉ:** bảng Keep / Improve / Try. Chi tiết (Log, significant lessons, assimilation, Retrieve) nằm ở **Doc 5** — *Post-Project Lessons Learned Report* (`05_Post_Project_Lessons_Learned_Report.md`). Copy nguyên bảng dưới từ Doc 5 §5 sau workshop EOP.

| Nhóm | Điều giữ lại (Keep) | Điều cải thiện (Improve) | Thử lần sau (Try) |
|---|---|---|---|
| **People** | | | |
| **Process** (Hybrid, gate, C.11, DoR/DoD) | | | |
| **Technology** (CDC, mobile, NFR, CI) | | | |
| **Vendor–Client collaboration** | | | |

**Workshop LL:** Ngày [điền] · Thành phần: PO, IT Lead, PM, Architect, đại diện Dev/QA · Facilitator: SM.  
**Liên kết Doc 5:** URL/Ver `[điền]` · Ngày đóng Lessons Log `[điền]` · Số action Must embed còn mở: `[điền]`.

---

## 10. Recommendations — giai đoạn 2 / vận hành tiếp

| # | Khuyến nghị | Lý do | Ưu tiên | Owner đề xuất | Thời điểm gợi ý |
|---|---|---|---|---|---|
| 1 | | | Cao/Trung/Thấp | | |
| 2 | | | | | |
| 3 | | | | | |

Gợi ý cấu trúc (PM chỉnh theo thực tế): backlog enhancement từ demo; tối ưu hiệu năng ngày sale; mở rộng cửa hàng; hardening bảo mật định kỳ; KPI 90 ngày.

---

## 11. Formal closure approval

Chúng tôi xác nhận đã rà soát báo cáo, đủ điều kiện **đóng dự án triển khai** và **chuyển giai đoạn bảo hành 12 tháng** theo hợp đồng (trừ các điều kiện ghi ở mục 1.3 nếu có).

| Vai trò | Họ tên | Quyết định | Chữ ký | Ngày |
|---|---|---|---|---|
| PO (QA) | | ☐ Duyệt đóng ☐ Duyệt có ĐK ☐ Từ chối | | |
| Ban chỉ đạo QA (đại diện) | | ☐ Duyệt đóng ☐ Duyệt có ĐK ☐ Từ chối | | |
| IT Lead (QA) — xác nhận handover | | ☐ Đã nhận đủ ☐ Nhận có ĐK | | |
| PM/SM Sao Bắc Tech | | ☐ Trình duyệt | | |
| Đại diện thương mại / kế toán (nếu cần M7) | | ☐ Hồ sơ TT OK | | |

| Trường | Giá trị |
|---|---|
| **Ngày chính thức chuyển bảo hành** | [điền] |
| **Ngày kết thúc bảo hành ( +12 tháng )** | [điền] |
| **Kênh tiếp nhận sự cố BH** | [điền] |
| **Lịch phát hành bảo trì** | Hằng tháng / Kanban — [điền] |

---

## Phụ lục A — Danh mục BG1–BG9 đã bàn giao

| BG | Sản phẩm | Ngày bàn giao | Người nhận QA | Link | Đủ tiêu chí chấp nhận |
|---|---|---|---|---|---|
| BG1 | Khảo sát + SRS + backlog | | | | ☐ |
| BG2 | HLD/ICD/DB/UI/PoC CDC/Release Plan | | | | ☐ |
| BG3 | Increment + BB sprint review (tất cả sprint) | | | | ☐ |
| BG4 | R1 MVP | | | | ☐ |
| BG5 | Code complete + API docs | | | | ☐ |
| BG6 | R2 beta + báo cáo HT/hiệu năng/pentest | | | | ☐ |
| BG7 | UAT + HDSD + video đào tạo | | | | ☐ |
| BG8 | PRD + store + data + cut-over/rollback | | | | ☐ |
| BG9 | Mã nguồn + tài liệu VT + BB bàn giao + báo cáo 30 ngày | | | | ☐ |

## Phụ lục B — Liên kết Confluence / Jira
| Hạng mục | URL |
|---|---|
| Space dự án | [điền] |
| Phase Gates | [điền] |
| Release burn-up | [điền] |
| CR log | [điền] |
| Board bảo hành | [điền] |
| Thư mục commercial | [điền] |

## Phụ lục C — Bảng rủi ro đóng (residual)

| ID | Rủi ro | Impact | Probability | Mitigation / chuyển BH | Owner |
|---|---|---|---|---|---|
| RR-01 | | | | | |
| RR-02 | | | | | |

## Phụ lục D — Lịch sử phiên bản báo cáo
| Ver | Ngày | Người sửa | Thay đổi |
|---|---|---|---|
| 0.9 | | PM | Draft nội bộ |
| 1.0 | | PM | Trình ký G7 |

---

*Báo cáo đóng dự án — PMO Sao Bắc Tech cho dự án QA. Dùng sau trúng thầu / sau G7. Không đưa vào E-HSDT.*
