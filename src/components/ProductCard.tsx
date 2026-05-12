"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Star, Eye } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [imgError, setImgError] = useState(false);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;
  const imgSrc = `/images/products/${product.id}.jpg`;

  return (
    <div className="product-card bg-white rounded-sm flex flex-col group transition-shadow duration-300 hover:shadow-lg">
      {/* Image */}
      <Link href={`/san-pham/${product.id}`} className="block relative">
        <div
          className="aspect-square w-full flex items-center justify-center overflow-hidden"
          style={{ background: product.image }}
        >
          {!imgError ? (
            <img
              src={imgSrc}
              alt={product.name}
              className="product-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-white/30 text-6xl font-black select-none">
              {product.sport.charAt(0)}
            </span>
          )}
        </div>

        {/* Product overlay */}
        <div className="product-overlay absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white text-[#111] text-xs font-medium px-4 py-2 flex items-center gap-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye size={14} />
            Quick View
          </span>
        </div>

        {/* Badges */}
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-[#111] text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm">
            -{discount}%
          </span>
        )}
        {product.bestSeller && (
          <span className="absolute top-2 right-2 text-[10px] font-semibold uppercase tracking-wide text-[#111] bg-white/90 px-2 py-0.5">
            Best Seller
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
            <span className="text-[#111] font-medium text-sm tracking-wide uppercase">Het hang</span>
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="px-3 pt-3 pb-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] text-gray-400 uppercase tracking-wide">{product.brand}</span>
        </div>

        <Link href={`/san-pham/${product.id}`}>
          <h3 className="font-medium text-[#111] text-sm leading-snug line-clamp-2 hover:underline transition-colors min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-0.5 mt-1.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              size={10}
              className={s <= Math.round(product.rating) ? "text-gray-400 fill-gray-400" : "text-gray-200"}
            />
          ))}
          <span className="text-[10px] text-gray-300 ml-1">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-semibold text-[#111]">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
          )}
          {discount > 0 && (
            <span className="text-[10px] font-semibold text-orange-500">-{discount}%</span>
          )}
        </div>

        {/* Add to cart */}
        <button
          onClick={(e) => {
            e.preventDefault();
            if (product.inStock) addToCart(product);
          }}
          disabled={!product.inStock}
          className={`mt-3 w-full py-2 text-xs font-medium flex items-center justify-center gap-2 transition-all duration-200 ${
            product.inStock
              ? "border border-[#111] text-[#111] hover:bg-[#111] hover:text-white active:scale-[0.98]"
              : "border border-gray-200 text-gray-300 cursor-not-allowed"
          }`}
        >
          <ShoppingCart size={13} />
          {product.inStock ? "Them vao gio" : "Het hang"}
        </button>
      </div>
    </div>
  );
}
