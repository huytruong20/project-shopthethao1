"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Trang Phục Thể Thao Đỉnh Cao",
    subtitle: "Nâng tầm phong cách vận động với chất liệu vượt trội, kiểu dáng sành điệu",
    cta: "Xem Ngay",
    href: "/ao-the-thao",
    gradient: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2a2a2a 100%)",
  },
  {
    title: "Quần Thể Thao — Tự Do Chuyển Động",
    subtitle: "Dẻo dai theo từng bước chân, từ đường chạy cho đến phố thị",
    cta: "Khám Phá Bộ Sưu Tập",
    href: "/quan-the-thao",
    gradient: "linear-gradient(135deg, #111111 0%, #1c1c1c 50%, #262626 100%)",
  },
  {
    title: "Thiết Bị Thể Thao Hàng Đầu",
    subtitle: "Vũ khí bí mật của mọi nhà vô địch — 100% hàng chính hãng toàn cầu",
    cta: "Sắm Ngay",
    href: "/dung-cu",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #171717 50%, #222222 100%)",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[450px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex items-center transition-all duration-700 ease-in-out ${
            i === current ? "opacity-100 translate-x-0" : i < current ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"
          }`}
          style={{ background: slide.gradient }}
        >
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/60 font-light mb-10 max-w-xl leading-relaxed">
                {slide.subtitle}
              </p>
              <Link
                href={slide.href}
                className="inline-block bg-white text-black font-medium px-10 py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-white/90 transition-colors duration-300"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center text-white/40 hover:text-white transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} strokeWidth={1} />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center text-white/40 hover:text-white transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={32} strokeWidth={1} />
      </button>

      {/* Navigation lines */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[2px] rounded-none transition-all duration-500 ${
              i === current ? "w-12 bg-white" : "w-6 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
