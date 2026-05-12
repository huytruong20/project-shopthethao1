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
    gradient: "linear-gradient(135deg, #FF6B00 0%, #FF8533 30%, #00D4FF 100%)",
  },
  {
    title: "Quần Thể Thao - Tự Do Chuyển Động",
    subtitle: "Dẻo dai theo từng bước chân, từ đường chạy cho đến phố thị",
    cta: "Khám Phá Bộ Sưu Tập",
    href: "/quan-the-thao",
    gradient: "linear-gradient(135deg, #1E293B 0%, #334155 30%, #FF6B00 100%)",
  },
  {
    title: "Thiết Bị Thể Thao Hàng Đầu",
    subtitle: "Vũ khí bí mật của mọi nhà vô địch - 100% hàng chính hãng toàn cầu",
    cta: "Sắm Ngay",
    href: "/dung-cu",
    gradient: "linear-gradient(135deg, #00D4FF 0%, #0ea5e9 30%, #1E293B 100%)",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[350px] md:h-[500px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex items-center transition-all duration-700 ease-in-out ${
            i === current ? "opacity-100 translate-x-0" : i < current ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"
          }`}
          style={{ background: slide.gradient }}
        >
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow">
                {slide.subtitle}
              </p>
              <Link
                href={slide.href}
                className="inline-block bg-white text-secondary font-bold px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {slide.cta} →
              </Link>
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-32 w-40 h-40 border-4 border-white rounded-full" />
            <div className="absolute top-1/2 right-20 w-20 h-20 bg-white rounded-full" />
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
