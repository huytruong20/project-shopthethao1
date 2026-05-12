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
      <main className="min-h-screen bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-8">
              <ShoppingBag className="w-16 h-16 text-gray-300" />
            </div>
            <h1 className="text-3xl font-bold text-[#1E293B] mb-4">
              Chưa có gì trong giỏ
            </h1>
            <p className="text-gray-500 mb-8 max-w-md">
              Giỏ hàng đang trống trơn! Hãy ghé xem hàng ngàn sản phẩm thể thao đang chờ bạn khám phá.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FF6B00] text-white font-semibold rounded-xl hover:bg-[#E55A00] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Khám phá sản phẩm
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#FF6B00] transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-[#1E293B] font-medium">Giỏ hàng</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">
            Túi Mua Sắm
            <span className="text-lg font-normal text-gray-500 ml-3">
              ({totalItems} sản phẩm)
            </span>
          </h1>
          <button
            onClick={clearCart}
            className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
          >
            Làm trống giỏ
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
                className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4 sm:gap-6">
                  {/* Product Image */}
                  <div
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl flex-shrink-0 overflow-hidden flex items-center justify-center text-white text-3xl font-bold"
                    style={{ background: item.image }}
                  >
                    <img
                      src={`/images/products/${item.id}.jpg`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          href={`/san-pham/${item.id}`}
                          className="font-semibold text-[#1E293B] hover:text-[#FF6B00] transition-colors line-clamp-2"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">{item.brand}</p>
                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                          {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                          {item.selectedColor && <span>Màu: {item.selectedColor}</span>}
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-end justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, Math.max(1, item.quantity - 1))
                          }
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-semibold text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-lg font-bold text-[#FF6B00]">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-gray-400">
                            {formatPrice(item.price)} / sản phẩm
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-[#1E293B] mb-6">
                Chi tiết thanh toán
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Thành tiền sản phẩm</span>
                  <span className="font-semibold text-[#1E293B]">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Chi phí giao hàng</span>
                  <span className={`font-semibold ${shippingFee === 0 ? 'text-green-600' : 'text-[#1E293B]'}`}>
                    {shippingFee === 0 ? 'Miễn phí' : formatPrice(shippingFee)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Ưu đãi</span>
                  <span className="font-semibold text-[#1E293B]">
                    {discount > 0 ? `-${formatPrice(discount)}` : formatPrice(0)}
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#1E293B]">Tổng thanh toán</span>
                    <span className="text-xl font-bold text-[#FF6B00]">
                      {formatPrice(grandTotal)}
                    </span>
                  </div>
                </div>
              </div>

              {shippingFee > 0 && (
                <p className="text-sm text-gray-500 mb-4">
                  Giao hàng FREE khi mua từ {formatPrice(500000)}
                </p>
              )}

              {/* Promo Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Nhập mã voucher..."
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#FF6B00] transition-colors"
                  />
                  <button className="px-4 py-2.5 bg-[#1E293B] text-white text-sm font-medium rounded-lg hover:bg-[#1E293B]/90 transition-colors whitespace-nowrap">
                    Sử dụng
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full py-4 bg-[#FF6B00] text-white font-semibold rounded-xl hover:bg-[#E55A00] transition-colors text-lg">
                Đặt hàng ngay
              </button>

              <Link
                href="/"
                className="flex items-center justify-center gap-2 mt-4 text-gray-500 hover:text-[#FF6B00] transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Khám phá sản phẩm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}