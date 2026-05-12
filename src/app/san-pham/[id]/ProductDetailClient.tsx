'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, Check } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

const categoryNames: Record<string, string> = {
  'ao-the-thao': 'Áo Thể Thao',
  'quan-the-thao': 'Quần Thể Thao',
  'dung-cu': 'Dụng Cụ Thể Thao',
};

export default function ProductDetailClient() {
  const params = useParams();
  const { addToCart } = useCart();
  const product = useMemo(
    () => products.find((p) => p.id === params.id),
    [params.id]
  );

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'policy'>('description');
  const [liked, setLiked] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Rất tiếc, sản phẩm bạn tìm không tồn tại</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#FF6B00] text-white font-semibold rounded-xl hover:bg-[#E55A00] transition-colors"
          >
            Quay lại trang chính
          </Link>
        </div>
      </main>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const relatedProducts = products
    .filter((p) => p.sport === product.sport && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedSize || undefined, selectedColor || undefined);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : i < rating
            ? 'fill-yellow-400/50 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <Link href="/" className="hover:text-[#FF6B00] transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <Link
              href={`/${product.category}`}
              className="hover:text-[#FF6B00] transition-colors"
            >
              {categoryNames[product.category] || product.category}
            </Link>
            <span>/</span>
            <span className="text-[#1E293B] font-medium truncate max-w-[200px]">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="space-y-4">
            <div
              className="w-full aspect-square rounded-2xl flex items-center justify-center text-white text-8xl font-bold shadow-lg overflow-hidden"
              style={{ background: product.image }}
            >
              {!imgError ? (
                <img
                  src={`/images/products/${product.id}.jpg`}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                product.name.charAt(0)
              )}
            </div>
          </div>

          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold rounded-full">
              {product.brand}
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">
              {product.name}
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">{renderStars(product.rating)}</div>
              <span className="text-sm text-gray-500">
                ({product.reviews} đánh giá)
              </span>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-3xl font-bold text-[#FF6B00]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {discount > 0 && (
                <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
                  -{discount}%
                </span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[#1E293B] mb-3">
                  Chọn size
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                        selectedSize === size
                          ? 'border-[#FF6B00] bg-[#FF6B00] text-white'
                          : 'border-gray-200 text-[#1E293B] hover:border-[#FF6B00]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-[#1E293B] mb-3">
                  Tông màu: {selectedColor || 'Nhấn để chọn'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedColor === color.name
                          ? 'border-[#FF6B00] scale-110'
                          : 'border-gray-200 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColor === color.name && (
                        <Check className={`w-5 h-5 ${color.hex === '#FFFFFF' || color.hex === '#fff' ? 'text-gray-800' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-sm font-semibold text-[#1E293B] mb-3">
                Chọn số lượng
              </h3>
              <div className="flex items-center gap-1 w-fit border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-semibold text-[#1E293B]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-[#FF6B00] text-white font-semibold rounded-xl hover:bg-[#E55A00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                Bỏ vào giỏ
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1E293B] text-[#1E293B] font-semibold rounded-xl hover:bg-[#1E293B] hover:text-white transition-colors">
                Đặt hàng ngay
              </button>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setLiked(!liked)}
                  className="flex items-center gap-1.5 text-gray-500 hover:text-red-500 transition-colors"
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
                  <span className="text-sm">Lưu lại</span>
                </button>
                <button className="flex items-center gap-1.5 text-gray-500 hover:text-[#00D4FF] transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm">Gửi cho bạn bè</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    product.inStock ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
                <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'Sẵn sàng giao' : 'Tạm hết'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex border-b border-gray-200 mb-8">
            {[
              { key: 'description' as const, label: 'Chi tiết sản phẩm' },
              { key: 'reviews' as const, label: 'Nhận xét từ khách hàng' },
              { key: 'policy' as const, label: 'Cam kết & Đổi trả' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? 'border-[#FF6B00] text-[#FF6B00]'
                    : 'border-transparent text-gray-500 hover:text-[#1E293B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>{product.description}</p>
                <h3 className="text-lg font-semibold text-[#1E293B]">Thông số & Phân loại</h3>
                <ul className="space-y-2">
                  <li><strong>Nhà sản xuất:</strong> {product.brand}</li>
                  <li><strong>Phân loại:</strong> {categoryNames[product.category]}</li>
                  <li><strong>Bộ môn:</strong> {product.sport}</li>
                  {product.sizes && <li><strong>Size hiện có:</strong> {product.sizes.join(', ')}</li>}
                  {product.colors && <li><strong>Tông màu:</strong> {product.colors.map(c => c.name).join(', ')}</li>}
                </ul>
                <h3 className="text-lg font-semibold text-[#1E293B]">Vì sao nên chọn sản phẩm này?</h3>
                <ul className="space-y-2">
                  <li>Nguyên liệu chọn lọc, đảm bảo độ bền vượt trội qua nhiều mùa giải</li>
                  <li>Kiểu dáng hiện đại, dễ phối đồ từ sân tập đến đời thường</li>
                  <li>Công nghệ thoát ẩm nhanh, giữ cơ thể luôn khô thoáng</li>
                  <li>Cam kết hàng chính hãng, tem bảo hành đầy đủ</li>
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-[#F8FAFC] rounded-xl">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#1E293B]">{product.rating}</div>
                    <div className="flex items-center gap-1 mt-2">{renderStars(product.rating)}</div>
                    <p className="text-sm text-gray-500 mt-1">{product.reviews} đánh giá</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const percentage = star === 5 ? 65 : star === 4 ? 20 : star === 3 ? 10 : star === 2 ? 3 : 2;
                      return (
                        <div key={star} className="flex items-center gap-2">
                          <span className="text-sm text-gray-500 w-8">{star} sao</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-500 w-10">{percentage}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <p className="text-gray-500 text-center py-8">
                  Hiện chưa có nhận xét nào cho sản phẩm. Mua hàng và chia sẻ trải nghiệm của bạn ngay!
                </p>
              </div>
            )}

            {activeTab === 'policy' && (
              <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4">
                <h3 className="text-lg font-semibold text-[#1E293B]">Quyền lợi đổi trả của bạn</h3>
                <ul className="space-y-2">
                  <li>Miễn phí đổi trả trong 30 ngày kể từ ngày nhận hàng</li>
                  <li>Yêu cầu sản phẩm giữ nguyên trạng thái ban đầu, chưa sử dụng</li>
                  <li>Hoàn toàn bộ chi phí khi phát hiện lỗi từ nhà sản xuất</li>
                  <li>Hỗ trợ chuyển đổi size không tính thêm phí cho trang phục</li>
                </ul>
                <h3 className="text-lg font-semibold text-[#1E293B]">Yêu cầu khi đổi trả</h3>
                <ul className="space-y-2">
                  <li>Giữ nguyên bao bì gốc và các phụ kiện đi kèm</li>
                  <li>Xuất trình biên lai hoặc mã đơn hàng khi yêu cầu</li>
                  <li>Không áp dụng cho các sản phẩm thuộc chương trình flash sale</li>
                </ul>
                <h3 className="text-lg font-semibold text-[#1E293B]">Hướng dẫn thực hiện</h3>
                <ol className="space-y-2">
                  <li>Gọi ngay hotline 0931 619 177 hoặc gửi yêu cầu qua email support@hutruongstore.vn</li>
                  <li>Thông báo mã đơn và mô tả chi tiết vấn đề gặp phải</li>
                  <li>Đóng gói và chuyển sản phẩm theo chỉ dẫn của nhân viên</li>
                  <li>Nhận hàng thay thế hoặc hoàn tiền trong vòng 3-5 ngày làm việc</li>
                </ol>
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1E293B] mb-8">
              Gợi Ý Dành Cho Bạn
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
