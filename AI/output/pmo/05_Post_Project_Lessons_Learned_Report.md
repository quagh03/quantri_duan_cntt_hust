# Báo cáo bài học kinh nghiệm sau kết thúc dự án  
## Post-Project Lessons Learned Report / End-of-Project Lessons Report  
### Kèm Lessons Log (living register) · Hướng dẫn workshop · Mapping nguồn

| Mục | Nội dung |
|---|---|
| **Dự án** | Phát triển hệ thống phân phối trực tuyến (Web + Mobile) |
| **Mã TBMT / HĐ** | E-TBMT IB2600184512-00 / HĐ số: `[điền]` |
| **Chủ đầu tư** | Chuỗi cửa hàng thời trang QA |
| **Nhà thầu** | Công ty CP Công nghệ Số Sao Bắc (Sao Bắc Tech) |
| **NTP pentest** | Lá Chắn Việt |
| **Loại HĐ** | Trọn gói \| **Thời gian** | 30 tuần (go-live T26 + ổn định T27–T30) + BH 12 tháng |
| **Phương pháp** | Hybrid–Scrum · Gate G0/G1→G7 · Release R0–R4 · BG1–BG9 · Mốc M0–M7 · CR theo C.11 |
| **Công cụ** | Jira, Confluence, chat dự án · DoR/DoD · MoSCoW |
| **Liên kết bộ PMO** | Doc 1 Phase Exit · Doc 2 Peer (chỉ synthesis ẩn danh) · Doc 3 Stakeholder (theme/NPS) · **Doc 4 Closure §9** (bảng tóm tắt Keep/Improve/Try) |
| **Vai trò tài liệu này** | **Mở rộng & chuẩn hóa** Closure §9 — chi tiết LL nằm đây (phụ lục Closure hoặc file riêng). **Không** thay biên bản nghiệm thu pháp lý; **không** thay Doc 4. |
| **Phiên bản** | 1.0 \| **Ngày** | `[điền]` |
| **Lưu trữ** | Confluence `QA-OMS / Lessons` + PDF ký số; tag keywords; Jira epic `LL` / label `lessons-learned` |

> **Nguyên tắc vận hành:** *Lessons are not learned until action is taken* (PRINCE2) · *Lesson chưa vào checklist/template = chưa học xong* (PMI assimilation) · *Do it early, do it often* (PMI) · Không blame culture (mô tả hành vi/hệ thống, không nêu tên để trách phạt).

---

# PHẦN A — One-pager PMO: khi nào dùng Lessons Learned

## A.1. Mapping vòng đời → Form LL

| Sự kiện kích hoạt | Form nào | Ai facilitate (R) | Ai approve (A) | Lưu đâu | Feed vào đâu |
|---|---|---|---|---|---|
| **Sau mỗi Sprint** (Sprint Review/Retro) | Mini: 1–3 dòng → **Lessons Log** | SM | PM (duyệt dòng) | Confluence page Log (living) + Jira label `LL-candidate` | Retro action board; Log sống |
| **Gate Conditional / Fail** (Doc 1) | Log + (tuỳ chọn) **AAR ngắn 30'** | SM + Owner gate | PM; PO nếu Fail block | Log + đính kèm biên bản Gate | Action Conditional Pass; cập nhật gate checklist (OPA) |
| **CR lớn duyệt/từ chối** (C.11) | 1 dòng Log (bắt buộc nếu impact ≥ scope/time/cost đáng kể) | PM/SM | PM | Log + link CR ticket | C.11 template / estimation sheet |
| **Sau R1 / R2 / R3 / R4** | Log + **Pause & Learn 45–60'** (gần sự kiện) | SM | PM; Architect C | Log + biên bản release | Release checklist; DoD; NFR runbook |
| **Sau Pilot** (R3 / trước G6) | Log + mini synthesis Keep/Improve/Try | SM | PM; IT Lead C | Log + Confluence Pilot LL | Doc 3 Mini themes (không copy raw); G6 readiness |
| **Sau G7 / M7** | **Full Post-Project Lessons Learned Report** (form chính) | SM (workshop) · PM (soạn báo cáo) | PMO/Knowledge Owner (repository) · PO I (bản tổng hợp) | `QA-OMS / Lessons` + PDF ký; gắn Doc 4 | Closure §9 (tóm tắt); OPA org; Retrieve plan |
| **Trước kick-off dự án tương tự** | **Retrieve** — checklist 5 câu (§7 Report) | PM dự án mới | PMO xác nhận đã Retrieve | Đọc Log + Report đã đóng | Planning / estimation / DoR / gate plan |

### A.2. Sơ đồ nhanh trên timeline dự án

```
Sprint 1..n     G0/G1   R1    R2    Pilot/R3   R4/G6    G7/M7          BH
   │              │      │     │       │         │         │             │
 Log←Retro     Log+AAR  P&L   P&L    P&L+KIT    P&L    FULL REPORT    Retrieve*
                                                      → Closure §9         (dự án sau)
```

\*Retrieve bắt buộc trước Planning dự án cùng domain (OMS / CDC / multi-channel).

### A.3. Quy tắc tách nguồn đầu vào

| Nguồn | Được dùng vào LL? | Cách dùng |
|---|---|---|
| Doc 1 Phase Exit | Có | Evidence gate Pass/Conditional/Fail → Situation / Impact |
| Doc 2 Peer Evaluation | Chỉ **synthesis ẩn danh** | Theme process (vd. “handoff Dev↔QA chậm”) — **không** copy raw điểm/cá nhân |
| Doc 3 Stakeholder | Chỉ **theme / NPS tổng hợp** | “Đào tạo cửa hàng chưa đủ” → Process/Ops — không câu hỏi cảm xúc |
| Jira / Incident / CR / Retro | Có | Link evidence bắt buộc ưu tiên |
| Ý kiến cá nhân không có evidence | Chỉ ghi **Observation** tách khỏi Lesson/Action | Không đưa thẳng vào “must embed” |

---

# PHẦN B — Lessons Learned Log (living register)

## B.1. Mục đích & quy tắc Status

- Living register suốt Executing/Controlling — không chờ T30.
- **Identify → Document → Analyze → Store → Retrieve** (PMI 5 bước): mỗi cột phục vụ ≥1 bước; **Keywords bắt buộc** để Retrieve.
- **Status** chỉ **Closed** khi: (a) Action đã làm xong **hoặc** (b) **Cancelled** có lý do ghi rõ + người phê duyệt.
- Phân loại Category (bắt buộc): `People` \| `Process` \| `Technology` \| `Vendor–Client` \| `Commercial/Contract` \| `Security/Compliance` \| `Ops/Handover`
- Went well / Improve: chọn một; mức độ Lesson: `Success to amplify` \| `Problem to avoid` \| `Opportunity missed` (ghi trong cột Lesson hoặc Notes nếu cần).
- Ưu tiên action (MoSCoW): `Must embed` \| `Should share` \| `Could archive`
- Confidential? = Y → chỉ nội bộ nhà thầu; không đưa raw vào bản chia sẻ QA.

## B.2. Bảng chuẩn cột (Teal Book + PMI)

| ID | Ngày | Nguồn (Sprint/Gate/CR/Incident/Workshop) | Went well / Improve | Category | Keywords | Ngữ cảnh (≤40 từ) | Tác động (scope/time/cost/quality/NFR/reputation) | Root cause / trigger | Early warning? | Đã là risk trong register? | Lesson (1 câu) | Recommendation | Action | Owner | Due | Status | OPA cập nhật (checklist/template…) | Link evidence | Confidential? (Y/N) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| LL-… | | | Went well / Improve | | | | | | Y/N + mô tả ngắn | Y/N + Risk-ID | | | | | | Identified → In Progress → Closed / Cancelled | | | Y/N |

**Trạng thái cho phép:** `Identified` → `Analyzed` → `Action agreed` → `In Progress` → `Closed` \| `Cancelled (lý do)`.

## B.3. Ba dòng ví dụ minh họa (*hư cấu có cấu trúc — không phải số liệu HĐ thật*)

> *Ví dụ minh họa* — dùng để hiểu cách điền; thay bằng dữ liệu thật khi vận hành. Gate/CR giả lập.

| ID | Ngày | Nguồn | Went well / Improve | Category | Keywords | Ngữ cảnh (≤40 từ) | Tác động | Root cause / trigger | Early warning? | Đã là risk? | Lesson (1 câu) | Recommendation | Action | Owner | Due | Status | OPA cập nhật | Link evidence | Conf. |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| *LL-EX-01* | *2026-W12* | *Gate G2 Conditional (R1)* | *Improve* | *Process* | *DoR, CDC, gate-G2, estimation* | *Gate G2 Conditional vì story CDC chưa đủ DoR khi commit Sprint R1.* | *Time: +1 sprint buffer ước tính; Quality: defect integration tăng ở môi trường STG.* | *DoR thiếu tiêu chí “schema CDC đã review Architect”; trigger = pressure mốc M3.* | *Y — burn-up CDC phẳng 2 sprint trước gate* | *Y — RISK-CDC-02* | *Không Pass gate tích hợp nếu DoR thiếu tiêu chí nguồn dữ liệu bên ngoài.* | *Bổ sung DoR CDC; chặn commit nếu thiếu.* | *Must embed: cập nhật DoR + checklist G2 mục Integration* | *Proxy PO + Architect* | *Trước Sprint kế* | *Closed* | *DoR; Doc 1 Gate G2* | *`[điền Jira GATE-xx]`* | *N* |
| *LL-EX-02* | *2026-W20* | *CR-C11-014 (lớn)* | *Improve* | *Commercial/Contract* | *C.11, MoSCoW, scope-creep, payment-Mx* | *CR mở rộng báo cáo marketing sau R2; impact lịch M5 chưa gắn điều kiện thanh toán.* | *Scope +; Time rủi ro M5; Cost: chờ CR duyệt mới ước lượng.* | *CR form thiếu trường “ảnh hưởng mốc thanh toán M-x”.* | *Y — PO yêu cầu “nhanh trong sprint” ngoài C.11* | *N* | *Mọi CR lớn phải map impact M-x trước khi PO duyệt.* | *Sửa template C.11 + SLA phản hồi CR.* | *Must embed: thêm cột Impact M-x vào C.11; Should share nội bộ PMO* | *PM* | *+10 ngày làm việc* | *In Progress* | *C.11 CR template; estimation sheet* | *`[điền CR ticket]`* | *N* |
| *LL-EX-03* | *2026-W26* | *Release R4 + Incident INC-GL-03* | *Went well* *(một phần Process cải thiện song song)* | *Security/Compliance* · *Ops/Handover* | *pentest, NTP, go-live, runbook, rollback* | *Pentest NTP Lá Chắn Việt đóng finding Critical trước G6; rollback drill chạy đủ 1 lần.* | *Reputation +; NFR bảo mật đạt tiêu chí G6; Time drill 0.5 ngày.* | *Success: gắn finding Critical = blocker G6 trong Doc 1.* | *Y — open Critical >0 trên dashboard* | *Y — RISK-SEC-01* | *Finding Critical mở = Fail/block G6; rollback drill là DoD go-live.* | *Giữ rule blocker; đưa drill vào runbook chuẩn.* | *Must embed: Doc 1 G6 Security + runbook go-live* | *DevOps Lead + QA Lead* | *Trước đóng Log G7* | *Action agreed* | *Gate G6 checklist; go-live runbook* | *`[điền pentest report + INC]`* | *Y* *(chi tiết finding nội bộ)* |

---

# PHẦN C — Post-Project Lessons Learned Report (form chính)

> Form trống hoàn chỉnh · mục tiêu 4–8 trang A4 khi xuất Word · điền evidence-based · thiếu = `[điền]` · **không bịa**.

## Meta

| Trường | Giá trị |
|---|---|
| Dự án | Phát triển hệ thống phân phối trực tuyến (Web + Mobile) |
| Mã TBMT / HĐ | E-TBMT IB2600184512-00 / `[điền số HĐ]` |
| Phiên bản báo cáo | `[điền]` (vd. 1.0) |
| Phạm vi báo cáo | ☐ Toàn dự án (G7/M7) ☐ Stage/Gate: `[điền]` ☐ Release: `[điền]` |
| Ngày workshop EOP | `[điền]` |
| Facilitator (SM) | `[điền]` |
| Thành phần | ☐ PO · ☐ IT Lead · ☐ PM/SM · ☐ Architect · ☐ Dev · ☐ QA · ☐ DevOps · Khác: `[điền]` |
| Liên kết Closure Doc 4 | URL/Ver: `[điền]` — Closure §9 chỉ giữ bảng tóm tắt Keep/Improve/Try |
| Liên kết Lessons Log (export) | `[điền]` |
| Disclaimer (nếu mock bài tập) | ☐ Bản mẫu hư cấu phục vụ bài tập — không giá trị pháp lý |

---

## §1. Executive summary (≤150 từ)

**3–5 lesson “Must embed”** (rút từ Log, đã có Action + OPA):

1. `[điền — 1 câu + LL-ID]`
2. `[điền]`
3. `[điền]`
4. `[điền — tuỳ chọn]`
5. `[điền — tuỳ chọn]`

**Mức độ sẵn sàng tái sử dụng knowledge (1 câu):**  
`[điền — ví dụ: Log đã Closed ≥ X% action Must embed; OPA đã cập nhật DoR/DoD/C.11/gate…; còn gap …]`

| Chỉ số Log tại ngày đóng | Giá trị |
|---|---|
| Tổng dòng Log | `[điền]` |
| Closed / Cancelled / Open | `[điền]` / `[điền]` / `[điền]` |
| Must embed còn mở | `[điền]` |

---

## §2. Performance signals đã review (measurements — PRINCE2)

> Bảng rút gọn — **không thay** Doc 4 Closure. Mỗi dòng hỏi: *Lesson gợi ý từ số liệu?*

| Tín hiệu | Kết quả / số liệu | Nguồn evidence | Lesson gợi ý từ số liệu? (LL-ID hoặc “không”) |
|---|---|---|---|
| Lệch lịch mốc M0–M7 chính | `[điền ngày KH vs TT / ngày lệch]` | Plan + BB mốc | `[điền]` |
| % Must-have Accepted | `[điền]` % | Jira MoSCoW=Must | `[điền]` |
| UAT / defect leakage | UAT pass `[điền]` % · Leakage `[điền]` | Test report / Jira | `[điền]` |
| NFR B.4 nổi bật (1–3 mục) | `[điền]` | Báo cáo HT / monitoring | `[điền]` |
| CR C.11 duyệt / từ chối | Duyệt `[điền]` · Từ chối `[điền]` | CR log | `[điền]` |
| SLA ổn định T27–T30 | `[điền]` | Monitoring / BG9 | `[điền]` |
| Gate Conditional / Fail (số lần) | `[điền]` | Doc 1 | `[điền]` |

---

## §3. What went well / What went badly / Recommendations  
### (PRINCE2 Project Review — theo nhóm)

Hướng dẫn: mỗi ô 1–3 bullet **actionable**; tách quan sát ≠ ý kiến; gắn LL-ID khi có.

### 3.1. Method — Hybrid–Scrum, gate, DoR/DoD

| | Nội dung |
|---|---|
| **Went well** | `[điền]` |
| **Went badly** | `[điền]` |
| **Recommendations** | `[điền]` |

### 3.2. Strategies — risk, quality, communications, configuration

| | Nội dung |
|---|---|
| **Went well** | `[điền]` |
| **Went badly** | `[điền]` |
| **Recommendations** | `[điền]` |

### 3.3. Controls — C.11, thanh toán M-x, BG1–BG9

| | Nội dung |
|---|---|
| **Went well** | `[điền]` |
| **Went Badly** | `[điền]` |
| **Recommendations** | `[điền]` |

### 3.4. Specialist products — CDC, mobile, pentest NTP (Lá Chắn Việt)

| | Nội dung |
|---|---|
| **Went well** | `[điền]` |
| **Went badly** | `[điền]` |
| **Recommendations** | `[điền]` |

### 3.5. Abnormal events — incident, CR lớn, gate fail, người/key-person

| | Nội dung |
|---|---|
| **Went well** (ứng phó) | `[điền]` |
| **Went badly** | `[điền]` |
| **Recommendations** | `[điền]` |

---

## §4. Significant Lessons (chi tiết)

> Chọn lọc **6–12** mục từ Log (ưu tiên Must embed + Problem to avoid). Dùng **card chuẩn** dưới đây — sao chép đủ số card cần thiết.

### Card mẫu (lặp lại cho LL-01 … LL-12)

---

#### LL-ID: `[điền]` · Title: `[điền]`  
**Category:** ☐ People ☐ Process ☐ Technology ☐ Vendor–Client ☐ Commercial/Contract ☐ Security/Compliance ☐ Ops/Handover  
**Keywords:** `[điền, phân tách bằng dấu phẩy]`  
**Mức độ:** ☐ Success to amplify ☐ Problem to avoid ☐ Opportunity missed  
**Ưu tiên action:** ☐ Must embed ☐ Should share ☐ Could archive

| Trường | Nội dung |
|---|---|
| **Situation** | `[điền — ngữ cảnh ngắn, evidence-based]` |
| **Expected** *(AAR)* | `[điền — Kỳ vọng là gì?]` |
| **Actual** *(AAR)* | `[điền — Thực tế là gì?]` |
| **Impact (+/−)** | Scope / Time / Cost / Quality / NFR / Reputation: `[điền — định lượng nếu có]` |
| **Cause / trigger** | `[điền — Vì sao lệch?]` |
| **Early warning?** | ☐ Y ☐ N — Mô tả: `[điền]` |
| **Prior risk?** | ☐ Y ☐ N — Risk-ID: `[điền]` |
| **Lesson statement** (1–2 câu, generic hóa để tái dùng) | `[điền]` |
| **Recommended actions** | **This project (BH):** `[điền]` · **Future projects:** `[điền]` · **PMO org:** `[điền]` |
| **Owner** | `[điền]` |
| **Due** | `[điền]` |
| **Status** | ☐ Identified ☐ Analyzed ☐ Action agreed ☐ In Progress ☐ Closed ☐ Cancelled (lý do: …) |
| **OPA to update** | ☐ DoR ☐ DoD ☐ C.11 ☐ Gate checklist Doc1 ☐ Runbook ☐ Estimation sheet ☐ Training ☐ Khác: `[điền]` |
| **Link evidence** | `[điền Jira/Confluence/biên bản/gate/incident]` |
| **Confidential?** | ☐ Y ☐ N |

---

#### LL-01 … *(điền theo card mẫu)*

*(Sao chép block card cho LL-02 → tối thiểu LL-06; khuyến nghị đến LL-12.)*

| Slot | LL-ID | Title ngắn | Category | Must embed? |
|---|---|---|---|---|
| 1 | | | | ☐ |
| 2 | | | | ☐ |
| 3 | | | | ☐ |
| 4 | | | | ☐ |
| 5 | | | | ☐ |
| 6 | | | | ☐ |
| 7 | | | | ☐ |
| 8 | | | | ☐ |
| 9 | | | | ☐ |
| 10 | | | | ☐ |
| 11 | | | | ☐ |
| 12 | | | | ☐ |

---

## §5. Keep / Improve / Try (synthesis workshop)

> Khớp **Closure Doc 4 §9** — Closure chỉ copy bảng này (tóm tắt); chi tiết ở §4 + Log.

| Nhóm | Điều giữ lại (**Keep**) | Điều cải thiện (**Improve**) | Thử lần sau (**Try**) |
|---|---|---|---|
| **People** | `[điền]` | `[điền]` | `[điền]` |
| **Process** (Hybrid, gate, C.11, DoR/DoD) | `[điền]` | `[điền]` | `[điền]` |
| **Technology** (CDC, mobile, NFR, CI) | `[điền]` | `[điền]` | `[điền]` |
| **Vendor–Client** | `[điền]` | `[điền]` | `[điền]` |

**Workshop:** Ngày `[điền]` · Facilitator `[điền]` · Thành phần `[điền]` · Biên bản `[điền link]`

---

## §6. Actions & Assimilation checklist

> *Lesson chưa đưa vào checklist / template / procedure / KPI = chưa học xong* (PMI assimilation).

| # | Action | Loại | Owner | Due | Verification (làm sao biết xong?) | Done? |
|---|---|---|---|---|---|---|
| 1 | `[điền]` | ☐ Process ☐ Template ☐ Training ☐ Tool ☐ Contract | `[điền]` | `[điền]` | `[điền]` | ☐ |
| 2 | | ☐ Process ☐ Template ☐ Training ☐ Tool ☐ Contract | | | | ☐ |
| 3 | | ☐ Process ☐ Template ☐ Training ☐ Tool ☐ Contract | | | | ☐ |
| 4 | | ☐ Process ☐ Template ☐ Training ☐ Tool ☐ Contract | | | | ☐ |
| 5 | | ☐ Process ☐ Template ☐ Training ☐ Tool ☐ Contract | | | | ☐ |
| 6 | | ☐ Process ☐ Template ☐ Training ☐ Tool ☐ Contract | | | | ☐ |
| 7 | | ☐ Process ☐ Template ☐ Training ☐ Tool ☐ Contract | | | | ☐ |
| 8 | | ☐ Process ☐ Template ☐ Training ☐ Tool ☐ Contract | | | | ☐ |

**Xác nhận assimilation:** ☐ Mọi action **Must embed** đã có OPA cập nhật hoặc ticket theo dõi đến Closed.

---

## §7. Sharing & Retrieve plan

### 7.1. Nơi lưu & quyền đọc

| Hạng mục | Quyết định |
|---|---|
| Confluence | `QA-OMS / Lessons` — page Log + page Report + tag keywords |
| PDF ký | `[điền đường dẫn]` |
| Nội bộ nhà thầu (full, kể cả Confidential=Y) | Vai trò: PM, PMO, Architect, Lead liên quan |
| Chia sẻ QA | ☐ Chỉ bản **tổng hợp** (§1 + §5 + action không Confidential) ☐ Không chia sẻ raw Log |
| Learning legacy khi đóng | ☐ Đã đăng announcement nội bộ PMO ☐ Đã gắn link vào Doc 4 |

### 7.2. Checklist Retrieve — 5 câu hỏi bắt buộc trước Planning dự án sau

Trả lời dựa trên Log/Report đã đóng; thiếu evidence = phải tìm thêm trước khi estimate.

| # | Câu hỏi Retrieve | Trả lời (có/không + LL-ID) | Ảnh hưởng kế hoạch |
|---|---|---|---|
| 1 | Estimation / DoR với tích hợp ngoài (CDC/POS) đã từng fail gate chưa? | `[điền]` | `[điền]` |
| 2 | UAT / defect leakage — pattern nào phải đưa vào DoD test? | `[điền]` | `[điền]` |
| 3 | Gate Conditional — checklist nào thiếu và đã cập nhật OPA chưa? | `[điền]` | `[điền]` |
| 4 | CR C.11 — impact M-x / MoSCoW đã được chuẩn hóa chưa? | `[điền]` | `[điền]` |
| 5 | Security/pentest NTP & go-live rollback — blocker rule còn hiệu lực? | `[điền]` | `[điền]` |

**PM dự án mới ký xác nhận đã Retrieve:** Họ tên `[điền]` · Ngày `[điền]` · ☐ Đã đọc Report + filter Keywords liên quan.

---

## §8. Approval

| Vai trò | Họ tên | Trách nhiệm | Quyết định | Chữ ký | Ngày |
|---|---|---|---|---|---|
| **PM/SM** | `[điền]` | Trình báo cáo + đóng Log dự án | ☐ Trình duyệt | | |
| **PMO / Knowledge Owner** | `[điền]` | Xác nhận đã nhập repository + tag keywords | ☐ Đã nhập ☐ Yêu cầu sửa | | |
| **PO (QA)** — tuỳ chọn | `[điền]` | Xác nhận đã nhận **bản tổng hợp** (§1+§5) | ☐ Đã nhận ☐ Không áp dụng | | |
| **IT Lead** — tuỳ chọn | `[điền]` | Xác nhận action Ops/Handover liên quan | ☐ Đồng ý ☐ Có ý kiến | | |

| Trường | Giá trị |
|---|---|
| **Ngày đóng Lessons Log dự án** | `[điền]` (sau đó chỉ thêm dòng BH nếu PMO cho phép, ID mới) |
| **Open Must embed chuyển BH / PMO backlog** | Ticket: `[điền]` |

---

## Phụ lục A — Full Lessons Log (export)

Dán export từ Confluence/Jira hoặc đính kèm file CSV/MD. Cột đúng Phần B.

| Ghi chú | |
|---|---|
| Ngày export | `[điền]` |
| Số dòng | `[điền]` |
| File đính kèm | `[điền]` |

*(Hoặc giữ link sống — không paste bảng quá dài vào PDF ký nếu đã lưu repository.)*

---

## Phụ lục B — Agenda workshop 90'  
### (5 pha Derby & Larsen + 4 câu NASA AAR)

Xem **PHẦN D** bên dưới (bản đầy đủ để in riêng / đính kèm họp).

---

## Phụ lục C — Mapping nguồn đầu vào → field form

| Nguồn đầu vào | Field trên Report / Log | Ghi chú |
|---|---|---|
| Doc 1 Phase Exit (Pass/Conditional/Fail + action) | Log: Nguồn=Gate; Situation; Impact; Early warning; OPA=gate checklist | Không copy cả checklist — chỉ lesson |
| Doc 2 Peer (synthesis ẩn danh) | §3 Method/People; §5 People | **Cấm** raw điểm/tên |
| Doc 3 Stakeholder (theme/NPS) | §2 (NPS nếu dùng); §5 Vendor–Client / Ops | Không câu hỏi cảm xúc |
| Doc 4 Closure | Meta link; §5 = nguồn Closure §9; §2 số liệu rút từ Closure 3–4 | Closure giữ tóm tắt |
| Jira Sprint / Retro | Log Nguồn=Sprint; Keywords; Action | Mini log sau mỗi sprint |
| CR C.11 | Log Nguồn=CR; Category Commercial/Process | CR lớn bắt buộc ≥1 dòng |
| Incident / monitoring T27–T30 | Log Nguồn=Incident; §2 SLA; §3 Abnormal | Link INC |
| Pentest NTP | §3 Specialist; Category Security | Confidential=Y nếu cần |
| Risk register | Prior risk? Y/N + ID | Đối chiếu sớm |

---

## Phụ lục D — Lịch sử phiên bản

| Ver | Ngày | Người sửa | Thay đổi |
|---|---|---|---|
| 0.9 | `[điền]` | PM/SM | Draft sau workshop |
| 1.0 | `[điền]` | PM/SM | Trình PMO nhập repository |

---

# PHẦN D — Agenda workshop End-of-Project 90 phút

**Mục tiêu họp:** Gather data → Generate insights → Decide actions (có owner/due/OPA) → Cập nhật Log + phác §5 Keep/Improve/Try.  
**Facilitator:** SM · **Scribe:** PM hoặc BA · **Thành phần tối thiểu:** PO, IT Lead, PM/SM, Architect, đại diện Dev/QA/DevOps.  
**Chuẩn bị trước (T−3 ngày):** export metrics §2; Log đang mở; synthesis ẩn danh Doc2; theme Doc3; biên bản gate Conditional/Fail.

| Phút | Pha (Derby & Larsen) | Hoạt động | Câu hỏi khung / output |
|---|---|---|---|
| **0–10** | **1. Set the Stage** | Mục tiêu, psychological safety, quy tắc: quan sát ≠ ý kiến ≠ hành động; không nêu tên để phạt | “Chúng ta cải thiện hệ thống & quy trình, không đổ lỗi cá nhân.” Output: đồng thuận luật họp |
| **10–30** | **2. Gather Data** | Timeline M0–M7 / R0–R4 trên tường; dán sticky Went well / Improve; chiếu §2 metrics | **NASA AAR (1–2):** *Kỳ vọng là gì?* · *Thực tế là gì?* Output: cụm dữ liệu + 3–5 “hot spots” |
| **30–55** | **3. Generate Insights** | 5 Whys / fishbone cho 3–5 hot spots; map Category + Keywords | **NASA AAR (3):** *Vì sao lệch?* Early warning? Đã là risk? Output: draft Lesson statement (1 câu) |
| **55–80** | **4. Decide What to Do** | Chọn Keep / Improve / Try theo 4 hàng §5; ưu tiên MoSCoW action; gán Owner–Due–OPA | **NASA AAR (4):** *Giữ / sửa / thử gì lần sau?* Output: 5–8 action §6; cập nhật Log Status |
| **80–90** | **5. Close** | Đọc lại Must embed; ai soạn Report; hạn nhập repository; cảm ơn; parking lot | Output: owner soạn Full Report; ngày đóng Log dự kiến |

### Biến thể ngắn (sau Gate / Release) — 45–60'

| Phút | Nội dung |
|---|---|
| 0–5 | Set the Stage (luật họp) |
| 5–20 | AAR 4 câu cho **một** sự kiện (gate/release/incident) |
| 20–40 | 1–3 dòng Log + action Must embed |
| 40–50/60 | Ai cập nhật OPA; link evidence; đóng họp |

---

# PHẦN E — Hướng dẫn điền + RACI

## E.1. Hướng dẫn điền (5–7 dòng)

1. Ghi Log **ngay** sau Sprint / Gate Conditional|Fail / CR lớn / Incident / Release — không chờ G7.
2. Mỗi dòng: ngữ cảnh → tác động → root cause → lesson 1 câu → recommendation → **action + owner + due** → OPA; thiếu evidence để `[điền]` — không bịa.
3. Tách rõ quan sát (có link) / ý kiến / hành động; Category + Keywords bắt buộc để Retrieve.
4. Peer raw và câu hỏi cảm xúc Stakeholder **không** vào form này; chỉ synthesis/theme.
5. Workshop EOP 90' điền §3–§6; PM hoàn thiện §1–§2–§7–§8 trong ≤5 ngày làm việc sau họp.
6. Status Closed chỉ khi action xong hoặc Cancelled có lý do; Must embed chưa vào OPA = chưa học xong.
7. Closure Doc 4 §9 chỉ nhận bảng §5; chi tiết card §4 + Log ở tài liệu này.

## E.2. RACI

| Hoạt động | SM (Facilitator) | PM | Leads (Arch/QA/DevOps/BA) | PO (QA) | PMO / Knowledge Owner |
|---|---|---|---|---|---|
| Facilitate retro / workshop LL | **R** | C | C | I | I |
| Soạn Full Report & cập nhật Log | C | **A/R** | C (evidence) | I | C |
| Cung cấp evidence / metrics | I | C | **R** | C (nghiệp vụ) | I |
| Phê duyệt action Must embed (org) | C | C | C | I | **A** |
| Nhập repository + tag keywords | I | C | I | I | **A/R** |
| Nhận bản tổng hợp (§1+§5) | I | C | I | **I** (xác nhận tuỳ chọn) | I |
| Retrieve trước dự án sau | I | **R** (PM mới) | C | I | **A** (xác nhận quy trình) |

**Tóm tắt tối thiểu:** Facilitator (SM) **R** · PM **A** soạn báo cáo · Leads **C** evidence · PO **I** (bản tổng hợp) · PMO **A** repository.

---

# PHẦN F — Mapping sang GitHub Pages / Word (form điền)

Khi xuất HTML/Word printable (pattern PMO E.x — **không** nhồi E-HSDT / Phần D pháp lý):

| Thành phần UI | Gợi ý control |
|---|---|
| Status (Log / card) | `<select>`: Identified / Analyzed / Action agreed / In Progress / Closed / Cancelled |
| Category | `<select>` 7 nhóm |
| Went well / Improve | radio / select |
| Situation / Expected / Actual / Lesson | `<textarea>` |
| Keywords | text input |
| Action table §6 | 5–8 hàng trống: text + select Loại + Owner + Due + checkbox Done |
| Confidential / Done / OPA | checkbox |
| Ngày | `input type=date` |
| Placeholder | `[điền]` xuyên suốt |
| Disclaimer mock | Banner: *Bản mẫu hư cấu phục vụ bài tập đóng vai — không giá trị pháp lý* |
| In PDF | Toolbar `In / Lưu PDF` + CSS `@media print` A4 |

---

# PHẦN G — Bảng Source → Field (audit best practice)

| Nguồn / nguyên tắc | Yêu cầu trích | Field / mục trên form này |
|---|---|---|
| PMI — Applying lessons learned (5 activities) | Identify → Document → Analyze → Store → Retrieve | Toàn bộ Log + §4 card + §7 Retrieve; Keywords bắt buộc |
| PMI — Lessons learned sharing knowledge | Chia sẻ & tái sử dụng | §7 Sharing; quyền đọc nội bộ vs QA tổng hợp |
| PMI — Early & often + LL Log in Executing | Ghi sớm, thường xuyên; living log | One-pager A; Log Phần B; mini sau Sprint |
| PMI — Knowledge management / assimilation | Lesson chưa học nếu chưa vào process asset | Cột **OPA cập nhật**; §6 Assimilation checklist |
| PRINCE2 Lessons Report | Báo cáo cuối bắt buộc; stage khi hữu ích sớm | Full Report G7; AAR sau gate/release; §3 Project Review |
| PRINCE2 significant lesson fields | Situation, impact +/−, cause, early warning, prior risk?, recommendation | §4 card chuẩn |
| PRINCE2 | *Not learned until action taken* | Action + Owner + Due + Status Closed rule |
| NASA AAR / Pause and Learn | 4 câu: Expected / Actual / Why / Keep-Improve-Try | Phần D agenda; §4 Expected vs Actual; §5 KIT |
| NASA Closeout / NPR 7120.6 | Document lessons; infusion vào tiêu chuẩn/đào tạo | §8 đóng Log; OPA + Training trong §6 |
| UK Teal Book — Lessons register | Went well/Improve; context; lesson; action+owner+due; category; status; link; learning legacy | Toàn bộ cột Log Phần B; §7 learning legacy |
| Derby & Larsen — 5-step retro | Set Stage → Gather → Insights → Decide → Close | Phần D Agenda 90' |
| Keep / Improve / Try | Tương thích Start–Stop–Continue | §5 + Closure Doc 4 §9 |

### URL tham chiếu (để audit)

| # | URL |
|---|---|
| 1 | https://www.pmi.org/learning/library/applying-lessons-learned-implement-project-8344 |
| 2 | https://www.pmi.org/learning/library/lessons-learned-sharing-knowledge-8189 |
| 3 | https://www.pmi.org/learning/library/lessons-learned-early-often-6746 |
| 4 | https://www.pmi.org/learning/library/knowledge-management-lessons-learned-10161 |
| 5 | https://prince2.wiki/management-products/reports/lessons-report/ |
| 6 | https://prince.nicholas.mincher.org/content/prince2templates/lessonsreport.pdf |
| 7 | https://www.nasa.gov/wp-content/uploads/2025/09/after-action-review-v3.pdf |
| 8 | https://www.nasa.gov/reference/3-9-project-phase-f-closeout/ |
| 9 | https://nodis3.gsfc.nasa.gov/displayCA.cfm?Internal_ID=N_PR_7120_0006_&page_name=Chapter1 |
| 10 | https://projectdelivery.gov.uk/teal-book/home/part-f-solution-delivery/chapter-38-learning-from-experience/ |
| 11 | https://pragprog.com/titles/dlret2/agile-retrospectives-second-edition/ |
| 12 | https://tryhamster.com/methods/five-step-retrospective-framework |

---

*Tài liệu vận hành PMO Sao Bắc Tech cho dự án QA (IB2600184512-00). Bổ sung chuyên sâu Lessons Learned cho Doc 4 Closure §9. Không thay biên bản nghiệm thu pháp lý. Không đưa vào E-HSDT / Phần D.*
