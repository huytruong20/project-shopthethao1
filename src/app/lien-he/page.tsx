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
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#111] py-24 sm:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-5">
            Kết Nối Cùng <span className="text-[#FF6B00]">Hutruong Store</span>
          </h1>
          <p className="text-[#999] text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Đội ngũ tư vấn chuyên nghiệp của chúng tôi luôn đồng hành cùng bạn. Đừng ngần ngại chia sẻ mọi thắc mắc hoặc góp ý.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-black text-[#111] mb-8 uppercase tracking-tight">
              Để lại lời nhắn
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-medium text-[#999] uppercase tracking-widest mb-3">
                  Họ tên
                </label>
                <input
                  type="text"
                  placeholder="Nhập họ tên của bạn"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#E5E5E5] focus:outline-none focus:border-[#111] transition-colors text-[#111] placeholder:text-[#ccc]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-[#999] uppercase tracking-widest mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#E5E5E5] focus:outline-none focus:border-[#111] transition-colors text-[#111] placeholder:text-[#ccc]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#999] uppercase tracking-widest mb-3">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    placeholder="0931 619 177"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#E5E5E5] focus:outline-none focus:border-[#111] transition-colors text-[#111] placeholder:text-[#ccc]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#999] uppercase tracking-widest mb-3">
                  Chủ đề
                </label>
                <select className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#E5E5E5] focus:outline-none focus:border-[#111] transition-colors text-[#555]">
                  <option value="">Chọn chủ đề</option>
                  <option value="order">Đơn hàng</option>
                  <option value="product">Sản phẩm</option>
                  <option value="return">Đổi trả</option>
                  <option value="cooperation">Hợp tác</option>
                  <option value="other">Khác</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#999] uppercase tracking-widest mb-3">
                  Nội dung
                </label>
                <textarea
                  rows={5}
                  placeholder="Nhập nội dung tin nhắn..."
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#E5E5E5] focus:outline-none focus:border-[#111] transition-colors resize-none text-[#111] placeholder:text-[#ccc]"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-3 px-8 py-4 bg-[#111] text-white text-sm font-medium uppercase tracking-widest hover:bg-[#333] transition-colors duration-300"
              >
                <Send className="w-4 h-4" />
                Gửi tin nhắn
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-0 lg:pt-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className={`flex items-start gap-5 py-7 ${index !== contactInfo.length - 1 ? 'border-b border-[#E5E5E5]' : ''}`}
                >
                  <div className="w-11 h-11 border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#111]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-[#999] uppercase tracking-widest mb-1">{info.title}</h3>
                    <p className="text-[#111] font-light text-lg">{info.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mb-24">
          <div className="bg-[#F5F5F5] h-72 flex flex-col items-center justify-center border border-[#E5E5E5]">
            <MapPin className="w-10 h-10 text-[#999] mb-3" />
            <p className="text-[#555] font-medium text-sm uppercase tracking-widest">Bản đồ cửa hàng</p>
            <p className="text-[#999] text-sm mt-2 font-light">Tổ 1, Phường An Khê, Tỉnh Gia Lai</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#111] mb-4 uppercase tracking-tight">
              Giải Đáp Thắc Mắc
            </h2>
            <p className="text-[#999] text-lg font-light">
              Những điều bạn cần biết trước khi mua sắm tại Hutruong Store
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`py-8 ${index !== faqs.length - 1 ? 'border-b border-[#E5E5E5]' : ''}`}
              >
                <h3 className="font-medium text-[#111] text-lg mb-3 flex items-start gap-3">
                  <span className="text-[#FF6B00] text-sm font-light mt-1">{String(index + 1).padStart(2, '0')}</span>
                  {faq.question}
                </h3>
                <p className="text-[#555] font-light leading-[1.8] pl-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
