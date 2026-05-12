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
    <footer className="bg-secondary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4">
              <span className="gradient-text">HUTRUONG STORE</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Nơi quy tụ những bộ sưu tập thể thao đẳng cấp nhất từ khắp nơi trên thế giới. Phục vụ hàng chục ngàn vận động viên và người yêu thể thao trên toàn quốc.
            </p>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "YouTube", "TikTok"].map((s) => (
                <span key={s} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold hover:bg-primary transition-colors cursor-pointer">
                  {s[0]}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Liên Kết Nhanh</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Môn Thể Thao</h4>
            <ul className="space-y-2">
              {sportLinks.map((sport) => (
                <li key={sport}>
                  <span className="text-gray-400 text-sm">{sport}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-primary" />
                Tổ 1, Phường An Khê, Tỉnh Gia Lai
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={16} className="flex-shrink-0 text-primary" />
                0931 619 177
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={16} className="flex-shrink-0 text-primary" />
                contact@hutruongstore.vn
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Clock size={16} className="flex-shrink-0 text-primary" />
                8:00 - 22:00, T2 - CN
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <p>&copy; 2024 Hutruong Store. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-4">
            {["VISA", "MC", "MOMO", "COD"].map((m) => (
              <span key={m} className="px-2 py-1 bg-white/10 rounded text-xs font-medium">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
