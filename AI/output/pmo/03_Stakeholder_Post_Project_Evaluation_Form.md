# Đánh giá sau dự án từ các bên liên quan  
## Stakeholder Post Project Evaluation Form

| Mục | Nội dung |
|---|---|
| **Dự án** | Hệ thống phân phối trực tuyến (Web + Mobile) — IB2600184512-00 |
| **Chủ đầu tư** | Chuỗi cửa hàng thời trang QA |
| **Nhà thầu** | Sao Bắc Tech |
| **Phiên bản** | 1.0 \| **Ngày hiệu lực** | [điền] |
| **Chủ sở hữu form** | PO (QA) phối hợp PM Sao Bắc Tech thu thập |
| **Thời gian điền** | **≤ 10 phút** / người |
| **Lưu trữ** | Confluence: `QA-OMS / Feedback / Stakeholder` + export Excel; tóm tắt vào Closure Report §8 |

---

### 1. Mục đích
Thu thập cảm nhận **người dùng nghiệp vụ & lãnh đạo QA** về kết quả sản phẩm, phối hợp nhà thầu, đào tạo và sẵn sàng vận hành — phục vụ cải tiến và benefits realization.  
**Không** đánh giá điểm nhân sự nhà thầu (xem Form Peer); **không** thay biên bản nghiệm thu UAT/gate.

### 2. Thời điểm dùng

| Đợt | Thời điểm | Phiên bản | Nhóm bắt buộc |
|---|---|---|---|
| **Pulse (tuỳ chọn)** | Sau R1 (T12) và/hoặc R2 (T20) | 5 câu chung | Ban dự án / IT Lead |
| **Mini** | Sau Pilot R3 (T25) | Theo nhóm rút gọn | Cửa hàng pilot + IT Lead + PO |
| **Full** | Sau nghiệm thu cuối / T30 (Gate G7) | Đầy đủ theo nhóm | Tất cả nhóm bên dưới |

### 3. RACI

| Hoạt động | PO | IT Lead | Quản lý cửa hàng / kho | Kế toán / Marketing | PM nhà thầu | Ban chỉ đạo |
|---|---|---|---|---|---|---|
| Phân phối form đúng nhóm | **A** | C | I | I | **R** (gửi link, nhắc) | I |
| Điền form | C | **R** | **R** | **R** | I | **R** (nhóm Ban chỉ đạo) |
| Tổng hợp & theme | C | C | I | I | **R** | **A** (nhận báo cáo) |
| Đưa vào Closure / BH backlog | **A** | C | I | I | **R** | C |

### 4. Hướng dẫn điền (5–7 dòng)
1. Chọn **đúng phiên bản nhóm** (A–E); chỉ điền phần của nhóm bạn — tối đa 10 phút.
2. Thang Likert 1–5: 1 = Rất không đồng ý / Rất kém · 3 = Trung bình · 5 = Rất đồng ý / Rất tốt; chọn N/A nếu không trải nghiệm.
3. Trả lời theo **trải nghiệm thực tế** (pilot/go-live), không theo giới thiệu bán hàng.
4. Phần mở: ngắn, cụ thể (màn hình, quy trình, thời điểm sự cố).
5. Xác nhận bằng chữ ký hoặc email công việc QA.
6. PM chỉ thấy bản tổng hợp + trích dẫn ẩn danh trừ khi bạn đồng ý nêu tên.
7. Form Pulse/Mini có thể bỏ qua câu đánh dấu “(Full only)”.

### 5. Thang & NPS

**Likert 1–5** như trên.  
**NPS (câu khuyến nghị):** “Bạn sẵn sàng giới thiệu cách triển khai/phối hợp với nhà thầu này cho dự án nội bộ tương tự?”  
0–10 · **NPS = %Promoters(9–10) − %Detractors(0–6)**.

---

## PHẦN 0 — Thông tin người trả lời (chung mọi nhóm)

| Trường | Giá trị |
|---|---|
| Họ tên | |
| Email công việc | |
| Đơn vị / cửa hàng | |
| Nhóm stakeholder | ☐ A. Ban chỉ đạo / PO &nbsp;&nbsp; ☐ B. IT Lead & vận hành &nbsp;&nbsp; ☐ C. Cửa hàng pilot &nbsp;&nbsp; ☐ D. Kho / shipper &nbsp;&nbsp; ☐ E. Kế toán / marketing |
| Đợt khảo sát | ☐ Pulse R1 &nbsp;&nbsp; ☐ Pulse R2 &nbsp;&nbsp; ☐ Mini sau Pilot &nbsp;&nbsp; ☐ Full T30 |
| Ngày điền | |
| Mức độ tham gia dự án | ☐ Thường xuyên &nbsp;&nbsp; ☐ Thỉnh thoảng &nbsp;&nbsp; ☐ Chỉ dùng hệ thống khi go-live/pilot |

---

## PHIÊN BẢN A — Ban chỉ đạo / Product Owner

### A. Mục tiêu nghiệp vụ
| # | Câu hỏi | 1 | 2 | 3 | 4 | 5 | N/A |
|---|---|---|---|---|---|---|---|
| A1 | Hệ thống hỗ trợ **tự chủ kênh phân phối online** đúng định hướng chiến lược QA | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| A2 | Phạm vi Must-have B.3 giao đúng cam kết hợp đồng (epic) | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| A3 | Trải nghiệm mua của khách (tìm–chọn CH–đặt–giao) rõ ràng, theo dõi được | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| A4 | Điều phối giao hàng nội bộ / cửa hàng được nhìn thấy trên hệ thống | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| A5 | Minh bạch tiến độ (sprint review, burn-up, mốc M) đủ để ra quyết định | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

### B. Chất lượng & phối hợp nhà thầu
| # | Câu hỏi | 1 | 2 | 3 | 4 | 5 | N/A |
|---|---|---|---|---|---|---|---|
| B1 | Chất lượng sản phẩm tại thời điểm đánh giá ổn định, đáng tin | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| B2 | Nhà thầu phản hồi yêu cầu / sự cố đúng kỳ vọng | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| B3 | Quản lý thay đổi (C.11) minh bạch, không phát sinh ngoài kiểm soát | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| B4 | Quality gate / demo có đủ bằng chứng để Ban chỉ đạo yên tâm | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

### C. Đào tạo, bàn giao, sẵn sàng
| # | Câu hỏi | 1 | 2 | 3 | 4 | 5 | N/A |
|---|---|---|---|---|---|---|---|
| C1 | Đào tạo / tài liệu đủ cho tổ chức vận hành | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| C2 | QA sẵn sàng vận hành với mô hình bảo hành 12 tháng | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

### D. Tổng thể
| Câu | Trả lời |
|---|---|
| Mức hài lòng tổng thể (1–5) | |
| NPS nhà thầu / cách triển khai (0–10) | |
| 3 điều **giữ lại** | 1) … 2) … 3) … |
| 3 điều **cải thiện** | 1) … 2) … 3) … |
| Rủi ro còn mở (góc nhìn Ban chỉ đạo) | |

**Xác nhận:** ☐ Email xác nhận đã gửi &nbsp;&nbsp; Chữ ký: ________ &nbsp;&nbsp; Ngày: ________

---

## PHIÊN BẢN B — IT Lead & vận hành

### A. Sản phẩm & vận hành kỹ thuật
| # | Câu hỏi | 1 | 2 | 3 | 4 | 5 | N/A |
|---|---|---|---|---|---|---|---|
| B-A1 | Kiến trúc/HLD/ICD đủ để đội IT QA tiếp quản | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| B-A2 | Giám sát, log, alert đủ dùng vận hành hàng ngày | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| B-A3 | Tích hợp Main DB / POS / CDC / cổng TT vận hành ổn | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| B-A4 | Quy trình release / rollback / backup rõ, thực hành được | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| B-A5 | Bảo mật & quyền truy cập PRD chấp nhận được | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| B-A6 | Hiệu năng thực tế đáp ứng nhu cầu giờ cao điểm (theo quan sát) | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

### B. Phối hợp & bàn giao
| # | Câu hỏi | 1 | 2 | 3 | 4 | 5 | N/A |
|---|---|---|---|---|---|---|---|
| B-B1 | Nhà thầu minh bạch sự cố & root cause | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| B-B2 | Tài liệu vận hành / OpenAPI / runbook đủ dùng | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| B-B3 | Đội IT QA có thể xử lý L1/L2 cơ bản trước khi escalate bảo hành | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| B-B4 | Bàn giao mã nguồn, môi trường, tài khoản đầy đủ (Full) | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

### C. Mở & tổng thể
| Câu | Trả lời |
|---|---|
| Hài lòng tổng thể (1–5) | |
| NPS (0–10) | |
| 3 giữ lại / 3 cải thiện | Giữ: … / Cải thiện: … |
| Rủi ro kỹ thuật / nợ còn mở | |
| Nhu cầu hỗ trợ 30/90 ngày tới | |

**Xác nhận:** Chữ ký / email: ________ &nbsp;&nbsp; Ngày: ________

---

## PHIÊN BẢN C — Cửa hàng pilot (và cửa hàng sau go-live — Full)

### A. Nghiệp vụ cửa hàng
| # | Câu hỏi | 1 | 2 | 3 | 4 | 5 | N/A |
|---|---|---|---|---|---|---|---|
| C-A1 | Nhân viên cửa hàng tìm hiểu đơn online dễ dàng | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| C-A2 | Thông tin tồn kho / sản phẩm trên app|web **đáng tin** khi phục vụ khách | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| C-A3 | Quy trình nhận–chuẩn bị–giao / bàn giao shipper rõ ràng hơn hoặc tương đương quy trình cũ | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| C-A4 | Hệ thống không gây chậm đáng kể giờ cao điểm tại cửa hàng | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| C-A5 | Khi có sự cố, biết liên hệ ai và được hỗ trợ kịp | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

### B. Đào tạo
| # | Câu hỏi | 1 | 2 | 3 | 4 | 5 | N/A |
|---|---|---|---|---|---|---|---|
| C-B1 | Đào tạo / video / HDSD đủ để thao tác độc lập | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| C-B2 | Tài liệu đúng thực tế màn hình đang dùng | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

### C. Mở
| Câu | Trả lời |
|---|---|
| Hài lòng tổng thể (1–5) | |
| NPS trải nghiệm hệ thống tại cửa hàng (0–10) | |
| 3 giữ lại / 3 cải thiện | |
| Rủi ro / vướng còn lại tại cửa hàng | |

**Cửa hàng:** ________ &nbsp;&nbsp; **Xác nhận:** ________ &nbsp;&nbsp; **Ngày:** ________

---

## PHIÊN BẢN D — Kho / Shipper

### A. Điều phối & giao hàng
| # | Câu hỏi | 1 | 2 | 3 | 4 | 5 | N/A |
|---|---|---|---|---|---|---|---|
| D-A1 | Thông tin đơn / địa chỉ / khung giờ đủ để giao | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| D-A2 | Cập nhật trạng thái đơn trên app thuận tiện | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| D-A3 | Đồng bộ với cửa hàng / kho không gây nhầm đơn | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| D-A4 | Ứng dụng mobile ổn định trên thiết bị đang dùng | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| D-A5 | Đào tạo thao tác đủ ngắn gọn để đi làm ngay | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

### B. Mở & tổng thể
| Câu | Trả lời |
|---|---|
| Hài lòng (1–5) | |
| NPS (0–10) | |
| 3 giữ lại / 3 cải thiện | |
| Rủi ro vận hành giao hàng còn mở | |

**Xác nhận:** ________ &nbsp;&nbsp; **Ngày:** ________

---

## PHIÊN BẢN E — Kế toán / Marketing (khi đụng quy trình)

### A. Quy trình liên quan
| # | Câu hỏi | 1 | 2 | 3 | 4 | 5 | N/A |
|---|---|---|---|---|---|---|---|
| E-A1 | Đối soát đơn / doanh thu online / hóa đơn điện tử rõ ràng hơn trước | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| E-A2 | Số liệu phục vụ báo cáo / chiến dịch (nếu có) đủ tin cậy | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| E-A3 | Thay đổi quy trình được thông báo và đào tạo kịp | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| E-A4 | Phối hợp nhà thầu khi có lệch chứng từ / dữ liệu là minh bạch | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |

### B. Mở & tổng thể
| Câu | Trả lời |
|---|---|
| Hài lòng (1–5) | |
| NPS (0–10) | |
| 3 giữ lại / 3 cải thiện | |
| Rủi ro tài chính / tuân thủ / thương hiệu còn mở | |

**Xác nhận:** ________ &nbsp;&nbsp; **Ngày:** ________

---

## PHIÊN BẢN PULSE (R1/R2) — 5 câu chung (≤ 3 phút)

Chỉ dùng cho Ban dự án / IT Lead sau demo R1 hoặc dogfooding R2.

| # | Câu | 1–5 / N/A |
|---|---|---|
| P1 | Increment demo/beta đúng ưu tiên nghiệp vụ đã thống nhất | |
| P2 | Chất lượng bản demo/beta đủ để lấy phản hồi hữu ích | |
| P3 | Tiến độ và rủi ro được nhà thầu trình bày minh bạch | |
| P4 | Phản hồi của QA được tiếp thu vào backlog rõ ràng | |
| P5 | Mức tin tưởng tiếp tục theo kế hoạch release tới mốc tiếp theo | |
| | Một điều cải thiện trước mốc tới (1 câu) | ________ |

---

## Phiếu tổng hợp PM (1 trang — nội bộ PMO)

| Đợt | Số gửi | Số trả lời | Tỷ lệ | Hài lòng TB | NPS | Top 3 giữ lại | Top 3 cải thiện | Open risks → ticket |
|---|---|---|---|---|---|---|---|---|---|
| Pulse R1 | | | | | | | | |
| Pulse R2 | | | | | | | | |
| Mini Pilot | | | | | | | | |
| Full T30 | | | | | | | | |

**Phân rã theo nhóm (Full):**

| Nhóm | n | Hài lòng TB | NPS | Ghi chú |
|---|---|---|---|---|
| A Ban chỉ đạo / PO | | | | |
| B IT & vận hành | | | | |
| C Cửa hàng | | | | |
| D Kho / shipper | | | | |
| E Kế toán / marketing | | | | |

**Chuyển tiếp:** ☐ Closure Report §5/§8 &nbsp;&nbsp; ☐ Backlog bảo hành &nbsp;&nbsp; ☐ CR C.11 (nếu cần)

| PO xác nhận đã xem tóm tắt | PM lập bảng | Ngày |
|---|---|---|
| | | |

---

## Phụ lục — Tách biệt với Form Peer & Gate

| Chủ đề | Stakeholder form | Peer form | Gate checklist |
|---|---|---|---|
| Hài lòng nghiệp vụ / NPS | Có | Không | Không |
| Điểm Collaboration cá nhân Dev | Không | Có | Không |
| Defect mở theo severity | Không (chỉ cảm nhận ổn định) | Không | Có + bằng chứng |
| Thanh toán M-x | Không | Không | Có |

---

*Biểu mẫu vận hành PMO Sao Bắc Tech × QA — sau trúng thầu. Không đưa vào E-HSDT như tiêu chí đánh giá thầu.*
