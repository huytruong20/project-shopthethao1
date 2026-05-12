'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

export default function GioHangPage() {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');

  const shippingFee = totalPrice > 500000 ? 0 : 30000;
  const discount = 0;
  const grandTotal = totalPrice + shippingFee - discount;

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center justify-center text-center py-24">
            <div className="w-20 h-20 border border-[#E5E5E5] flex items-center justify-center mb-8">
              <ShoppingBag className="w-8 h-8 text-[#999]" />
            </div>
            <h1 className="text-2xl font-bold text-[#111] mb-3">
              Giỏ hàng trống
            </h1>
            <p className="text-sm text-[#999] mb-10 max-w-sm font-light">
              Hãy khám phá các sản phẩm thể thao và thêm vào giỏ hàng.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#111] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#333] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Khám phá sản phẩm
            </Link>
          </div>
        </div>
      </main>
    );
  }

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
            <span className="text-[#111]">Giỏ hàng</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-10">
          <h1 className="text-2xl font-bold text-[#111]">
            Giỏ hàng
            <span className="text-sm font-light text-[#999] ml-3">
              ({totalItems})
            </span>
          </h1>
          <button
            onClick={clearCart}
            className="text-xs uppercase tracking-widest text-[#999] hover:text-[#111] font-medium transition-colors"
          >
            Xoá tất cả
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {/* Table Header */}
            <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_auto] gap-4 pb-4 border-b border-[#E5E5E5] text-xs uppercase tracking-widest text-[#999] font-medium">
              <span>Sản phẩm</span>
              <span className="text-center">Số lượng</span>
              <span className="text-right">Thành tiền</span>
              <span className="w-10" />
            </div>

            <div className="divide-y divide-[#E5E5E5]">
              {items.map((item, index) => (
                <div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
                  className="py-6 sm:grid sm:grid-cols-[2fr_1fr_1fr_auto] sm:gap-4 sm:items-center"
                >
                  {/* Product */}
                  <div className="flex gap-4">
                    <div
                      className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 overflow-hidden flex items-center justify-center text-white text-2xl font-bold"
                      style={{ background: item.image }}
                    >
                      <img
                        src={`/images/products/${item.id}.jpg`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    </div>
                    <div className="min-w-0">
                      <Link
                        href={`/san-pham/${item.id}`}
                        className="text-sm font-medium text-[#111] hover:text-[#555] transition-colors line-clamp-2"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-[#999] mt-1">{item.brand}</p>
                      <div className="flex items-center gap-3 mt-1 text-xs text-[#999]">
                        {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                        {item.selectedColor && <span>Màu: {item.selectedColor}</span>}
                      </div>
                      <p className="text-xs text-[#555] mt-1 sm:hidden">{formatPrice(item.price)}</p>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex justify-center mt-4 sm:mt-0">
                    <div className="flex items-center border border-[#E5E5E5]">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        className="p-2 hover:bg-[#F5F5F5] transition-colors"
                      >
                        <Minus className="w-3 h-3 text-[#555]" />
                      </button>
                      <span className="w-10 text-center text-sm font-medium text-[#111]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-2 hover:bg-[#F5F5F5] transition-colors"
                      >
                        <Plus className="w-3 h-3 text-[#555]" />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right mt-4 sm:mt-0">
                    <p className="text-sm font-bold text-[#111]">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                    {item.quantity > 1 && (
                      <p className="text-xs text-[#999] mt-0.5">
                        {formatPrice(item.price)} / sp
                      </p>
                    )}
                  </div>

                  {/* Remove */}
                  <div className="hidden sm:flex justify-end">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-[#999] hover:text-[#111] transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Mobile remove */}
                  <div className="sm:hidden flex justify-end mt-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-[#999] hover:text-[#111] uppercase tracking-widest transition-colors"
                    >
                      Xoá
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border border-[#E5E5E5] p-8 sticky top-24">
              <h2 className="text-xs uppercase tracking-widest text-[#111] font-medium mb-8">
                Tổng đơn hàng
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#555] font-light">Thành tiền</span>
                  <span className="text-sm font-medium text-[#111]">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#555] font-light">Vận chuyển</span>
                  <span className={`text-sm font-medium ${shippingFee === 0 ? 'text-[#555]' : 'text-[#111]'}`}>
                    {shippingFee === 0 ? 'Miễn phí' : formatPrice(shippingFee)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#555] font-light">Giảm giá</span>
                  <span className="text-sm font-medium text-[#111]">
                    {discount > 0 ? `-${formatPrice(discount)}` : formatPrice(0)}
                  </span>
                </div>
                <div className="border-t border-[#E5E5E5] pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111] uppercase tracking-wide">Tổng</span>
                    <span className="text-lg font-bold text-[#111]">
                      {formatPrice(grandTotal)}
                    </span>
                  </div>
                </div>
              </div>

              {shippingFee > 0 && (
                <p className="text-xs text-[#999] font-light mb-6">
                  Miễn phí vận chuyển cho đơn từ {formatPrice(500000)}
                </p>
              )}

              {/* Promo Code */}
              <div className="mb-8">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Mã voucher"
                    className="flex-1 px-4 py-2.5 border border-[#E5E5E5] text-sm focus:outline-none focus:border-[#111] transition-colors placeholder:text-[#999]"
                  />
                  <button className="px-4 py-2.5 bg-[#111] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#333] transition-colors whitespace-nowrap">
                    Áp dụng
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full py-4 bg-[#111] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#333] transition-colors">
                Thanh toán
              </button>

              <Link
                href="/"
                className="flex items-center justify-center gap-2 mt-6 text-[#999] hover:text-[#111] transition-colors text-xs uppercase tracking-widest font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Tiếp tục mua sắm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
