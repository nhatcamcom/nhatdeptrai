# Game Brief: Shadowfall

## In your words
Người chơi điều khiển một chiến binh trong thế giới giả tưởng bị bóng tối xâm chiếm. Người chơi phải chiến đấu với từng đợt quái vật, thu thập kinh nghiệm, nâng cấp kỹ năng và đánh bại Boss.

Thể loại: Action – Roguelite – Dark Fantasy. Nền tảng: Web Browser. Góc nhìn: 2D Top-down. Định hướng hình ảnh: Dark Fantasy, màu sắc u tối, hiệu ứng chiến đấu đẹp, giao diện hiện đại.

Prototype cần có: 1. Nhân vật di chuyển bằng WASD. 2. Điều khiển hướng tấn công bằng chuột. 3. Chuột trái để tấn công. 4. Space để né đòn. 5. E để sử dụng kỹ năng đặc biệt. 6. Quái vật xuất hiện theo từng đợt. 7. Hệ thống máu và sát thương. 8. Hệ thống kinh nghiệm. 9. Cơ chế nâng cấp nhân vật. 10. Một Boss. 11. Màn hình chiến thắng và thất bại. 12. Chơi lại sau khi kết thúc.

1. Combat: Chém cận chiến bằng kiếm theo hướng chuột.
2. Skill E: (a) Lốc xoáy bóng tối. Khi kích hoạt, nhân vật xoay kiếm gây sát thương tất cả quái vật xung quanh. Hiệu ứng phải đẹp và có cảm giác mạnh.
3. Upgrades: Mỗi lần lên cấp, cho chọn 1 trong 3 thẻ nâng cấp. Các nâng cấp cần đa dạng như tăng sát thương, tốc độ đánh, tốc độ di chuyển, máu tối đa, hồi máu và giảm hồi chiêu.
4. Between runs: Giữ lại mảnh bóng tối sau khi chết để mua một số nâng cấp vĩnh viễn nhỏ. Lưu bằng LocalStorage trong prototype; sau này có thể đồng bộ với tài khoản trên Backend.
5. Feel: (a) Nhanh, hung hãn. Nhân vật có thể lướt né, tấn công nhanh và hồi một lượng máu nhỏ khi đánh trúng. Cần cân bằng để không quá dễ thắng.
6. Look: (a) Pixel Art 16-bit tối. Sử dụng nền đá lạnh xanh tím, ánh đuốc cam, quái vật có viền đỏ và hiệu ứng chém phát sáng. Ưu tiên hình ảnh đẹp, đồng nhất, không sử dụng các hình khối đơn giản làm hình ảnh cuối cùng.
7. Challenge: Giữ 5 đợt quái rồi đến Boss, mỗi lượt khoảng 8–10 phút. Đợt 1–2 để người chơi làm quen, đợt 3 bắt đầu nguy hiểm, đợt 4–5 tăng áp lực và Boss có nhiều kiểu tấn công.

**Pitch:** Một chiến binh đơn độc cầm đuốc giữa đấu trường đổ nát: chém, lướt và xoáy bóng tối qua 5 đợt quái để hạ Kẻ Canh Giữ Bóng Tối.

**Genre:** action roguelite (đấu trường theo đợt)

**Controls:** WASD di chuyển · chuột ngắm · chuột trái chém · Space lướt né · E lốc xoáy bóng tối · Esc tạm dừng *(guessed)*

**Question:** Chém theo chuột + lướt + lốc xoáy qua 5 đợt quái và Boss có giữ được cảm giác căng và đã tay suốt 8–10 phút không? *(inferred (strong))*

**Hooks:** Lốc xoáy bóng tối (E): vòng kiếm tím rực xé nát cả đám quái; nhịp hung hãn: lướt vào, chém, hồi máu nhờ đánh trúng.

**Intent:**

## Look and references
- Look: pixel art 16-bit tối. Đấu trường sân nhà nguyện đổ nát, đá lạnh xanh tím; 4 lò lửa đuốc cam tạo vùng sáng ấm. Chiến binh giáp thép, áo choàng xám, sáng nhất màn hình. Mỗi quái có viền đỏ máu và mắt đỏ phát sáng. Vệt chém trắng lạnh phát sáng, lốc xoáy tím rực. Bóng đổ lạnh (tím), ánh sáng ấm (cam). Độ phân giải gốc 480×270, phóng to theo bội số nguyên, tắt làm mịn, một mật độ pixel, viền tối 1 pixel. *(guessed: phần chi tiết)*
- Signature: vầng sáng đuốc ấm quanh chiến binh, rìa màn hình tối dần *(guessed)*
- References: chưa nêu game nào. Mọi hình đều được vẽ, không emoji, không hình tròn hay ô vuông trơn.
- View: 2D · Camera: top-down, bám theo chiến binh, lệch nhẹ về phía chuột *(guessed)*

## First minute
Chiến binh đứng giữa đấu trường tối, 4 lò lửa bập bùng, gợi ý "WASD di chuyển · Click chém" mờ dần. 3 Ghoul bò ra từ mép tường. Click: vệt kiếm sáng quét theo hướng chuột, quái nảy lùi, nháy trắng rồi vỡ thành hạt kinh nghiệm tím bay về người chơi. Khi quái áp sát, gợi ý "Space: lướt" hiện ra; lướt xuyên qua quái không mất máu. Khoảng 40 giây đầu lên cấp 1: thời gian chậm lại, 3 thẻ nâng cấp hiện ra. Sang đợt 2 quái đông hơn, gợi ý "E: Lốc xoáy bóng tối" hiện lên; nhấn E, vòng kiếm tím quét sạch cả đám xung quanh: khoảnh khắc đã tay đầu tiên.

## Challenge
Đợt 1–2 (0–3 phút) làm quen: Ghoul và vài Cung thủ xương. Đợt 3 (khoảng phút 3–4) là rắc rối thật đầu tiên: Cung thủ bắn từ xa trong khi Brute khổng lồ vung đòn đập có báo trước. Đợt 4–5 thêm Wraith lao vụt theo đường thẳng, quái đông dần. Boss ra khoảng phút 7–8 với 4 đòn (lao tới đập đất, vòng cầu bóng tối, chém quét, gọi Ghoul); dưới 50% máu sang pha 2 nhanh hơn và phối hợp đòn. Hồi máu khi đánh trúng nhỏ và có giới hạn, nên đứng yên đổi đòn sẽ thua. Chết là mất cả lượt nhưng giữ lại mảnh bóng tối kiếm được.

## Core loop
- Chém, lướt, xoáy để quét sạch một đợt quái trong đấu trường
- Quái chết rơi hạt kinh nghiệm → lên cấp → chọn 1 trong 3 thẻ, bộ kỹ năng mạnh dần
- Qua 5 đợt → gặp Boss → thắng hoặc chết
- Dù thắng hay thua đều giữ mảnh bóng tối → mua nâng cấp vĩnh viễn nhỏ → bắt đầu lượt mới

## Goal & fail state
- Thắng: hạ Boss sau đợt 5. Thua: máu về 0. Màn kết hiện điểm, số quái hạ, thời gian, cấp đạt được và mảnh bóng tối nhận được.

## Features
- [ ] Chiến binh: WASD di chuyển, chém kiếm theo hướng chuột (chuột trái), Space lướt bất tử ngắn, E Lốc xoáy bóng tối có hồi chiêu
- [ ] Đấu trường đá tối có lửa đuốc; 5 đợt quái với 4 loại quái, mỗi loại tấn công khác nhau (Ghoul lao cắn, Cung thủ xương bắn xa, Brute đập có báo trước, Wraith lao vụt)
- [ ] Máu và sát thương: nháy trắng, đẩy lùi, rung màn hình, số sát thương bay lên, hồi máu nhỏ khi đánh trúng
- [ ] Kinh nghiệm: hạt kinh nghiệm bay về người chơi; lên cấp chọn 1 trong 3 thẻ (sát thương, tốc độ đánh, tốc độ chạy, máu tối đa, hồi máu, giảm hồi chiêu và vài thẻ khác)
- [ ] Boss Kẻ Canh Giữ Bóng Tối: nhiều kiểu đòn có báo trước, có pha 2
- [ ] Màn hình chiến thắng và thất bại có tổng kết, chơi lại
- [ ] Mảnh bóng tối + cửa hàng nâng cấp vĩnh viễn nhỏ, lưu LocalStorage (thin stand-in)

## Your systems
- chém kiếm theo chuột · in the slice
- lốc xoáy bóng tối (E) · in the slice
- lướt né (Space) · in the slice
- quái theo từng đợt · in the slice
- máu và sát thương, hồi máu khi đánh trúng · in the slice
- kinh nghiệm và lên cấp · in the slice
- thẻ nâng cấp khi lên cấp · in the slice
- Boss · in the slice
- màn hình thắng/thua và chơi lại · in the slice
- mảnh bóng tối và nâng cấp vĩnh viễn (LocalStorage) · thin stand-in *(guessed)*
- tài khoản, đồng bộ Backend, bảng xếp hạng · later

## Keep
-

## Avoid
- Hình khối đơn giản hoặc emoji làm hình ảnh cuối cùng
- Quá dễ thắng (hồi máu khi đánh trúng phải có giới hạn)

## Out of scope
- Tài khoản, Backend Spring Boot, MySQL, bảng xếp hạng online: grow it (chỉ sau khi duyệt prototype)
- Khu nghỉ giữa các lượt có nhân vật và cốt truyện: grow it
- Nhiều khu vực và nhiều Boss: grow it
- Chế độ độ khó sau khi thắng: change it after play
- Cửa hàng giữa lượt chơi: change it after play
- Nâng cấp nhân hệ số lẫn nhau: add it as a feature
- Vật phẩm hiếm, chống chuỗi xui: change it after play
- Co-op chung màn hình: change it after play
- Lượt chơi theo seed hằng ngày chia sẻ với người khác: needs a server

## Build order
1. Bản chơi thử: một lượt hoàn chỉnh: đấu trường, chiến binh (chém, lướt, xoáy), 5 đợt với 4 loại quái, kinh nghiệm + thẻ nâng cấp, Boss, màn hình thắng/thua, chơi lại.
2. Mảnh bóng tối và màn hình nâng cấp vĩnh viễn (LocalStorage).
3. Phát triển thành dự án Vite + TypeScript + Phaser, sau đó Spring Boot + MySQL (tài khoản, bảng xếp hạng).

---
**Kill condition:** Sau 2 vòng tinh chỉnh mà đòn chém + lướt vẫn "lơ lửng", hoặc các đợt quái chỉ là giữ một nút. *(guessed)*

**Who it's for / what they feel:** Người thích lượt chơi ngắn dồn dập dark fantasy 8–10 phút, muốn thấy mình mạnh lên rõ rệt qua từng cấp. *(inferred (strong))*

**Games you love / don't:** chưa nêu.
