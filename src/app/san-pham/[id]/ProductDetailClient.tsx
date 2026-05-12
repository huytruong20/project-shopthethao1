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
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-light text-[#E5E5E5] mb-6">404</h1>
          <p className="text-base text-[#555] mb-8 font-light">Sản phẩm bạn tìm không tồn tại</p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-[#111] text-white text-xs uppercase tracking-widest hover:bg-[#333] transition-colors"
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
        className={`w-3.5 h-3.5 ${
          i < Math.floor(rating)
            ? 'fill-[#999] text-[#999]'
            : i < rating
            ? 'fill-[#999]/50 text-[#999]'
            : 'text-[#E5E5E5]'
        }`}
      />
    ));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#999]">
            <Link href="/" className="hover:text-[#111] transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <Link
              href={`/${product.category}`}
              className="hover:text-[#111] transition-colors"
            >
              {categoryNames[product.category] || product.category}
            </Link>
            <span>/</span>
            <span className="text-[#111] truncate max-w-[200px]">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          {/* Product Image */}
          <div>
            <div
              className="w-full aspect-square rounded-none flex items-center justify-center text-white text-8xl font-bold shadow-sm overflow-hidden"
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

          {/* Product Info */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#111] font-medium">
              {product.brand}
            </span>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#111] leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">{renderStars(product.rating)}</div>
              <span className="text-xs text-[#999]">
                ({product.reviews} đánh giá)
              </span>
            </div>

            <div className="flex items-baseline gap-4 flex-wrap">
              <span className="text-2xl font-bold text-[#111]">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-base text-[#999] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {discount > 0 && (
                <span className="px-2.5 py-0.5 bg-[#111] text-white text-xs font-medium rounded-full">
                  -{discount}%
                </span>
              )}
            </div>

            <p className="text-[#555] font-light leading-relaxed">{product.description}</p>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#111] mb-3 font-medium">
                  Chọn size
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center border text-sm font-medium transition-all ${
                        selectedSize === size
                          ? 'border-[#111] bg-[#111] text-white'
                          : 'border-[#E5E5E5] text-[#111] hover:border-[#111]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#111] mb-3 font-medium">
                  Tông màu: <span className="normal-case tracking-normal font-light text-[#555]">{selectedColor || 'Nhấn để chọn'}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        selectedColor === color.name
                          ? 'ring-1 ring-[#111] ring-offset-2 scale-110'
                          : 'ring-1 ring-[#E5E5E5] hover:ring-[#999]'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColor === color.name && (
                        <Check className={`w-4 h-4 ${color.hex === '#FFFFFF' || color.hex === '#fff' ? 'text-[#111]' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#111] mb-3 font-medium">
                Số lượng
              </h3>
              <div className="flex items-center w-fit border border-[#E5E5E5]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[#F5F5F5] transition-colors"
                >
                  <Minus className="w-3.5 h-3.5 text-[#111]" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-[#111]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[#F5F5F5] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5 text-[#111]" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-[#111] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#333] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-4 h-4" />
                Bỏ vào giỏ
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-8 py-4 border border-[#111] text-[#111] text-xs uppercase tracking-widest font-medium hover:bg-[#111] hover:text-white transition-colors">
                Đặt hàng ngay
              </button>
            </div>

            {/* Like / Share / Stock */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E5]">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setLiked(!liked)}
                  className="flex items-center gap-1.5 text-[#999] hover:text-[#111] transition-colors"
                >
                  <Heart className={`w-4 h-4 ${liked ? 'fill-[#111] text-[#111]' : ''}`} />
                  <span className="text-xs uppercase tracking-wide">Lưu lại</span>
                </button>
                <button className="flex items-center gap-1.5 text-[#999] hover:text-[#111] transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wide">Chia sẻ</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    product.inStock ? 'bg-[#111]' : 'bg-[#999]'
                  }`}
                />
                <span className={`text-xs ${product.inStock ? 'text-[#555]' : 'text-[#999]'}`}>
                  {product.inStock ? 'Sẵn sàng giao' : 'Tạm hết'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-24">
          <div className="flex gap-8 border-b border-[#E5E5E5] mb-10">
            {[
              { key: 'description' as const, label: 'Chi tiết sản phẩm' },
              { key: 'reviews' as const, label: 'Nhận xét' },
              { key: 'policy' as const, label: 'Đổi trả' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-4 text-xs uppercase tracking-widest font-medium transition-colors border-b ${
                  activeTab === tab.key
                    ? 'border-[#111] text-[#111]'
                    : 'border-transparent text-[#999] hover:text-[#555]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-3xl">
            {activeTab === 'description' && (
              <div className="space-y-8">
                <p className="text-[#555] font-light leading-loose">{product.description}</p>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[#111] font-medium mb-4">Thông số & Phân loại</h3>
                  <ul className="space-y-3 text-[#555] font-light">
                    <li className="flex gap-2"><span className="text-[#111] font-medium">Nhà sản xuất:</span> {product.brand}</li>
                    <li className="flex gap-2"><span className="text-[#111] font-medium">Phân loại:</span> {categoryNames[product.category]}</li>
                    <li className="flex gap-2"><span className="text-[#111] font-medium">Bộ môn:</span> {product.sport}</li>
                    {product.sizes && <li className="flex gap-2"><span className="text-[#111] font-medium">Size hiện có:</span> {product.sizes.join(', ')}</li>}
                    {product.colors && <li className="flex gap-2"><span className="text-[#111] font-medium">Tông màu:</span> {product.colors.map(c => c.name).join(', ')}</li>}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[#111] font-medium mb-4">Vì sao nên chọn sản phẩm này?</h3>
                  <ul className="space-y-3 text-[#555] font-light leading-relaxed">
                    <li>Nguyên liệu chọn lọc, đảm bảo độ bền vượt trội qua nhiều mùa giải</li>
                    <li>Kiểu dáng hiện đại, dễ phối đồ từ sân tập đến đời thường</li>
                    <li>Công nghệ thoát ẩm nhanh, giữ cơ thể luôn khô thoáng</li>
                    <li>Cam kết hàng chính hãng, tem bảo hành đầy đủ</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-8">
                <div className="flex items-center gap-10 py-8 border-b border-[#E5E5E5]">
                  <div className="text-center">
                    <div className="text-5xl font-light text-[#111]">{product.rating}</div>
                    <div className="flex items-center gap-0.5 mt-3">{renderStars(product.rating)}</div>
                    <p className="text-xs text-[#999] mt-2">{product.reviews} đánh giá</p>
                  </div>
                  <div className="flex-1 space-y-2.5">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const percentage = star === 5 ? 65 : star === 4 ? 20 : star === 3 ? 10 : star === 2 ? 3 : 2;
                      return (
                        <div key={star} className="flex items-center gap-3">
                          <span className="text-xs text-[#999] w-8">{star} sao</span>
                          <div className="flex-1 h-1 bg-[#E5E5E5] overflow-hidden">
                            <div
                              className="h-full bg-[#999]"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-xs text-[#999] w-10">{percentage}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <p className="text-[#999] font-light text-center py-12">
                  Chưa có nhận xét nào. Hãy là người đầu tiên chia sẻ trải nghiệm.
                </p>
              </div>
            )}

            {activeTab === 'policy' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[#111] font-medium mb-4">Quyền lợi đổi trả</h3>
                  <ul className="space-y-3 text-[#555] font-light leading-relaxed">
                    <li>Miễn phí đổi trả trong 30 ngày kể từ ngày nhận hàng</li>
                    <li>Yêu cầu sản phẩm giữ nguyên trạng thái ban đầu, chưa sử dụng</li>
                    <li>Hoàn toàn bộ chi phí khi phát hiện lỗi từ nhà sản xuất</li>
                    <li>Hỗ trợ chuyển đổi size không tính thêm phí</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[#111] font-medium mb-4">Yêu cầu khi đổi trả</h3>
                  <ul className="space-y-3 text-[#555] font-light leading-relaxed">
                    <li>Giữ nguyên bao bì gốc và các phụ kiện đi kèm</li>
                    <li>Xuất trình biên lai hoặc mã đơn hàng khi yêu cầu</li>
                    <li>Không áp dụng cho các sản phẩm thuộc chương trình flash sale</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[#111] font-medium mb-4">Hướng dẫn thực hiện</h3>
                  <ol className="space-y-3 text-[#555] font-light leading-relaxed list-decimal list-inside">
                    <li>Gọi ngay hotline 0931 619 177 hoặc gửi yêu cầu qua email support@hutruongstore.vn</li>
                    <li>Thông báo mã đơn và mô tả chi tiết vấn đề gặp phải</li>
                    <li>Đóng gói và chuyển sản phẩm theo chỉ dẫn của nhân viên</li>
                    <li>Nhận hàng thay thế hoặc hoàn tiền trong vòng 3-5 ngày làm việc</li>
                  </ol>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-xs uppercase tracking-widest text-[#111] font-medium mb-10">
              Gợi ý dành cho bạn
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
