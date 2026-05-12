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
    gradient: 'from-[#111] to-[#333]',
  },
  {
    name: 'Vũ Thanh Hằng',
    role: 'Phó Giám đốc Truyền thông',
    gradient: 'from-[#222] to-[#444]',
  },
  {
    name: 'Hoàng Đức Thịnh',
    role: 'Giám đốc Kỹ thuật số',
    gradient: 'from-[#1a1a1a] to-[#3a3a3a]',
  },
  {
    name: 'Bùi Ngọc Linh',
    role: 'Giám đốc Chuỗi cung ứng',
    gradient: 'from-[#2a2a2a] to-[#4a4a4a]',
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
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#111] py-24 sm:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-6">
            Về <span className="text-[#FF6B00]">Hutruong Store</span>
          </h1>
          <p className="text-lg sm:text-xl font-light text-[#999] leading-relaxed max-w-2xl mx-auto">
            Nơi đam mê thể thao được thắp sáng và mỗi bước chân đều tạo nên cảm hứng
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-[#111] mb-10 text-center uppercase tracking-tight">
            Câu Chuyện Của Chúng Tôi
          </h2>
          <div className="space-y-8 text-[#555] text-lg font-light leading-[1.8]">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="border border-[#E5E5E5] rounded-none p-10 text-center hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-14 h-14 border border-[#E5E5E5] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-[#111]" />
                  </div>
                  <h3 className="text-xl font-black text-[#111] uppercase tracking-wide mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#555] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center"
                >
                  <div className="w-12 h-12 border border-[#E5E5E5] flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-[#111]" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-[#111] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#999] text-sm uppercase tracking-widest">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#111] mb-4 uppercase tracking-tight">
            Đội Ngũ Của Chúng Tôi
          </h2>
          <p className="text-[#999] text-lg font-light max-w-2xl mx-auto">
            Những con người tận tâm đứng sau thành công của Hutruong Store
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="text-center group"
            >
              <div
                className={`w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-4xl sm:text-5xl font-light mb-5 group-hover:scale-105 transition-transform duration-300`}
              >
                {member.name.charAt(0)}
              </div>
              <h3 className="font-medium text-[#111] text-lg">
                {member.name}
              </h3>
              <p className="text-[#999] text-sm mt-1 font-light">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#111] mb-4 uppercase tracking-tight">
              Đối Tác Thương Hiệu
            </h2>
            <p className="text-[#999] text-lg font-light">
              Hợp tác với những thương hiệu thể thao hàng đầu thế giới
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#E5E5E5]">
            {brandPartners.map((brand) => (
              <div
                key={brand}
                className="bg-white p-10 flex items-center justify-center hover:bg-[#FAFAFA] transition-colors duration-300 group"
              >
                <span className="text-lg font-light text-[#999] group-hover:text-[#111] transition-colors duration-300 tracking-wide">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 uppercase tracking-tight">
            Bạn Đã Sẵn Sàng Bứt Phá?
          </h2>
          <p className="text-[#999] text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed">
            Khám phá bộ sưu tập đồ thể thao chính hãng mới nhất, được tuyển chọn dành riêng cho bạn. Nâng tầm phong cách và hiệu suất ngay bây giờ!
          </p>
          <Link
            href="/"
            className="inline-block px-10 py-4 border border-white text-white font-medium text-sm uppercase tracking-widest hover:bg-white hover:text-[#111] transition-all duration-300"
          >
            Bắt Đầu Mua Sắm
          </Link>
        </div>
      </section>
    </main>
  );
}
