# Bộ tài liệu quản trị sau trúng thầu — khi nào dùng · ai sở hữu · lưu ở đâu  
## PMO One-pager (dán Confluence)

**Dự án:** Hệ thống phân phối trực tuyến QA — IB2600184512-00  
**Nhà thầu:** Sao Bắc Tech · **PO:** QA · **PMO owner tổng:** PM/SM  
**Lưu ý:** Bộ này phục vụ **thực thi & đóng dự án** — không đưa vào E-HSDT như tài liệu đánh giá thầu.

| # | Tài liệu | File | Khi nào dùng | Owner (A) | Điền / Facilitator (R) | Review | Approve | Lưu trữ chính | Đầu vào | Đầu ra |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Kiểm soát thoát giai đoạn · *Project Control Phase Exit Review Checklist* | `01_Project_Control_Phase_Exit_Review_Checklist.md` | Gate **G0/G1→G7** (T6, T12/T18, T20, T23, T25, T26, T30); trước quality gate / thanh toán liên quan M2–M7 | PM/SM | PM + Lead kỹ thuật/QA/DevOps chuẩn bị evidence | IT Lead, Architect | **PO** (G6/G7 thêm Ban chỉ đạo) | Confluence `Governance / Phase Gates` + PDF ký | Jira, burn-up, BG, báo cáo test/pentest, CR log | Biên bản Pass / Conditional / Fail + action items epic `GATE` |
| 2 | Đánh giá đồng nghiệp · *Project Team Member Peer Evaluation Form* | `02_Project_Team_Member_Peer_Evaluation_Form.md` | **Sprint Pulse** cuối mỗi sprint; **Full** cuối phase / **EOP** sau G7 | PM/SM (+ HR lưu hồ sơ) | Thành viên đội (peer + self) | Lead nhóm (coaching) | HR/PM (quy trình nội bộ) — **không gửi QA raw** | Drive nội bộ hạn chế `HR-PMO / Peer-Eval` | Quan sát sprint/phase | Pulse themes → Retro; EOP synthesis → Closure §8 |
| 3 | Đánh giá stakeholder · *Stakeholder Post Project Evaluation Form* | `03_Stakeholder_Post_Project_Evaluation_Form.md` | Pulse R1/R2 (tuỳ chọn); **Mini** sau Pilot T25; **Full** T30 | PO (QA) | Stakeholder theo nhóm A–E; PM gửi link & nhắc | PM tổng hợp | Ban chỉ đạo nhận báo cáo tóm tắt | Confluence `Feedback / Stakeholder` | Trải nghiệm pilot/GL, đào tạo, hỗ trợ | Bảng NPS/hài lòng + cải thiện → Closure §5/§8 + backlog BH |
| 4 | Báo cáo đóng dự án · *Project Review and Closure Report* | `04_Project_Review_and_Closure_Report.md` | Sau **Gate G7** / nghiệm thu M7 (tuần 30) | PM/SM | PM soạn; Architect/QA Lead/IT Lead bổ sung số liệu | PO, IT Lead | **PO + Ban chỉ đạo QA** | Confluence `Closure` + PDF ký số | Gate G7, BG1–9, Form 2–3 (ẩn danh), commercial, monitoring | Quyết định đóng + ngày BH + handover + LL tóm tắt §9 |
| 5 | Bài học kinh nghiệm · *Post-Project Lessons Learned Report* + **Lessons Log** | `05_Post_Project_Lessons_Learned_Report.md` | Log sống: sau Sprint / Gate Conditional\|Fail / CR lớn / R1–R4 / Pilot; **Full Report sau G7/M7**; Retrieve trước kick-off dự án sau | PMO / Knowledge Owner (repository) | SM facilitate · PM soạn Report · Leads C evidence | PM (dòng Log); PMO (nhập repo) | PMO **A** repository; PO **I** bản tổng hợp | Confluence `QA-OMS / Lessons` + PDF ký; Jira label `lessons-learned` | Doc 1 evidence; Doc 2–3 chỉ synthesis/theme; Jira/CR/incident; metrics Closure | Log Closed + Full Report + OPA cập nhật; Closure §9 chỉ Keep/Improve/Try |

### Mapping vòng đời (nhìn nhanh)

```
T0 M0 ── T3 M1 ── T6 M2/R0 ── T12 M3/R1 ── T18 M4 ── T20 R2 ── T23 M5 ── T24-25 R3 ── T26 M6/R4 ── T30 M7
              │         │           │          │         │         │           │            │
           BG1      G0/G1        G2-R1      G2-CC       G3        G4          G5           G6
           Form2↑    Form2↑       Form2↑     Form2↑    Form2↑   Form3 Mini              Form3 Full
           Pulse     Pulse        Pulse   Phase Full            + Form2                + Form2 EOP
           Log←── Log+AAR* ── P&L* ── P&L* ────────── P&L+KIT* ── P&L* ── Form4 Closure + Form5 FULL LL
           (mỗi Sprint)   (*sau Conditional/Fail hoặc release lớn)                      G7 + đóng Log
```

### Liên kết DoD · Gate · BG · Thanh toán

| Gate | BG chính | Mốc $ | Form bắt buộc kèm |
|---|---|---|---|
| G0/G1 | BG1–2 | M2 | Doc 1 (+ Log nếu Conditional/Fail) |
| G2 | BG3–5 | M3/M4 | Doc 1 (+ Doc 2 Pulse) + Log/P&L sau R1 |
| G3 | BG6 | trước M5 | Doc 1 + Log sau R2 |
| G4 | BG7 | M5 | Doc 1 |
| G5 | chuẩn bị BG8 | trước M6 | Doc 1 + Doc 3 Mini + Log Pilot |
| G6 | BG8 | M6 | Doc 1 + Log sau R4 |
| G7 | BG9 | M7 | Doc 1 + Doc 3 Full + Doc 2 EOP + **Doc 4** + **Doc 5 Full LL** |

### One-pager phụ — khi nào dùng LL (rút gọn)

| Sự kiện | Form | Facilitate | Approve | Lưu | Feed |
|---|---|---|---|---|---|
| Sau Sprint | Mini → Log | SM | PM | `Lessons` Log | Retro actions |
| Gate Conditional/Fail | Log ± AAR 30' | SM | PM (PO nếu Fail) | Log + Gate BB | Doc 1 action / OPA checklist |
| CR lớn C.11 | ≥1 dòng Log | PM/SM | PM | Log + CR | Template C.11 |
| R1–R4 / Pilot | Log + Pause&Learn | SM | PM | Log + BB release | DoD / runbook |
| **G7/M7** | **Full Report Doc 5** | SM + PM soạn | PMO repository | PDF + Confluence | Closure §9 tóm tắt |
| Trước KO dự án sau | Retrieve checklist §7 | PM mới | PMO | Đọc Log/Report đã đóng | Planning |

Chi tiết đầy đủ: xem Doc 5 · Phần A.

### Quy tắc PMO
1. **Tách bạch:** Doc 1 = kiểm soát giai đoạn · Doc 2 = nhân sự nội bộ · Doc 3 = phản hồi stakeholder · Doc 4 = đóng dự án · **Doc 5 = lessons (process/delivery/knowledge)**.  
2. **Evidence-based:** không Pass gate nếu thiếu cột Bằng chứng.  
3. **Conditional Pass** luôn có action item (owner + due) trên Jira.  
4. Peer raw **không** đưa vào E-HSDT / không gửi khách hàng; Doc 5 chỉ nhận synthesis ẩn danh / theme.  
5. **Lesson chưa vào OPA (checklist/template) = chưa học xong**; Closure §9 chỉ bảng Keep/Improve/Try — chi tiết ở Doc 5.

---

*Sao Bắc Tech PMO · Bộ biểu mẫu sau trúng thầu · v1.0*
