import Link from 'next/link';
import { Target, Eye, Heart, Award, Users, Package, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Package, value: '10,000+', label: 'Sản phẩm' },
  { icon: Users, value: '50,000+', label: 'Khách hàng' },
  { icon: Award, value: '100+', label: 'Thương hiệu' },
  { icon: TrendingUp, value: '63', label: 'Tỉnh thành' },
];

const values = [
  {
    icon: Target,
    title: 'Sứ mệnh',
    description:
      'Kiến tạo một cộng đồng thể thao năng động, nơi mỗi vận động viên đều được trang bị những sản phẩm đỉnh cao để bứt phá mọi kỷ lục cá nhân.',
  },
  {
    icon: Eye,
    title: 'Tầm nhìn',
    description:
      'Dẫn đầu xu hướng bán lẻ thể thao trực tuyến tại Việt Nam, xây dựng hệ sinh thái toàn diện từ trang phục, dụng cụ đến kiến thức luyện tập cho mọi bộ môn.',
  },
  {
    icon: Heart,
    title: 'Giá trị',
    description:
      'Minh bạch - Sáng tạo - Đồng hành. Mỗi đơn hàng là một lời hứa về sự chân thành, từ khâu chọn lọc nguồn hàng đến tận tay người sử dụng cuối cùng.',
  },
];

const teamMembers = [
  {
    name: 'Đặng Quốc Huy',
    role: 'Tổng Giám đốc',
    gradient: 'from-[#FF6B00] to-[#E55A00]',
  },
  {
    name: 'Vũ Thanh Hằng',
    role: 'Phó Giám đốc Truyền thông',
    gradient: 'from-[#00D4FF] to-[#0ea5e9]',
  },
  {
    name: 'Hoàng Đức Thịnh',
    role: 'Giám đốc Kỹ thuật số',
    gradient: 'from-[#1E293B] to-[#334155]',
  },
  {
    name: 'Bùi Ngọc Linh',
    role: 'Giám đốc Chuỗi cung ứng',
    gradient: 'from-[#8b5cf6] to-[#6d28d9]',
  },
];

const brandPartners = [
  'Nike',
  'Adidas',
  'Puma',
  'Under Armour',
  'New Balance',
  'Asics',
  'Yonex',
  'Li-Ning',
];

export default function GioiThieuPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#1E293B] py-20 sm:py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#FF6B00] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00D4FF] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Về <span className="text-[#FF6B00]">Hutruong Store</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 leading-relaxed animate-fade-in-up">
            Nơi đam mê thể thao được thắp sáng và mỗi bước chân đều tạo nên cảm hứng
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-8 text-center">
            Câu Chuyện Của Chúng Tôi
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Ra đời vào năm 2020 giữa lòng thị xã An Khê, Gia Lai, Hutruong Store khởi đầu với một ước mơ
              giản dị: biến thể thao trở thành phong cách sống của mọi gia đình Việt. Từ gian hàng đầu tiên
              chỉ vỏn vẹn vài kệ trưng bày, chúng tôi đã nhanh chóng chinh phục lòng tin khách hàng nhờ
              sự tận tụy và cam kết chỉ bán hàng chính hãng.
            </p>
            <p>
              Sau hơn 5 năm không ngừng đổi mới, Hutruong Store hiện phủ sóng dịch vụ đến toàn bộ 63 tỉnh thành
              trên cả nước, hợp tác chiến lược với hơn 100 thương hiệu quốc tế và phục vụ cộng đồng hơn
              50.000 khách hàng thân thiết. Mỗi giai đoạn phát triển đều ghi dấu bằng sự lắng nghe và thấu
              hiểu nhu cầu thực sự của người chơi thể thao.
            </p>
            <p>
              Triết lý &ldquo;Bền bỉ trong từng đường may&rdquo; không chỉ nói về sản phẩm mà còn phản ánh
              tinh thần làm việc của đội ngũ Hutruong Store. Chúng tôi kiểm định nghiêm ngặt mọi lô hàng,
              đảm bảo 100% chính hãng, để mỗi khách hàng khi mở hộp đều cảm nhận được sự khác biệt
              mà chỉ đồ thật mới mang lại.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in-up text-center"
                >
                  <div className="w-16 h-16 bg-[#FF6B00]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#FF6B00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FF6B00] to-[#E55A00]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center text-white animate-fade-in-up"
                >
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-lg">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
            Đội Ngũ Của Chúng Tôi
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Những con người tận tâm đứng sau thành công của Hutruong Store
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="text-center animate-fade-in-up group"
            >
              <div
                className={`w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-4xl sm:text-5xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg`}
              >
                {member.name.charAt(0)}
              </div>
              <h3 className="font-bold text-[#1E293B] text-lg">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Đối Tác Thương Hiệu
            </h2>
            <p className="text-gray-600 text-lg">
              Hợp tác với những thương hiệu thể thao hàng đầu thế giới
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {brandPartners.map((brand) => (
              <div
                key={brand}
                className="bg-white rounded-2xl p-8 flex items-center justify-center border border-gray-100 hover:shadow-lg hover:border-[#FF6B00]/20 transition-all duration-300 animate-fade-in-up"
              >
                <span className="text-xl font-bold text-gray-400 group-hover:text-[#1E293B]">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-6">
            Bạn Đã Sẵn Sàng Bứt Phá?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Khám phá bộ sưu tập đồ thể thao chính hãng mới nhất, được tuyển chọn dành riêng cho bạn. Nâng tầm phong cách và hiệu suất ngay bây giờ!
          </p>
          <Link
            href="/"
            className="inline-block px-10 py-4 bg-[#FF6B00] text-white font-semibold rounded-xl text-lg hover:bg-[#E55A00] transition-colors hover:scale-105 transform duration-300 shadow-lg shadow-[#FF6B00]/30"
          >
            Bắt Đầu Mua Sắm
          </Link>
        </div>
      </section>
    </main>
  );
}