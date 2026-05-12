"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
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
    <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
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
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-white/30 text-6xl font-black select-none">
              {product.sport.charAt(0)}
            </span>
          )}
        </div>
        {/* Badges */}
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-danger text-white text-xs font-bold px-2.5 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        {product.bestSeller && (
          <span className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full">
            Bán chạy
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-secondary font-bold px-4 py-2 rounded-full text-sm">Hết hàng</span>
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">{product.sport}</span>
          <span className="text-xs text-gray-400">{product.brand}</span>
        </div>

        <Link href={`/san-pham/${product.id}`}>
          <h3 className="font-semibold text-secondary text-sm leading-tight line-clamp-2 hover:text-primary transition-colors min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              size={12}
              className={s <= Math.round(product.rating) ? "text-warning fill-warning" : "text-gray-300"}
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        {/* Add to cart */}
        <button
          onClick={(e) => {
            e.preventDefault();
            if (product.inStock) addToCart(product);
          }}
          disabled={!product.inStock}
          className={`mt-3 w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
            product.inStock
              ? "bg-primary text-white hover:bg-primary-dark active:scale-95 shadow-md shadow-primary/25"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <ShoppingCart size={16} />
          {product.inStock ? "Thêm vào giỏ" : "Hết hàng"}
        </button>
      </div>
    </div>
  );
}
