// ==================== ORI ACADEMY — VNA CABIN CREW INTERVIEW PREP ====================

// ==================== STEP DATA ====================
const STEPS = [
    {
        num: 1,
        name: 'NỘP HỒ SƠ ỨNG TUYỂN',
        nameEn: 'Online Application',
        icon: '📋',
        content: `
            <div class="info-box">
                <h4>📌 Cách ứng tuyển</h4>
                <ul>
                    <li>👉 Truy cập <a href="https://www.vietnamairlines.com" target="_blank" style="color:var(--vna-teal);font-weight:700;">https://www.vietnamairlines.com</a> → mục <b>Career > Tuyển dụng Tiếp viên</b></li>
                    <li>Điền đầy đủ thông tin cá nhân theo form online</li>
                    <li>Chọn địa điểm thi: <b>Hà Nội</b> hoặc <b>TP.HCM</b></li>
                    <li>Nếu đạt sơ loại, nhận email thông báo số báo danh, thời gian, địa điểm</li>
                </ul>
            </div>
            <div class="info-box">
                <h4>📂 Hồ sơ cần chuẩn bị</h4>
                <table class="req-table">
                    <thead><tr><th>Tài liệu</th><th>Chi tiết</th></tr></thead>
                    <tbody>
                        <tr><td><b>Ảnh thẻ 4x6</b></td><td>Nền trắng, trang phục lịch sự</td></tr>
                        <tr><td><b>Ảnh chân dung 12x15</b></td><td>Ảnh toàn thân hoặc bán thân, chụp studio, make-up nhẹ nhàng</td></tr>
                        <tr><td><b>Thư viết tay giới thiệu bản thân</b></td><td>Viết TAY, nói về bản thân, động lực ứng tuyển, điểm mạnh</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="tip-box">
                <h4>💡 Mẹo ORI ACADEMY</h4>
                <ul>
                    <li>Ảnh 12x15 nên chụp studio chuyên nghiệp, cười tự nhiên, ánh sáng đẹp</li>
                    <li>Thư viết tay: viết rõ ràng, sạch đẹp, KHÔNG tẩy xóa, khoảng 1 trang A4</li>
                    <li>Nội dung thư: mở đầu giới thiệu → giữa kể kinh nghiệm/đam mê → kết bày tỏ nguyện vọng</li>
                    <li>Chữ viết phản ánh tính cách — nên luyện viết tay đẹp trước khi nộp</li>
                </ul>
            </div>
        `
    },
    {
        num: 2,
        name: 'ĐÁNH GIÁ NGOẠI HÌNH + GIAO TIẾP TIẾNG VIỆT',
        nameEn: 'Appearance & Vietnamese Communication',
        icon: '🗣️',
        content: `
            <div class="info-box">
                <h4>📌 Hình thức tổ chức</h4>
                <ul>
                    <li>Chia <b>nhóm 5 người</b> vào phòng BGK cùng lúc</li>
                    <li>BGK lần lượt hỏi từng thí sinh bằng <b>tiếng Việt</b></li>
                    <li>Từng bạn sẽ được gọi <b>đi catwalk lại gần bàn BGK</b> để hỏi đáp trực tiếp</li>
                    <li>BGK <b>kiểm tra tay</b> (móng tay, hình xăm, sẹo vùng cổ tay, bàn tay)</li>
                </ul>
            </div>
            <div class="info-box">
                <h4>🗣️ BGK đánh giá giao tiếp tiếng Việt</h4>
                <table class="req-table">
                    <thead><tr><th>Tiêu chí</th><th>Chi tiết BGK kiểm tra</th></tr></thead>
                    <tbody>
                        <tr><td><b>Giọng nói</b></td><td>Giọng có ngọng không? Có nói ngọn (l/n, s/x, ch/tr) không? Giọng vùng miền nặng không?</td></tr>
                        <tr><td><b>Thái độ</b></td><td>Lịch sự, vui vẻ, thân thiện hay căng thẳng?</td></tr>
                        <tr><td><b>Tiếp thu</b></td><td>BGK có thể <b>nhận xét thẳng thắn điểm yếu</b> để xem thái độ tiếp thu của thí sinh</td></tr>
                        <tr><td><b>Phản xạ</b></td><td>Trả lời có mạch lạc, rõ ràng, tự tin không?</td></tr>
                        <tr><td><b>Giao tiếp mắt</b></td><td>Có nhìn thẳng BGK, có nụ cười tự nhiên không?</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="info-box">
                <h4>💬 Câu hỏi tiếng Việt thường gặp</h4>
                <ul>
                    <li>"Hãy giới thiệu về bản thân bạn."</li>
                    <li>"Tại sao bạn muốn trở thành tiếp viên hàng không?"</li>
                    <li>"Bạn biết gì về Vietnam Airlines?"</li>
                    <li>"Bạn có sẵn sàng xa nhà trong thời gian dài không?"</li>
                    <li>"Gia đình bạn nghĩ gì về việc bạn ứng tuyển tiếp viên?"</li>
                    <li>"Nếu hành khách phàn nàn, bạn xử lý thế nào?"</li>
                    <li>"Điểm mạnh và điểm yếu của bạn là gì?"</li>
                    <li>"Bạn thấy mình có gì chưa tốt? (câu test thái độ)"</li>
                </ul>
            </div>
            <div class="warn-box">
                <h4>⚠️ BGK sẽ TEST thái độ!</h4>
                <ul>
                    <li>BGK có thể nói thẳng: "Bạn hơi thấp", "Da bạn không được tốt", "Giọng bạn hơi nặng vùng miền"</li>
                    <li><b>MỤC ĐÍCH:</b> Kiểm tra thí sinh có biết lắng nghe, tiếp thu, giữ bình tĩnh không</li>
                    <li>❌ TRƯỢT nếu: tỏ thái độ khó chịu, cãi lại, mặt buồn, khóc</li>
                    <li>✅ ĐẠT nếu: cười nhẹ, cảm ơn góp ý, trả lời "Em sẽ cố gắng cải thiện ạ"</li>
                </ul>
            </div>
            <div class="tip-box">
                <h4>💡 Mẹo ORI ACADEMY</h4>
                <ul>
                    <li>Nếu bị nhận xét điểm yếu → CỨ CƯỜI + CẢM ƠN: "Dạ, em cảm ơn anh/chị đã góp ý. Em sẽ cải thiện ạ."</li>
                    <li>Luyện phát âm chuẩn: phân biệt l/n, s/x, ch/tr — đọc to trước gương mỗi ngày</li>
                    <li>Giọng vùng miền: không cần bỏ hoàn toàn, nhưng nói RÕ RÀNG, DỄ NGHE</li>
                    <li>Tay: cắt móng sạch, không sơn móng màu lạ, kem dưỡng tay 1 tuần trước</li>
                    <li>Khi catwalk đến bàn BGK: đi CHẬM, thẳng lưng, cười tự nhiên, hai tay thả tự nhiên</li>
                    <li>Kiểm tra BMI trước ÍT NHẤT 1 tháng để kịp điều chỉnh</li>
                </ul>
            </div>
        `
    },
    {
        num: 3,
        name: 'VÒNG PHỎNG VẤN TIẾNG ANH',
        nameEn: 'English Interview',
        icon: '🇬🇧',
        content: `
            <div class="info-box">
                <h4>📌 Phỏng vấn tiếng Anh</h4>
                <ul>
                    <li>Phỏng vấn hội đồng bằng <b>tiếng Anh</b> — đánh giá speaking, vocabulary, fluency</li>
                    <li>Thời lượng: 10-15 phút / ứng viên</li>
                    <li>BGK đánh giá: phát âm, ngữ pháp, từ vựng, sự tự tin, khả năng diễn đạt</li>
                </ul>
            </div>
            <div class="info-box">
                <h4>I. 🧑 MỞ ĐẦU VÀ THÔNG TIN CÁ NHÂN</h4>
                <ul>
                    <li>1. Can you introduce yourself?</li>
                    <li>2. Tell me about your family?
                        <ul style="margin-top:4px;font-size:0.88em;color:#555;">
                            <li>(*) What does your father/mother do? = What is your mother/father's occupation?</li>
                            <li>Why don't you work as a (nghề) as your father/mother?</li>
                            <li>(*) What does your family think about you become a flight attendant?</li>
                        </ul>
                    </li>
                    <li>3. Where is your hometown?
                        <ul style="margin-top:4px;font-size:0.88em;color:#555;"><li>Can you tell me something about your hometown?</li></ul>
                    </li>
                    <li>4. What are your hobbies? = What do you do in your free time?
                        <ul style="margin-top:4px;font-size:0.88em;color:#555;"><li>(*) What's your favorite book? Tell me what is it about?</li></ul>
                    </li>
                    <li>5. Where do you like to travel?</li>
                    <li>6. Tell me 3 characters about you?</li>
                </ul>
            </div>
            <div class="info-box">
                <h4>II. 🎓 HỌC VẤN VÀ KINH NGHIỆM</h4>
                <ul>
                    <li>7. What's your major? Why did you choose it?</li>
                    <li>8. What did you learn from your major?</li>
                    <li>9. Why did you choose your major but you want to be a flight attendant?</li>
                    <li>10. Have you ever worked before?</li>
                    <li>11. What is your job? What did you learn from it?</li>
                    <li>12. Why do you want to change your job?</li>
                    <li>13. Have you ever had any problem at your job, how did you solve it?</li>
                </ul>
            </div>
            <div class="info-box">
                <h4>III. 💪 ĐỘNG LỰC VÀ SỰ PHÙ HỢP VỚI NGHỀ</h4>
                <ul>
                    <li>14. Why do you want to become a flight attendant?</li>
                    <li>15. What are your strengths? = Why should I choose you?</li>
                    <li>16. What is your weakness?</li>
                    <li>17. What does a flight attendant do? = What are the duties of a cabin crew?</li>
                    <li>18. What are the difficulties to be a flight attendant?</li>
                </ul>
            </div>
            <div class="info-box">
                <h4>IV. ✈️ HIỂU BIẾT VỀ VIETNAM AIRLINES VÀ ĐỊNH HƯỚNG</h4>
                <ul>
                    <li>19. What do you know about Vietnam Airlines?</li>
                    <li>20. Why do you want to work for Vietnam Airlines?</li>
                    <li>21. What does the Golden Lotus stand for?</li>
                    <li>22. What is the slogan of Vietnam Airlines?</li>
                    <li>23. Do you have any friends or relative work for Vietnam Airlines?</li>
                    <li>24. Being a flight attendant of Vietnam Airlines, you have to relocate to Nha Trang / Da Nang... What do you think about it?</li>
                </ul>
            </div>
            <div class="info-box">
                <h4>V. 🎯 CHUẨN BỊ VÀ THÁI ĐỘ</h4>
                <ul>
                    <li>25. Are you willing to be based in Hanoi or Ho Chi Minh City?</li>
                    <li>26. How do you handle being away from home for long periods?</li>
                    <li>27. How would you handle an angry passenger?</li>
                    <li>28. A passenger refuses to fasten their seatbelt. What would you do?</li>
                    <li>29. Do you have any questions for us?</li>
                </ul>
            </div>
            <div class="info-box">
                <h4>✈️ Kiến thức Vietnam Airlines CẦN NHỚ (bằng tiếng Anh)</h4>
                <table class="req-table">
                    <thead><tr><th>Info</th><th>Detail</th></tr></thead>
                    <tbody>
                        <tr><td><b>Founded</b></td><td>1956 — nearly 70 years of operation</td></tr>
                        <tr><td><b>Slogan</b></td><td>"Reaching Further"</td></tr>
                        <tr><td><b>Rating</b></td><td>4-star airline (Skytrax certified)</td></tr>
                        <tr><td><b>Alliance</b></td><td>SkyTeam member (since 2010)</td></tr>
                        <tr><td><b>Hubs</b></td><td>Noi Bai (HAN) & Tan Son Nhat (SGN)</td></tr>
                        <tr><td><b>Fleet</b></td><td>~100 aircraft: Boeing 787, Airbus A350, A321</td></tr>
                        <tr><td><b>Routes</b></td><td>50+ international, 20+ domestic</td></tr>
                        <tr><td><b>Uniform</b></td><td>Traditional áo dài — symbol of Vietnamese culture</td></tr>
                        <tr><td><b>Values</b></td><td>Graceful • Vietnamese • Skillful • Elegant • Professional</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="tip-box">
                <h4>💡 Mẹo ORI ACADEMY — Phỏng vấn tiếng Anh</h4>
                <ul>
                    <li>Khi trả lời: SMILE → EYE CONTACT → CONFIDENT VOICE</li>
                    <li>Dùng phương pháp STAR: Situation → Task → Action → Result</li>
                    <li>Xử lý hành khách: dùng công thức LEAPS (Listen → Empathize → Apologize → Problem-solve → Summarize)</li>
                    <li>Nhắc đến "Reaching Further", áo dài, 4-star, SkyTeam = ĐIỂM CỘNG LỚN</li>
                    <li>Không cần nói hoàn hảo — quan trọng là TỰ TIN và CHÂN THÀNH</li>
                </ul>
            </div>
        `
    },
    {
        num: 4,
        name: 'VÒNG ÁO DÀI & NGOẠI HÌNH TỔNG THỂ',
        nameEn: 'Áo Dài & Overall Appearance',
        icon: '👗',
        content: `
            <div class="info-box">
                <h4>👗 Nội dung vòng áo dài</h4>
                <ul>
                    <li><b>Nữ:</b> Mặc áo dài truyền thống — BGK đánh giá tổng thể</li>
                    <li><b>Nam:</b> Mặc áo sơ mi tay ngắn, giày tây, vuốt tóc gọn gàng</li>
                    <li>Đi trình diện trước hội đồng giám khảo</li>
                    <li>Đánh giá: thần thái, phong cách, dáng đi, nụ cười, sự tự tin, giao tiếp mắt</li>
                </ul>
            </div>
            <div class="info-box">
                <h4>🎯 Tiêu chí đánh giá ngoại hình tổng thể</h4>
                <table class="req-table">
                    <thead><tr><th>Tiêu chí</th><th>Yêu cầu</th></tr></thead>
                    <tbody>
                        <tr><td><b>Thần thái</b></td><td>Tự tin, tươi tắn, ánh mắt sáng, trang nhã</td></tr>
                        <tr><td><b>Dáng đi</b></td><td>Thẳng lưng, bước đều, nhẹ nhàng, thanh lịch</td></tr>
                        <tr><td><b>Nụ cười</b></td><td>Tự nhiên, thân thiện, không gượng gạo</td></tr>
                        <tr><td><b>Make-up</b></td><td>Trang nhã, nhẹ nhàng, phù hợp nghề TVHK</td></tr>
                        <tr><td><b>Tóc</b></td><td>Nữ: búi gọn, gáy sạch. Nam: cắt ngắn, gọn gàng</td></tr>
                        <tr><td><b>Da</b></td><td>Sạch, không mụn lớn, không sẹo vùng lộ</td></tr>
                        <tr><td><b>Răng miệng</b></td><td>Răng đều, sạch, không vàng ố nghiêm trọng</td></tr>
                        <tr><td><b>Tay & chân</b></td><td>Móng sạch, không hình xăm vùng cổ tay, mắt cá</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="warn-box">
                <h4>⚠️ Lý do TRƯỢT vòng này</h4>
                <ul>
                    <li>Áo dài không vừa vặn (quá chật hoặc rộng)</li>
                    <li>Tóc không gọn gàng, tóc rối, tóc nhuộm màu lạ</li>
                    <li>Make-up quá đậm hoặc quá nhạt</li>
                    <li>Đi lại thiếu tự tin, mắt nhìn xuống đất</li>
                    <li>Thần thái uể oải, không nụ cười</li>
                </ul>
            </div>
            <div class="tip-box">
                <h4>💡 Mẹo ORI ACADEMY — Vòng áo dài</h4>
                <ul>
                    <li>Áo dài: chọn màu trang nhã (trắng, pastel, vàng nhạt), vừa body, ủi phẳng</li>
                    <li>Giày cao gót 5-7cm, đế vững, luyện đi trước ít nhất 1 tuần</li>
                    <li>Tóc búi gọn: dùng kẹp & gel cố định, không để tóc mai rối</li>
                    <li>Make-up: nền sáng tự nhiên, son hồng/cam nhẹ, highlight nhẹ xương gò má</li>
                    <li>Tập đi catwalk trước gương MỖI NGÀY: thẳng lưng, ngẩng đầu, cười tươi</li>
                    <li>Nụ cười bí quyết: để đầu lưỡi chạm nhẹ phía sau hàm răng trên</li>
                </ul>
            </div>
        `
    },
    {
        num: 5,
        name: 'VÒNG KHÁM SỨC KHỎE',
        nameEn: 'Medical Check',
        icon: '🏥',
        content: `
            <div class="info-box">
                <h4>🏥 Khám sức khỏe hàng không</h4>
                <ul>
                    <li>Đây là vòng CUỐI CÙNG — chỉ ứng viên ĐẠT tất cả vòng trước mới được khám</li>
                    <li>Khám tại <b>Đoàn tiếp viên</b> — tùy đợt mà tổ chức ở <b>Hà Nội</b> hoặc <b>TP.HCM</b></li>
                    <li>Thời gian khám: <b>1 ngày</b></li>
                    <li>⚠️ <b>Nhớ nhịn ăn buổi sáng</b> để xét nghiệm máu</li>
                </ul>
            </div>
            <div class="info-box">
                <h4>🩺 Các hạng mục kiểm tra</h4>
                <table class="req-table">
                    <thead><tr><th>Hạng mục</th><th>Chi tiết</th></tr></thead>
                    <tbody>
                        <tr><td><b>Tim mạch</b></td><td>Điện tâm đồ, huyết áp bình thường</td></tr>
                        <tr><td><b>Thị lực</b></td><td>Không cận quá 3 độ, không lé, không mù màu</td></tr>
                        <tr><td><b>Thính lực</b></td><td>Nghe bình thường cả 2 tai</td></tr>
                        <tr><td><b>Nội khoa</b></td><td>Nội soi, X-quang ngực, siêu âm bụng</td></tr>
                        <tr><td><b>Xét nghiệm</b></td><td>Máu (công thức máu, đường huyết), nước tiểu</td></tr>
                        <tr><td><b>Tai mũi họng</b></td><td>Kiểm tra viêm xoang, viêm tai, polyp</td></tr>
                        <tr><td><b>Nha khoa</b></td><td>Răng miệng tổng quát</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="warn-box">
                <h4>⚠️ Lý do KHÔNG ĐẠT vòng khám</h4>
                <ul>
                    <li>Cận thị quá 3 độ (phẫu thuật Lasik chưa đủ 6 tháng)</li>
                    <li>Bệnh tim mạch, huyết áp cao/thấp bất thường</li>
                    <li>Viêm xoang nặng, polyp mũi</li>
                    <li>Đường huyết bất thường, thiếu máu nặng</li>
                </ul>
            </div>
            <div class="tip-box">
                <h4>💡 Mẹo ORI ACADEMY — Chuẩn bị khám</h4>
                <ul>
                    <li>KHÔNG uống rượu bia, cà phê trước khi khám 3 ngày</li>
                    <li>Ngủ đủ giấc đêm trước khám (7-8 tiếng)</li>
                    <li>Nhịn ăn sáng nếu có xét nghiệm máu</li>
                    <li>Nếu đeo kính cận: đem theo kính và toa thuốc</li>
                    <li>Giữ tinh thần thoải mái — huyết áp thường tăng khi căng thẳng</li>
                </ul>
            </div>
        `
    }
];

// ==================== QUESTION BANK ====================
const QUESTIONS = [
    // Giới thiệu bản thân
    {
        cat: 'intro', catLabel: 'Giới thiệu', color: '#059669',
        q: 'Tell me about yourself.',
        guide: '✅ Mở đầu: tên, tuổi, quê. Giữa: học vấn, kinh nghiệm dịch vụ. Kết: tại sao muốn làm TVHK VNA.\n\n🎯 Mẫu: "My name is [Tên]. I graduated from [Trường] with a degree in [Ngành]. I have [X] years of experience in customer service at [Nơi]. My passion for service and travel inspired me to pursue a career as cabin crew with Vietnam Airlines."'
    },
    {
        cat: 'intro', catLabel: 'Giới thiệu', color: '#059669',
        q: 'What are your strengths and weaknesses?',
        guide: '✅ Strengths: patience, teamwork, communication, attention to detail.\n✅ Weakness: chọn 1 điểm yếu KHÔNG ảnh hưởng nghề + nói cách bạn cải thiện.\n\n🎯 Mẫu: "My strength is my ability to stay calm under pressure. In my previous job, I often handled customer complaints with patience. My weakness is that I sometimes focus too much on details, but I\'m learning to prioritize better."'
    },

    // Motivation
    {
        cat: 'motivation', catLabel: 'Động lực', color: '#2563eb',
        q: 'Why do you want to become a cabin crew?',
        guide: '✅ Nói đam mê phục vụ, yêu thích du lịch, giao tiếp đa văn hóa.\n❌ KHÔNG nói: vì lương cao, vì được đi du lịch free.\n\n🎯 Mẫu: "I have always been passionate about providing excellent service and connecting with people from different cultures. Being a cabin crew member allows me to combine my love of travel with my dedication to customer care."'
    },
    {
        cat: 'motivation', catLabel: 'Động lực', color: '#2563eb',
        q: 'Why Vietnam Airlines specifically?',
        guide: '✅ Nhắc đến: 4-star airline, áo dài truyền thống, SkyTeam, "Reaching Further", niềm tự hào quốc gia.\n\n🎯 Mẫu: "Vietnam Airlines is a 4-star airline and a proud member of SkyTeam. I admire the way VNA represents Vietnamese culture through the iconic áo dài uniform and its commitment to \'Reaching Further\'. I want to be part of a team that carries the beauty of Vietnam to the world."'
    },
    {
        cat: 'motivation', catLabel: 'Động lực', color: '#2563eb',
        q: 'What do you know about Vietnam Airlines?',
        guide: '✅ Thành lập 1956, 4-star Skytrax, SkyTeam, "Reaching Further", hub HAN/SGN, ~100 máy bay (B787/A350/A321), 50+ đường bay quốc tế.\n\n🎯 Tip: HỌC THUỘC bảng kiến thức VNA ở Vòng 3.'
    },

    // Tình huống
    {
        cat: 'situational', catLabel: 'Tình huống', color: '#dc2626',
        q: 'How would you handle an angry passenger?',
        guide: '✅ Dùng công thức LEAPS:\nListen → Empathize → Apologize → Problem-solve → Summarize\n\n🎯 Mẫu: "First, I would listen carefully to understand their concern. Then I would empathize by saying \'I understand how frustrating this must be.\' I would apologize for the inconvenience and find a suitable solution. Finally, I would follow up to make sure the passenger is satisfied."'
    },
    {
        cat: 'situational', catLabel: 'Tình huống', color: '#dc2626',
        q: 'A passenger refuses to fasten their seatbelt. What would you do?',
        guide: '✅ Bước 1: Nhẹ nhàng giải thích lý do an toàn.\nBước 2: Nếu từ chối → nhắc lại quy định hàng không.\nBước 3: Nếu vẫn từ chối → báo Purser/Cabin Manager.\n\n🎯 Mẫu: "I would politely explain that it is a safety regulation required by aviation law. If the passenger still refuses, I would escalate the matter to my senior crew member while remaining calm and professional."'
    },
    {
        cat: 'situational', catLabel: 'Tình huống', color: '#dc2626',
        q: 'What would you do if a passenger had a medical emergency?',
        guide: '✅ Bước 1: Đánh giá tình trạng, hỏi triệu chứng.\nBước 2: Thông báo Purser, lấy first aid kit.\nBước 3: Hỏi "Is there a doctor on board?" qua PA.\nBước 4: Liên hệ y tế mặt đất nếu cần.\n\n🎯 Key phrase: "Ladies and gentlemen, if there is a medical professional on board, could you please identify yourself to a crew member."'
    },
    {
        cat: 'situational', catLabel: 'Tình huống', color: '#dc2626',
        q: 'How would you deal with a conflict between two passengers?',
        guide: '✅ Tách 2 hành khách, nói chuyện riêng từng người.\nĐề xuất đổi chỗ ngồi nếu có thể.\nGiữ thái độ trung lập, KHÔNG đứng về bên nào.\n\n🎯 Mẫu: "I would separately speak to each passenger to understand the issue. Then I would try to suggest a reasonable solution, such as reseating one of them. If necessary, I would involve my senior crew."'
    },
    {
        cat: 'situational', catLabel: 'Tình huống', color: '#dc2626',
        q: 'A VIP passenger makes an unreasonable request. How do you respond?',
        guide: '✅ Lắng nghe → giải thích giới hạn dịch vụ → đề xuất thay thế.\nKHÔNG hứa những gì không thể.\nBáo purser nếu cần.\n\n🎯 Mẫu: "I would listen to the request attentively and acknowledge the passenger\'s importance. If the request is beyond our capability, I would politely explain the limitations while offering the best alternative available."'
    },

    // Teamwork
    {
        cat: 'teamwork', catLabel: 'Teamwork', color: '#7c3aed',
        q: 'Tell me about a time you worked well in a team.',
        guide: '✅ Dùng phương pháp STAR:\nSituation: Mô tả tình huống.\nTask: Nhiệm vụ của bạn.\nAction: Bạn đã làm gì.\nResult: Kết quả tốt.\n\n🎯 Tip: Chọn ví dụ liên quan dịch vụ khách hàng, sự kiện nhóm, hoặc tình nguyện.'
    },
    {
        cat: 'teamwork', catLabel: 'Teamwork', color: '#7c3aed',
        q: 'How do you handle disagreements with colleagues?',
        guide: '✅ Key: lắng nghe, tôn trọng, tìm điểm chung, không tranh cãi.\n\n🎯 Mẫu: "I believe in open communication. If there is a disagreement, I listen to my colleague\'s perspective, share my own, and together find a solution that benefits both the team and the passengers."'
    },

    // Cá nhân
    {
        cat: 'personal', catLabel: 'Cá nhân', color: '#d97706',
        q: 'Where do you see yourself in 5 years?',
        guide: '✅ Nói muốn phát triển tại VNA: từ cabin crew → Senior → Purser.\n\n🎯 Mẫu: "In 5 years, I see myself as an experienced senior cabin crew or purser at Vietnam Airlines, mentoring new crew members and contributing to the airline\'s service excellence."'
    },
    {
        cat: 'personal', catLabel: 'Cá nhân', color: '#d97706',
        q: 'Are you willing to be based in Hanoi or Ho Chi Minh City?',
        guide: '✅ Trả lời LINH HOẠT — sẵn sàng đi bất cứ đâu.\n\n🎯 Mẫu: "Yes, I am flexible and willing to be based in whichever city Vietnam Airlines requires. I believe adapting to new environments is an essential quality for a cabin crew member."'
    },
    {
        cat: 'personal', catLabel: 'Cá nhân', color: '#d97706',
        q: 'How do you handle being away from home for long periods?',
        guide: '✅ Nói đã chuẩn bị tinh thần, gia đình ủng hộ, biết cách giữ liên lạc.\n\n🎯 Mẫu: "My family fully supports my career choice. I stay connected with them through video calls. I also enjoy exploring new destinations during layovers, which makes the time away enriching."'
    },
];

// ==================== RUBRIC ====================
const RUBRIC = [
    { label: 'Ngoại hình & Phong thái', desc: 'Chiều cao, cân nặng, dáng đi, make-up, trang phục áo dài', score: 20, color: '#059669' },
    { label: 'Giao tiếp tiếng Anh', desc: 'Phát âm, ngữ pháp, từ vựng, fluency', score: 25, color: '#2563eb' },
    { label: 'Xử lý tình huống', desc: 'Phản xạ, logic, thái độ phục vụ, LEAPS method', score: 20, color: '#dc2626' },
    { label: 'Kiến thức về VNA', desc: 'Slogan, lịch sử, đội bay, SkyTeam, giá trị cốt lõi', score: 10, color: '#7c3aed' },
    { label: 'Tinh thần phục vụ', desc: 'Thái độ, nụ cười, sự chân thành, đam mê', score: 15, color: '#d97706' },
    { label: 'Teamwork & Thái độ', desc: 'Kỹ năng nhóm, linh hoạt, sẵn sàng học hỏi', score: 10, color: '#6b7280' },
];

// ==================== APP ====================
const contentArea = document.getElementById('contentArea');
const navTabs = document.getElementById('navTabs');

function renderTab(tab) {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    if (tab === 'process') renderProcess();
    else if (tab === 'questions') renderQuestions();
    else if (tab === 'rubric') renderRubric();
    else if (tab === 'requirements') renderRequirements();
}

// ==================== PROCESS ====================
function renderProcess() {
    contentArea.innerHTML = STEPS.map(s => `
        <div class="step-card" id="step-${s.num}">
            <div class="step-header" onclick="toggleStep(${s.num})">
                <div class="step-num">${s.num}</div>
                <div class="step-info">
                    <div class="step-name">${s.icon} ${s.name}</div>
                    <div class="step-name-en">${s.nameEn}</div>
                </div>
                <div class="step-toggle">▼</div>
            </div>
            <div class="step-body">${s.content}</div>
        </div>
    `).join('');
    // Auto-open first step
    document.getElementById('step-1')?.classList.add('open');
}

function toggleStep(num) {
    const card = document.getElementById(`step-${num}`);
    if (card) card.classList.toggle('open');
}

// ==================== QUESTIONS ====================
function renderQuestions() {
    const cats = [...new Set(QUESTIONS.map(q => q.cat))];
    const filterBtns = `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;">
        <button class="nav-tab active" style="border-radius:8px;flex:none;padding:8px 16px;" onclick="filterQ('all', this)">Tất cả (${QUESTIONS.length})</button>
        ${cats.map(c => {
        const info = QUESTIONS.find(q => q.cat === c);
        const count = QUESTIONS.filter(q => q.cat === c).length;
        return `<button class="nav-tab" style="border-radius:8px;flex:none;padding:8px 16px;border-left:3px solid ${info.color}" onclick="filterQ('${c}', this)">${info.catLabel} (${count})</button>`;
    }).join('')}
    </div>`;

    contentArea.innerHTML = `
        <div class="step-card" style="border-left-color:var(--vna-gold)">
            <div style="padding:20px 24px;">
                <h3 style="color:var(--vna-navy);margin-bottom:6px;">🎤 Ngân hàng câu hỏi phỏng vấn</h3>
                <p style="font-size:0.84rem;color:var(--text-muted);">Nhấn vào câu hỏi để xem hướng dẫn trả lời từ ORI ACADEMY</p>
            </div>
        </div>
        ${filterBtns}
        <div id="questionList">
            ${QUESTIONS.map((q, i) => renderQuestionCard(q, i)).join('')}
        </div>
    `;
}

function renderQuestionCard(q, i) {
    return `<div class="question-card" data-cat="${q.cat}" onclick="this.classList.toggle('show-answer')">
        <div class="q-category" style="background:${q.color}15;color:${q.color}">${q.catLabel}</div>
        <div class="q-text">${i + 1}. ${q.q}</div>
        <div class="q-guide">${q.guide}</div>
    </div>`;
}

function filterQ(cat, btn) {
    document.querySelectorAll('#questionList .question-card').forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
    });
    btn.parentElement.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// ==================== RUBRIC ====================
function renderRubric() {
    contentArea.innerHTML = `
        <div class="step-card" style="border-left-color:var(--vna-gold)">
            <div style="padding:20px 24px;">
                <h3 style="color:var(--vna-navy);margin-bottom:6px;">📊 Rubric chấm điểm phỏng vấn</h3>
                <p style="font-size:0.84rem;color:var(--text-muted);">Tổng điểm tối đa: 100 — Cần đạt ≥ 70 để PASS</p>
            </div>
        </div>
        <div style="margin-bottom:20px;">
            ${RUBRIC.map(r => `
                <div class="rubric-item">
                    <div class="rubric-score" style="background:${r.color}">${r.score}</div>
                    <div class="rubric-detail">
                        <div class="rubric-label">${r.label}</div>
                        <div class="rubric-desc">${r.desc}</div>
                    </div>
                    <div style="width:60px;">
                        <div style="height:6px;background:#e5e7eb;border-radius:3px;overflow:hidden;">
                            <div style="width:${r.score}%;height:100%;background:${r.color};border-radius:3px;"></div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="tip-box">
            <h4>💡 Lưu ý từ ORI ACADEMY</h4>
            <ul>
                <li>Tiếng Anh chiếm tỷ trọng CAO NHẤT (25%) — luyện TOEIC + speaking mỗi ngày</li>
                <li>Ngoại hình + Phong thái (20%) — tập catwalk, make-up, áo dài THƯỜNG XUYÊN</li>
                <li>Dù giỏi tiếng Anh, nếu thiếu tinh thần phục vụ = TRƯỢT</li>
                <li>Kiến thức VNA chỉ 10% nhưng nếu KHÔNG biết = ấn tượng rất xấu</li>
            </ul>
        </div>
    `;
}

// ==================== REQUIREMENTS ====================
function renderRequirements() {
    contentArea.innerHTML = `
        <div class="step-card" style="border-left-color:var(--vna-gold)">
            <div style="padding:20px 24px;">
                <h3 style="color:var(--vna-navy);margin-bottom:6px;">📋 Tiêu chuẩn tuyển dụng VNA</h3>
                <p style="font-size:0.84rem;color:var(--text-muted);">Yêu cầu chính thức dành cho ứng viên tiếp viên Vietnam Airlines</p>
            </div>
        </div>
        <div class="info-box" style="background:white;border:1px solid #e5e7eb;border-radius:16px;padding:20px 24px;margin-bottom:16px;">
            <table class="req-table">
                <thead><tr><th>Tiêu chí</th><th>Nữ</th><th>Nam</th></tr></thead>
                <tbody>
                    <tr><td><b>Tuổi</b></td><td colspan="2">18 — 30 tuổi</td></tr>
                    <tr><td><b>Chiều cao</b></td><td>≥ 160 cm</td><td>≥ 170 cm</td></tr>
                    <tr><td><b>BMI</b></td><td colspan="2">18.5 — 22.9</td></tr>
                    <tr><td><b>Tầm với tay</b></td><td colspan="2">≥ 212 cm (kiễng chân)</td></tr>
                    <tr><td><b>Thị lực</b></td><td colspan="2">Không cận > 3 độ, không lé, không mù màu</td></tr>
                    <tr><td><b>Da</b></td><td colspan="2">Không sẹo, không hình xăm lộ ra ngoài</td></tr>
                    <tr><td><b>Học vấn</b></td><td colspan="2">Tốt nghiệp THPT trở lên (ưu tiên CĐ/ĐH)</td></tr>
                    <tr><td><b>Tiếng Anh</b></td><td colspan="2">TOEIC ≥ 600 / IELTS ≥ 5.5 (còn hạn 2 năm)</td></tr>
                    <tr><td><b>Ngoại ngữ 2</b></td><td colspan="2">Ưu tiên: Trung, Nhật, Hàn, Pháp, Đức, Nga</td></tr>
                    <tr><td><b>Quốc tịch</b></td><td colspan="2">Việt Nam (hoặc có quyền lao động tại VN)</td></tr>
                    <tr><td><b>Lý lịch</b></td><td colspan="2">Không tiền án, lý lịch tư pháp rõ ràng</td></tr>
                    <tr><td><b>Sức khỏe</b></td><td colspan="2">Đạt tiêu chuẩn sức khỏe hàng không CAAV</td></tr>
                </tbody>
            </table>
        </div>
        <div class="tip-box">
            <h4>💡 Mẹo ORI ACADEMY — Chuẩn bị hồ sơ</h4>
            <ul>
                <li>Thi TOEIC ngay BÂY GIỜ nếu chưa có — chứng chỉ có hạn 2 năm</li>
                <li>BMI = cân nặng (kg) ÷ [chiều cao (m)]² — kiểm tra trước 1 tháng</li>
                <li>Ảnh CV: chụp studio, nền trắng, vest hoặc áo dài, cười tự nhiên</li>
                <li>Nếu có ngoại ngữ 2 → highlight trong CV = ƯU THẾ RẤT LỚN</li>
            </ul>
        </div>
    `;
}

// ==================== NAV EVENT ====================
navTabs.addEventListener('click', e => {
    const tab = e.target.closest('.nav-tab');
    if (tab) renderTab(tab.dataset.tab);
});

// ==================== TOAST ====================
function showToast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
}

// ==================== INIT ====================
renderTab('process');
showToast('✈️ Chào mừng đến VNA Interview Prep!');
