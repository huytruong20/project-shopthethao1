import Link from 'next/link';
import { Shield, Truck, RefreshCw, Headphones } from 'lucide-react';
import { products, sports } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import HeroBanner from '@/components/HeroBanner';

const categories = [
  {
    name: 'Áo Thể Thao',
    slug: 'ao-the-thao',
    gradient: 'from-[#FF6B00] to-[#E55A00]',
    icon: '👕',
    description: 'Trang phục thi đấu & tập luyện từ các thương hiệu đình đám',
  },
  {
    name: 'Quần Thể Thao',
    slug: 'quan-the-thao',
    gradient: 'from-[#1E293B] to-[#334155]',
    icon: '👖',
    description: 'Thiết kế co giãn tối đa, tự tin trên mọi sân đấu',
  },
  {
    name: 'Dụng Cụ Thể Thao',
    slug: 'dung-cu',
    gradient: 'from-[#00D4FF] to-[#0ea5e9]',
    icon: '🏸',
    description: 'Trang thiết bị chuyên nghiệp cho mọi bộ môn',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Cam Kết Chính Hãng',
    description: 'Mỗi sản phẩm đều có tem xác thực và chứng nhận nguồn gốc rõ ràng từ nhà phân phối.',
  },
  {
    icon: Truck,
    title: 'Vận Chuyển Siêu Tốc',
    description: 'Đặt hôm nay, nhận ngày mai tại nội thành. Toàn quốc chỉ 1-3 ngày, miễn phí từ 500K.',
  },
  {
    icon: RefreshCw,
    title: 'Đổi Trả Không Lo',
    description: '30 ngày hoàn trả không cần lý do. Đổi size, đổi màu hoàn toàn miễn phí.',
  },
  {
    icon: Headphones,
    title: 'Tư Vấn Tận Tâm',
    description: 'Đội ngũ chuyên gia thể thao luôn sẵn sàng giải đáp mọi thắc mắc của bạn.',
  },
];

const sportIcons: Record<string, string> = {
  'Bóng đá': '⚽',
  'Bóng rổ': '🏀',
  'Tennis': '🎾',
  'Cầu lông': '🏸',
  'Bơi lội': '🏊',
  'Chạy bộ': '🏃',
  'Yoga': '🧘',
  'Gym': '🏋️',
};

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured);
  const bestSellerProducts = products.filter((p) => p.bestSeller);

  return (
    <main>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Danh Mục Sản Phẩm */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
            Mua Sắm Theo Danh Mục
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lựa chọn trang phục và thiết bị phù hợp nhất cho bộ môn bạn yêu thích
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const count = products.filter(
              (p) => p.category === cat.slug
            ).length;
            return (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group animate-fade-in-up"
              >
                <div
                  className={`bg-gradient-to-br ${cat.gradient} rounded-2xl p-8 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                >
                  <span className="text-5xl mb-4 block">{cat.icon}</span>
                  <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-white/80 mb-4">{cat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {count} sản phẩm
                    </span>
                    <span className="text-white group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Sản Phẩm Nổi Bật */}
      {featuredProducts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Lựa Chọn Hàng Đầu
            </h2>
            <p className="text-gray-600 text-lg">
              Những sản phẩm hot nhất đang được săn đón nhiều nhất hiện nay
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="animate-fade-in-up">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sản Phẩm Bán Chạy */}
      {bestSellerProducts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#F8FAFC]">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
              Xu Hướng Bán Chạy
            </h2>
            <p className="text-gray-600 text-lg">
              Hàng ngàn khách hàng đã tin tưởng chọn mua trong tháng này
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestSellerProducts.map((product) => (
              <div key={product.id} className="animate-fade-in-up">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tại Sao Chọn Chúng Tôi */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
            Lý Do Khách Hàng Tin Tưởng
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hơn 50.000 khách hàng đã lựa chọn Hutruong Store làm điểm đến mua sắm thể thao
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="animate-fade-in-up bg-white rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl hover:border-[#FF6B00]/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#FF6B00]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#FF6B00]" />
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Các Môn Thể Thao */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#F8FAFC]">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E293B] mb-4">
            Khám Phá Theo Bộ Môn
          </h2>
          <p className="text-gray-600 text-lg">
            Từ sân cỏ đến phòng tập, chúng tôi phục vụ tất cả đam mê của bạn
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {sports.map((sport) => {
            const sportProducts = products.filter((p) => p.sport === sport);
            return (
              <Link
                key={sport}
                href={`/ao-the-thao?sport=${encodeURIComponent(sport)}`}
                className="animate-fade-in-up group"
              >
                <div className="flex flex-col items-center gap-3 bg-white rounded-2xl p-6 w-32 sm:w-36 border border-gray-100 hover:shadow-lg hover:border-[#FF6B00]/30 transition-all duration-300 group-hover:scale-105">
                  <span className="text-4xl">
                    {sportIcons[sport] || '🏅'}
                  </span>
                  <span className="font-semibold text-[#1E293B] text-sm text-center">
                    {sport}
                  </span>
                  <span className="text-xs text-gray-500">
                    {sportProducts.length} sản phẩm
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#FF6B00] to-[#E55A00] rounded-3xl p-8 sm:p-12 text-center text-white animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Nhận Ưu Đãi Sớm Nhất
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Đăng ký ngay để không bỏ lỡ flash sale, voucher giảm giá và bộ sưu tập mới nhất mỗi tuần.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="flex-1 px-6 py-3.5 rounded-xl text-[#1E293B] bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-[#1E293B] text-white font-semibold rounded-xl hover:bg-[#1E293B]/90 transition-colors duration-300 whitespace-nowrap"
            >
              Đăng Ký
            </button>
          </form>
          <p className="text-white/70 text-sm mt-4">
            Cam kết không spam. Hủy đăng ký dễ dàng chỉ với một cú click.
          </p>
        </div>
      </section>
    </main>
  );
}
