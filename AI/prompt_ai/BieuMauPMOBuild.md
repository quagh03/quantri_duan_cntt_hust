# Vai trò
Bạn là PMO Lead + Agile Coach + chuyên gia đóng dự án (PMBOK/PRINCE2-lite + Scrum).
Nhiệm vụ: thiết kế bộ 4 biểu mẫu quản trị dự án **sau khi trúng thầu**, phục vụ thực thi và đóng dự án — **KHÔNG** đưa vào E-HSDT như tài liệu đánh giá thầu, trừ khi chỉ tham chiếu trong Project Plan.

# Ngữ cảnh dự án (bắt buộc bám sát)
- Gói thầu: Phát triển hệ thống phân phối trực tuyến (Web + Mobile) — E-TBMT IB2600184512-00
- Chủ đầu tư: Chuỗi cửa hàng thời trang QA
- Nhà thầu: Công ty CP Công nghệ Số Sao Bắc (Sao Bắc Tech)
- Loại HĐ: Trọn gói | Thời gian: 30 tuần (26 tuần đến go-live + 4 tuần ổn định) | Bảo hành 12 tháng
- Phương pháp: Hybrid — GĐ0–1 khảo sát/thiết kế trình tự; GĐ2–3 Scrum (Sprint 0 + Sprint 1–7, 2 tuần/sprint); GĐ4–5 UAT/pilot/go-live có quality gate; GĐ6+bảo hành Kanban
- Release: R0 walking skeleton (T6) → R1 MVP (T12) → R2 beta (T20) → R3 pilot (T24–25) → R4 go-live (T26) → nghiệm thu cuối (T30)
- Deliverables chính: BG1–BG9 (SRS/backlog, HLD/ICD, increment+sprint review, MVP, code complete, beta+pentest, UAT, go-live, bàn giao+báo cáo 30 ngày)
- Vai trò: PO (QA), Proxy PO (BA nhà thầu), SM=PM kiêm nhiệm, Architect, Dev team ~10, tổng ~15 người; NTP Lá Chắn Việt (pentest)
- Công cụ: Jira, Confluence, chat dự án; DoR/DoD; MoSCoW; velocity, burn-up, sprint commitment ≥85%, defect leakage
- Mốc thanh toán gắn M0–M6 và biên bản sprint review / quality gate
- Ràng buộc: phạm vi epic B.3 cố định; chi tiết story linh hoạt; CR theo C.11; SLA bảo hành đã cam kết

# Mục tiêu thiết kế
Tạo 4 tài liệu **sẵn dùng ngay**, thống nhất thuật ngữ với Phần C Project Plan, song ngữ hoặc tiếng Việt chuyên nghiệp, khổ A4, có chỗ ký/duyệt, có hướng dẫn điền ngắn, và mapping rõ:
1) dùng khi nào trong vòng đời dự án
2) ai điền / ai review / ai approve (RACI)
3) đầu vào / đầu ra / lưu trữ (Jira/Confluence/drive)
4) tiêu chí “Pass / Conditional Pass / Fail” hoặc thang điểm rõ
5) liên kết với DoD, quality gate, BG1–BG9, mốc M0–M6

# Best practice bắt buộc áp dụng
- Tách bạch: **kiểm soát giai đoạn** ≠ **đánh giá nhân sự** ≠ **phản hồi stakeholder** ≠ **báo cáo đóng dự án**
- Evidence-based: mỗi mục checklist cần cột “Bằng chứng / Link / Ticket”
- Measurable: dùng tiêu chí đo được (%, số lỗi mở theo severity, burn-up, UAT pass rate, SLA…)
- Lightweight: mỗi form đủ dùng trong họp 30–90 phút; tránh hỏi trùng giữa các form
- Psychologically safe với Peer Evaluation: constructive, hành vi quan sát được, không công kích cá nhân; kết quả nội bộ HR/PM, không gửi khách hàng nguyên văn
- Stakeholder form: ngắn (≤10 phút), Likert + 2–3 câu mở; phân nhóm (PO, IT Lead, cửa hàng, kho/shipper, kế toán/marketing)
- Closure report: lessons learned + benefits realization + handover + open risks/debts + bảo hành transition
- Tuân thủ tinh thần quản trị dự án CNTT: change control, configuration/baseline, security & privacy (NĐ 13/2023 nếu liên quan dữ liệu KH), license/code escrow/bàn giao mã nguồn
- Không bịa số liệu pháp lý; để placeholder [điền] khi thiếu

# Đầu ra cần tạo (4 phần, theo thứ tự)

## 1) Project Control Phase Exit Review Checklist
Thiết kế checklist **theo từng phase/gate** của dự án này:
- Gate G0/G1 (sau khảo sát–thiết kế / Sprint 0)
- Gate G2 (sau cụm Sprint phát triển / trước hoặc tại R1, R2)
- Gate G3 (ổn định hóa / trước UAT)
- Gate G4 (sau UAT)
- Gate G5 (sau pilot)
- Gate G6 (go-live readiness)
- Gate G7 (exit ổn định 30 ngày / nghiệm thu cuối → chuyển bảo hành)

Mỗi gate gồm các nhóm kiểm tra tối thiểu:
A. Scope & backlog (B.3 Must-have, CR, debt)
B. Schedule & milestones (M-x, burn-up, commitment)
C. Quality (DoD, defect mở theo severity, test coverage, non-functional B.4)
D. Integration & data (Main DB/POS/CDC, cut-over/rollback nếu liên quan)
E. Security & compliance (SAST/pentest khi tới gate, quyền truy cập, PII)
F. Ops readiness (monitoring, runbook, training, support)
G. Commercial/contract (biên bản nghiệm thu tăng dần, điều kiện thanh toán)
H. Decision: Pass / Conditional (kèm action items + owner + due date) / Fail (blockers)

Format bảng: # | Hạng mục | Tiêu chí đạt | Bằng chứng | Owner | Status | Ghi chú
Cuối mỗi gate: chữ ký PO, PM/SM, IT Lead; ngày; danh sách action items.

## 2) Project Team Member Peer Evaluation Form
Dùng nội bộ cuối mỗi Sprint (rút gọn) và cuối phase / cuối dự án (đầy đủ).
- Đối tượng: Dev, QA, BA/Proxy PO, DevOps, UI/UX, Architect, PM/SM (tự đánh giá + đồng nghiệp)
- Thang: 1–5 + N/A; trọng số gợi ý
- Tiêu chí hành vi (ví dụ bắt buộc có): Collaboration, Ownership, Quality mindset (DoD), Communication, Agile discipline, Technical contribution, Helping others, Reliability
- Phần: điểm mạnh (bắt buộc ví dụ cụ thể), điểm cần cải thiện (hành động được), đề xuất coaching
- Quy tắc bảo mật kết quả; ai tổng hợp; không dùng để “xếp hạng công khai”
- Có phiên bản **Sprint Pulse (5 câu, 3 phút)** và **End-of-Project Full (1 trang)**

## 3) Stakeholder Post Project Evaluation Form
Dùng sau Pilot (mini) và sau nghiệm thu cuối / T30 (full); tùy chọn pulse sau R1/R2.
Phân version theo nhóm stakeholder:
- Ban chỉ đạo / PO
- IT Lead & vận hành
- Cửa hàng pilot
- Kho / shipper
- Kế toán / marketing (nếu đụng quy trình)

Nội dung tối thiểu:
- Mức đạt mục tiêu nghiệp vụ (tự chủ kênh, trải nghiệm mua, điều phối giao…)
- Chất lượng sản phẩm & ổn định
- Hiệu quả phối hợp với nhà thầu (response, minh bạch tiến độ, quản lý thay đổi)
- Đào tạo & bàn giao
- Sẵn sàng vận hành độc lập
- NPS hoặc thang hài lòng tổng thể
- 3 điều giữ lại / 3 điều cải thiện / rủi ro còn mở từ góc nhìn stakeholder
Kết thúc: chữ ký hoặc xác nhận email; thời gian điền ≤10 phút.

## 4) Project Review and Closure Report
Báo cáo đóng dự án (sau Gate G7 / nghiệm thu cuối), 6–10 trang, cấu trúc:
1. Executive summary (mục tiêu vs kết quả; Go/No-Go đóng dự án)
2. Scope delivered vs contracted (B.3, CR log tóm tắt, out-of-scope)
3. Schedule & cost performance (mốc M0–M6, man-month thực tế vs kế hoạch; không bịa số — dùng bảng trống + công thức điền)
4. Quality & acceptance evidence (UAT, pentest, SLA giai đoạn ổn định, defect leakage)
5. Benefits / outcomes cho QA (định tính + KPI đề xuất đo sau go-live 30/90 ngày)
6. Handover package checklist (mã nguồn, môi trường, tài khoản, tài liệu, training, license)
7. Open items chuyển bảo hành (bugs residual, tech debt, enhancement backlog)
8. Team & stakeholder evaluation synthesis (chỉ tổng hợp ẩn danh từ form 2–3)
9. Lessons learned (People / Process / Technology / Vendor-Client collaboration)
10. Recommendations giai đoạn 2 / vận hành tiếp
11. Formal closure approval (PO, Ban chỉ đạo QA, PM nhà thầu) + ngày chuyển bảo hành
Phụ lục: danh mục BG1–BG9 đã bàn giao; liên kết Confluence/Jira; bảng rủi ro đóng.

# Yêu cầu định dạng khi sinh
- Xuất lần lượt 4 tài liệu, mỗi tài liệu có: mục đích, thời điểm dùng, RACI, hướng dẫn 5–7 dòng, rồi phần form/checklist hoàn chỉnh
- Dùng Markdown rõ ràng, sẵn copy sang Word/Google Docs
- Thuật ngữ Việt ưu tiên; giữ nguyên tên tiếng Anh của 4 tài liệu làm tiêu đề phụ
- Đồng bộ tên phase/gate/release với ngữ cảnh trên; không invent thêm methodology mâu thuẫn Hybrid–Scrum
- Cuối cùng: bảng 1 trang “Bộ tài liệu — khi nào dùng — ai sở hữu — lưu ở đâu” để PMO dán vào Confluence

# Ràng buộc chất lượng
- Không nhồi 4 form vào E-HSDT
- Không trùng câu hỏi giữa Peer Evaluation và Stakeholder Evaluation
- Không checklist chung chung kiểu “đảm bảo chất lượng”; mọi dòng phải kiểm chứng được
- Ưu tiên actionable: mỗi “Conditional Pass” phải có action item mẫu
- Viết như tài liệu vận hành thật của PMO Sao Bắc Tech cho dự án QA, không như bài lý thuyết

Hãy bắt đầu bằng Document 1 (Phase Exit Review Checklist) đầy đủ các gate, sau đó lần lượt Document 2–4, cuối cùng là bảng tổng hợp PMO.