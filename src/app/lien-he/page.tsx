import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Địa chỉ',
    content: 'Tổ 1, Phường An Khê, Tỉnh Gia Lai',
  },
  {
    icon: Phone,
    title: 'Điện thoại',
    content: '0931 619 177',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'support@hutruongstore.vn',
  },
  {
    icon: Clock,
    title: 'Giờ làm việc',
    content: 'Thứ 2 - Chủ nhật: 8:00 - 22:00',
  },
];

const faqs = [
  {
    question: 'Hutruong Store cam kết gì về tính chính hãng của sản phẩm?',
    answer:
      'Mỗi sản phẩm tại Hutruong Store đều được nhập trực tiếp từ nhà phân phối ủy quyền và đi kèm hóa đơn chứng minh nguồn gốc. Bạn hoàn toàn yên tâm về chất lượng — 100% hàng authentic, nói không với hàng nhái.',
  },
  {
    question: 'Tôi có thể thanh toán bằng những hình thức nào?',
    answer:
      'Hutruong Store hỗ trợ đa dạng phương thức thanh toán: tiền mặt khi nhận hàng (COD), chuyển khoản qua ngân hàng, quét mã QR qua các ví MoMo, ZaloPay, VNPay, cùng thanh toán bằng thẻ Visa/Mastercard quốc tế.',
  },
  {
    question: 'Chính sách vận chuyển và thời gian nhận hàng ra sao?',
    answer:
      'Đơn hàng được xử lý và chuyển đi trong vòng 24 giờ. Khu vực nội thành nhận hàng sau 1-2 ngày, các tỉnh thành khác từ 3-5 ngày. Miễn phí giao hàng toàn quốc cho đơn từ 500.000đ trở lên.',
  },
  {
    question: 'Nếu sản phẩm không vừa ý, tôi có được hoàn trả không?',
    answer:
      'Chắc chắn rồi! Bạn có 30 ngày để đổi size, đổi mẫu hoặc hoàn tiền toàn bộ. Điều kiện duy nhất là sản phẩm chưa qua sử dụng và còn nguyên nhãn mác. Chi phí vận chuyển đổi trả do Hutruong Store chi trả hoàn toàn.',
  },
  {
    question: 'Chế độ bảo hành sản phẩm tại Hutruong Store như thế nào?',
    answer:
      'Toàn bộ sản phẩm đều được bảo hành chính hãng từ 6 đến 12 tháng tùy theo danh mục. Giày thể thao được bảo hành keo đế và đường chỉ, quần áo bảo hành lỗi sản xuất. Quy trình bảo hành nhanh gọn, chỉ cần gửi ảnh sản phẩm qua Zalo hoặc hotline.',
  },
];

export default function LienHePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF6B00] to-[#E55A00] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">
            Kết Nối Cùng Hutruong Store
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto animate-fade-in-up">
            Đội ngũ tư vấn chuyên nghiệp của chúng tôi luôn đồng hành cùng bạn. Đừng ngần ngại chia sẻ mọi thắc mắc hoặc góp ý — chúng tôi phản hồi trong thời gian nhanh nhất.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1E293B] mb-6">
                Để lại lời nhắn tại đây
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                    Họ tên
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập họ tên của bạn"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B00] transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B00] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      placeholder="0931 619 177"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B00] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                    Chủ đề
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B00] transition-colors text-gray-600">
                    <option value="">Chọn chủ đề</option>
                    <option value="order">Đơn hàng</option>
                    <option value="product">Sản phẩm</option>
                    <option value="return">Đổi trả</option>
                    <option value="cooperation">Hợp tác</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                    Nội dung
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Nhập nội dung tin nhắn..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#FF6B00] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-[#FF6B00] text-white font-semibold rounded-xl hover:bg-[#E55A00] transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E293B] mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mb-16 animate-fade-in-up">
          <div className="bg-gray-200 rounded-2xl h-80 flex flex-col items-center justify-center">
            <MapPin className="w-16 h-16 text-gray-400 mb-4" />
            <p className="text-gray-500 font-medium text-lg">Bản đồ cửa hàng</p>
            <p className="text-gray-400 text-sm mt-1">Tổ 1, Phường An Khê, Tỉnh Gia Lai</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Giải Đáp Mọi Thắc Mắc
            </h2>
            <p className="text-gray-600 text-lg">
              Những điều bạn cần biết trước khi mua sắm tại Hutruong Store
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-[#1E293B] text-lg mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}