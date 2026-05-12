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

      {/* Danh Muc San Pham */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] uppercase tracking-wide mb-3">
            Mua Sắm Theo Danh Mục
          </h2>
          <div className="w-12 h-[1px] bg-[#111111] mb-4" />
          <p className="text-base font-light text-[#999999] max-w-xl">
            Lựa chọn trang phục và thiết bị phù hợp nhất cho bộ môn bạn yêu thích
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const count = products.filter(
              (p) => p.category === cat.slug
            ).length;
            return (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/3] bg-[#F0F0F0] overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span className="text-3xl mb-3">{cat.icon}</span>
                    <h3 className="text-2xl font-bold text-white mb-1.5 uppercase tracking-wide">
                      {cat.name}
                    </h3>
                    <p className="text-white/70 text-sm font-light mb-4 leading-relaxed">
                      {cat.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-white/60 uppercase tracking-widest">
                        {count} san pham
                      </span>
                      <span className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 text-lg">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* San Pham Noi Bat */}
      {featuredProducts.length > 0 && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#FAFAFA]">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] uppercase tracking-wide mb-3">
              Lựa Chọn Hàng Đầu
            </h2>
            <div className="w-12 h-[1px] bg-[#111111] mb-4" />
            <p className="text-base font-light text-[#999999]">
              Những sản phẩm hot nhất đang được săn đón nhiều nhất hiện nay
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* San Pham Ban Chay */}
      {bestSellerProducts.length > 0 && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] uppercase tracking-wide mb-3">
              Xu Hướng Bán Chạy
            </h2>
            <div className="w-12 h-[1px] bg-[#111111] mb-4" />
            <p className="text-base font-light text-[#999999]">
              Hàng ngàn khách hàng đã tin tưởng chọn mua trong tháng này
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {bestSellerProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Ly Do Khach Hang Tin Tuong */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#FAFAFA]">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] uppercase tracking-wide mb-3">
            Lý Do Khách Hàng Tin Tưởng
          </h2>
          <div className="w-12 h-[1px] bg-[#111111] mb-4" />
          <p className="text-base font-light text-[#999999] max-w-xl">
            Hơn 50.000 khách hàng đã lựa chọn Hutruong Store làm điểm đến mua sắm thể thao
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#E5E5E5]">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`p-8 bg-white hover:bg-[#FAFAFA] transition-colors duration-300 ${
                  idx < features.length - 1 ? 'border-b sm:border-b lg:border-b-0 lg:border-r border-[#E5E5E5]' : ''
                }`}
              >
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#111111]" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cac Mon The Thao */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] uppercase tracking-wide mb-3">
            Khám Phá Theo Bộ Môn
          </h2>
          <div className="w-12 h-[1px] bg-[#111111] mb-4" />
          <p className="text-base font-light text-[#999999]">
            Từ sân cỏ đến phòng tập, chúng tôi phục vụ tất cả đam mê của bạn
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {sports.map((sport) => {
            const sportProducts = products.filter((p) => p.sport === sport);
            return (
              <Link
                key={sport}
                href={`/ao-the-thao?sport=${encodeURIComponent(sport)}`}
                className="group"
              >
                <div className="flex items-center gap-2.5 px-5 py-3 border border-[#E5E5E5] bg-white hover:border-[#111111] transition-colors duration-300">
                  <span className="text-lg">
                    {sportIcons[sport] || '🏅'}
                  </span>
                  <span className="font-medium text-[#111111] text-sm">
                    {sport}
                  </span>
                  <span className="text-xs text-[#999999] ml-1">
                    {sportProducts.length}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-[#111111] p-12 sm:p-20">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide mb-4">
              Nhận Ưu Đãi Sớm Nhất
            </h2>
            <p className="text-white/50 text-base font-light mb-10 leading-relaxed">
              Đăng ký ngay để không bỏ lỡ flash sale, voucher giảm giá và bộ sưu tập mới nhất mỗi tuần.
            </p>
            <form className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                className="flex-1 px-6 py-4 rounded-none text-[#111111] bg-white placeholder-[#999999] text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="px-10 py-4 bg-[#FF6B00] text-white font-medium rounded-none uppercase tracking-widest text-sm hover:bg-[#E55A00] transition-colors duration-300 whitespace-nowrap"
              >
                Đăng Ký
              </button>
            </form>
            <p className="text-white/30 text-xs mt-6 tracking-wide">
              Cam kết không spam. Hủy đăng ký dễ dàng chỉ với một cú click.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
