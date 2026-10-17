# Vai trò
Bạn là PMO Lead + Knowledge Manager + Agile Coach, thiết kế biểu mẫu vận hành thật (không bài lý thuyết).
Nhiệm vụ: xây dựng **Form báo cáo bài học kinh nghiệm sau kết thúc dự án** (*Post-Project Lessons Learned Report / End-of-Project Lessons Report*), kèm **Lessons Log** dùng xuyên suốt và **hướng dẫn workshop**.

# Ngữ cảnh dự án (bắt buộc bám sát)
- Gói thầu: Phát triển hệ thống phân phối trực tuyến (Web + Mobile) — E-TBMT IB2600184512-00
- Chủ đầu tư: Chuỗi cửa hàng thời trang QA | Nhà thầu: Sao Bắc Tech | NTP pentest: Lá Chắn Việt
- HĐ trọn gói; 30 tuần (go-live T26 + ổn định T27–T30); bảo hành 12 tháng
- Phương pháp: Hybrid–Scrum; gate G0/G1→G7; release R0–R4; BG1–BG9; mốc M0–M7; CR theo C.11
- Công cụ: Jira, Confluence, chat dự án; DoR/DoD; MoSCoW
- Liên kết bộ PMO đã có:
  - Doc 1 Phase Exit Checklist → evidence theo gate
  - Doc 2 Peer Evaluation → chỉ dùng **synthesis ẩn danh** (không copy raw)
  - Doc 3 Stakeholder Evaluation → chỉ dùng theme/NPS tổng hợp
  - Doc 4 Closure Report §9 → form này **mở rộng & chuẩn hóa** §9; Closure chỉ giữ bảng tóm tắt Keep/Improve/Try; chi tiết nằm ở form LL này (phụ lục Closure hoặc file riêng)

# Mục tiêu thiết kế (chuẩn thực tế)
1. Bài học được **ghi nhận sớm & thường xuyên**, không chỉ họp cuối dự án.
2. Mỗi bài học có: ngữ cảnh → tác động → nguyên nhân gốc → khuyến nghị → **action + owner + hạn** → trạng thái đóng.
3. Có thể **truy xuất** (keywords, category, link deliverable) để dự án sau lấy lại trước khi lập kế hoạch.
4. Tách: **quan sát** ≠ **ý kiến** ≠ **hành động**; không blame culture.
5. Form đủ dùng workshop 60–90 phút; log đủ dùng cập nhật khi có sự kiện (CR lớn, incident, gate fail/conditional).

# Best practice bắt buộc áp dụng (map vào form)

## A. Chu trình 5 bước (PMI)
Identify → Document → Analyze → Store → Retrieve.
- Mỗi mục form phải phục vụ ít nhất một bước.
- Keywords bắt buộc để Retrieve.
Nguồn: PMI — *Applying lessons learned* / *Lessons learned* process (5 activities).
- https://www.pmi.org/learning/library/applying-lessons-learned-implement-project-8344
- https://www.pmi.org/learning/library/lessons-learned-sharing-knowledge-8189
- Bổ sung: “do it early, do it often” + Lessons Learned Log trong Executing/Controlling
  https://www.pmi.org/learning/library/lessons-learned-early-often-6746

## B. Assimilation (PMI knowledge management)
Lesson chưa “học được” nếu chưa đưa vào checklist/template/procedure/KPI.
Form phải có cột: **Đưa vào Organizational Process Asset nào?** (ví dụ: DoR, DoD, C.11 CR, gate checklist, runbook, estimation sheet…).
Nguồn: https://www.pmi.org/learning/library/knowledge-management-lessons-learned-10161

## C. PRINCE2 Lessons Report
- Báo cáo cuối dự án **bắt buộc**; nên có báo cáo theo stage/gate khi lesson hữu ích sớm.
- Mỗi significant lesson: tình huống, tác động (+/−), nguyên nhân/trigger, early warning, đã từng là risk chưa?, khuyến nghị hành động.
- Nguyên tắc: *lessons are not learned until action is taken*.
Nguồn:
- https://prince2.wiki/management-products/reports/lessons-report/
- Template tham chiếu: https://prince.nicholas.mincher.org/content/prince2templates/lessonsreport.pdf

## D. NASA After Action Review / Pause and Learn
4 câu khung workshop (bắt buộc có trong hướng dẫn họp):
1) Kỳ vọng là gì? 2) Thực tế là gì? 3) Vì sao lệch? 4) Giữ / sửa / thử gì lần sau?
- Họp gần sự kiện (sau gate/release lớn), không chỉ T30.
Nguồn:
- https://www.nasa.gov/wp-content/uploads/2025/09/after-action-review-v3.pdf
- Closeout yêu cầu document lessons: https://www.nasa.gov/reference/3-9-project-phase-f-closeout/
- NPR 7120.6 (lessons infusion vào tiêu chuẩn/đào tạo): https://nodis3.gsfc.nasa.gov/displayCA.cfm?Internal_ID=N_PR_7120_0006_&page_name=Chapter1

## E. UK Government Project Delivery (Teal Book) — Lessons register
Mỗi dòng log tối thiểu: Went well / Needed improving; ai/khi nào; ngữ cảnh; lesson; action + người chịu trách nhiệm + mốc; category; status (Identified→Closed); link chi tiết; chia sẻ learning legacy khi đóng.
Nguồn: https://projectdelivery.gov.uk/teal-book/home/part-f-solution-delivery/chapter-38-learning-from-experience/

## F. Agile — Retrospective (Derby & Larsen) + Keep/Improve/Try
Workshop EOP theo 5 pha: Set the Stage → Gather Data → Generate Insights → Decide What to Do → Close.
Bảng tổng hợp dùng Keep / Improve / Try (tương thích Start–Stop–Continue).
Nguồn:
- https://pragprog.com/titles/dlret2/agile-retrospectives-second-edition/
- Khung 5 bước: https://tryhamster.com/methods/five-step-retrospective-framework

# Ràng buộc chất lượng
- Evidence-based: mỗi lesson ưu tiên có link Jira/Confluence/biên bản/gate/incident; thiếu thì `[điền]` — **không bịa**.
- Không trùng Peer raw hay Stakeholder câu hỏi cảm xúc; LL tập trung **process/delivery/knowledge**.
- Không checklist chung chung (“cải thiện giao tiếp”); mỗi dòng phải actionable.
- Psychological safety: không nêu tên cá nhân để trách phạt; mô tả hành vi/hệ thống.
- Phân loại bắt buộc (để Retrieve): People | Process | Technology | Vendor–Client | Commercial/Contract | Security/Compliance | Ops/Handover
- Mức độ: Success to amplify | Problem to avoid | Opportunity missed
- Ưu tiên (MoSCoW cho action): Must embed / Should share / Could archive
- Tiếng Việt hành chính–học thuật; tiêu đề phụ EN giữ nguyên.

# Đầu ra cần tạo (theo thứ tự)

## 1) One-pager PMO — khi nào dùng LL
Bảng: Sự kiện kích hoạt | Form nào | Ai facilitate | Ai approve | Lưu đâu | Feed vào đâu
Tối thiểu các mốc: sau mỗi Sprint (mini → đưa vào log); sau Gate Conditional/Fail; sau CR lớn (C.11); sau R1/R2/R3/R4; sau Pilot; **sau G7/M7 (full report)**; trước kick-off dự án tương tự (Retrieve).

## 2) Lessons Learned Log (living register) — bảng chuẩn
Cột bắt buộc (Teal Book + PMI template fields):
| ID | Ngày | Nguồn (Sprint/Gate/CR/Incident/Workshop) | Went well / Improve | Category | Keywords | Ngữ cảnh (≤40 từ) | Tác động (scope/time/cost/quality/NFR/reputation) | Root cause / trigger | Early warning? | Đã là risk trong register? | Lesson (1 câu) | Recommendation | Action | Owner | Due | Status | OPA cập nhật (checklist/template…) | Link evidence | Confidential? (Y/N) |

Quy tắc: Status chỉ Closed khi action đã làm **hoặc** đã quyết định Cancelled có lý do.

## 3) Post-Project Lessons Learned Report (form chính, 4–8 trang A4)
Cấu trúc:

### Meta
Dự án, mã HĐ/TBMT, phiên bản, ngày workshop, facilitator, thành phần (PO, IT Lead, PM/SM, Architect, Dev/QA/DevOps đại diện), phạm vi báo cáo (toàn dự án / stage), liên kết Closure Doc 4.

### §1 Executive summary (≤150 từ)
3–5 lesson “must embed” + 1 câu về mức độ sẵn sàng tái sử dụng knowledge.

### §2 Performance signals đã review (measurements — PRINCE2)
Bảng rút gọn (không thay Closure): lệch lịch M0–M7 chính; % Must-have Accepted; UAT/defect leakage; NFR B.4 nổi bật; số CR duyệt/từ chối; SLA ổn định T27–T30. Mỗi dòng: “Lesson gợi ý từ số liệu?”

### §3 What went well / What went badly / Recommendations (PRINCE2 Project Review)
Theo nhóm: Method (Hybrid–Scrum, gate, DoR/DoD) | Strategies (risk, quality, comms, config) | Controls (C.11, thanh toán M-x, BG) | Specialist (CDC, mobile, pentest NTP) | Abnormal events.

### §4 Significant Lessons (chi tiết — tối thiểu 6–12 mục chọn lọc từ Log)
Mỗi mục dùng card chuẩn:
- LL-ID | Title | Category | Keywords
- Situation → Expected vs Actual (AAR)
- Impact (+/−, định lượng nếu có)
- Cause / trigger | Early warning | Prior risk? (Y/N + ID)
- Lesson statement (1–2 câu, generic hóa để tái dùng)
- Recommended actions (this project BH / future projects / PMO org)
- Owner | Due | Status | OPA to update

### §5 Keep / Improve / Try (synthesis workshop)
Bảng 4 hàng: People | Process | Technology | Vendor–Client (khớp Closure §9).

### §6 Actions & Assimilation checklist
| Action | Loại (Process / Template / Training / Tool / Contract) | Owner | Due | Verification | Done? |
Cuối: “Lesson chưa vào checklist/template = chưa học xong” (PMI assimilation).

### §7 Sharing & Retrieve plan
- Nơi lưu: Confluence `QA-OMS / Lessons` + PDF ký; tag keywords
- Ai được đọc (nội bộ nhà thầu / chia sẻ QA ở mức tổng hợp)
- Checklist Retrieve cho dự án sau: 5 câu hỏi bắt buộc trước Planning (ví dụ: estimation, CDC, UAT, gate, CR)

### §8 Approval
PM/SM trình · PMO/Knowledge Owner xác nhận đã nhập repository · PO (tuỳ chọn xác nhận đã nhận bản tổng hợp) · ngày đóng log dự án.

### Phụ lục
A) Full Lessons Log (export)  
B) Agenda workshop 90’ (5 pha Derby/Larsen + câu hỏi NASA AAR)  
C) Mapping nguồn đầu vào (Doc1–3, Jira, retro sprint, incident)  
D) Lịch sử phiên bản

## 4) Hướng dẫn điền + RACI (5–7 dòng + bảng)
RACI tối thiểu: Facilitator (SM) R | PM A soạn báo cáo | Leads C evidence | PO I (bản tổng hợp) | PMO A repository.

## 5) Mapping sang GitHub Pages / Word (nếu được yêu cầu xuất form điền)
- Checkbox/select Status; textarea cho Situation/Lesson; bảng action 5–8 dòng trống
- Placeholder `[điền]`; disclaimer bài tập nếu dùng mock
- Không nhồi vào E-HSDT / Phần D pháp lý

# Định dạng xuất
1. One-pager mapping vòng đời  
2. Lessons Log (bảng mẫu + 3 dòng ví dụ minh họa **hư cấu có cấu trúc**, gắn gate/CR giả lập rõ là ví dụ)  
3. Full Post-Project Lessons Learned Report (form trống hoàn chỉnh)  
4. Agenda workshop 90’  
5. Bảng “Source → Field trên form” trích từ các URL ở trên (để người dùng audit được)

# Ràng buộc cuối
- Không thay thế biên bản nghiệm thu pháp lý; không thay Doc 4 Closure — **bổ sung chuyên sâu LL**.
- Không bịa số liệu HĐ; ví dụ minh họa đánh dấu *Ví dụ minh họa*.
- Giọng vận hành PMO Sao Bắc Tech cho dự án QA.

Hãy bắt đầu bằng One-pager + cấu trúc Log, rồi sinh Full Report form, cuối cùng Agenda workshop và bảng Source→Field.