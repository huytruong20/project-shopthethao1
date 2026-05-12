import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/ao-the-thao", label: "Áo Thể Thao" },
  { href: "/quan-the-thao", label: "Quần Thể Thao" },
  { href: "/dung-cu", label: "Dụng Cụ" },
  { href: "/gioi-thieu", label: "Giới Thiệu" },
  { href: "/lien-he", label: "Liên Hệ" },
];

const sportLinks = [
  "Bóng đá", "Bóng rổ", "Cầu lông", "Tennis", "Chạy bộ", "Gym", "Yoga", "Boxing",
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-[0.25em] text-white">
              HUTRUONG STORE
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Nơi quy tụ những bộ sưu tập thể thao đẳng cấp nhất từ khắp nơi trên thế giới. Phục vụ hàng chục ngàn vận động viên và người yêu thể thao trên toàn quốc.
            </p>
            <div className="flex gap-4 pt-2">
              {["Facebook", "Instagram", "YouTube", "TikTok"].map((s) => (
                <span
                  key={s}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xs font-medium text-white/70 hover:bg-white hover:text-[#111111] hover:border-white transition-all duration-300 cursor-pointer"
                >
                  {s[0]}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase text-white">
              Liên Kết Nhanh
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase text-white">
              Môn Thể Thao
            </h4>
            <ul className="space-y-3">
              {sportLinks.map((sport) => (
                <li key={sport}>
                  <span className="text-gray-400 text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-default">
                    {sport}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium tracking-[0.15em] uppercase text-white">
              Liên Hệ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-gray-500" />
                <span className="text-gray-400 text-sm font-light">
                  Tổ 1, Phường An Khê, Tỉnh Gia Lai
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 text-gray-500" />
                <span className="text-gray-400 text-sm font-light">
                  0931 619 177
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0 text-gray-500" />
                <span className="text-gray-400 text-sm font-light">
                  contact@hutruongstore.vn
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="flex-shrink-0 text-gray-500" />
                <span className="text-gray-400 text-sm font-light">
                  8:00 - 22:00, T2 - CN
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-light tracking-wide">
            &copy; 2024 Hutruong Store. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-3">
            {["VISA", "MC", "MOMO", "COD"].map((m) => (
              <span
                key={m}
                className="px-3 py-1 rounded-full border border-white/10 text-[11px] font-medium text-gray-400 tracking-wider"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
