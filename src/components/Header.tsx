"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { Search, ShoppingCart, Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/ao-the-thao", label: "Áo Thể Thao" },
  { href: "/quan-the-thao", label: "Quần Thể Thao" },
  { href: "/dung-cu", label: "Dụng Cụ" },
  { href: "/gioi-thieu", label: "Giới Thiệu" },
  { href: "/lien-he", label: "Liên Hệ" },
];

export default function Header() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const searchResults = searchQuery.length >= 2
    ? products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block" style={{ backgroundColor: "#111" }}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-white text-xs" style={{ fontWeight: 400 }}>
              <Phone size={11} className="text-gray-400" /> 0931 619 177
            </span>
            <span className="flex items-center gap-1.5 text-white text-xs" style={{ fontWeight: 400 }}>
              <Mail size={11} className="text-gray-400" /> contact@hutruongstore.vn
            </span>
          </div>
          <div className="text-gray-300 text-xs" style={{ fontWeight: 400 }}>
            Ship tận nơi - FREE cho đơn từ 500K trở lên
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className="sticky top-0 z-50 bg-white transition-all duration-300"
        style={{
          borderBottom: scrolled ? "1px solid #e5e5e5" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span
              className="text-2xl tracking-tight"
              style={{ fontWeight: 800, color: "#111" }}
            >
              HUTRUONG STORE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover-underline"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: pathname === link.href ? "#111" : "#666",
                  paddingBottom: "4px",
                  borderBottom: pathname === link.href ? "2px solid #111" : "2px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search + Cart + Mobile toggle */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div ref={searchRef} className="relative hidden md:block">
              <div
                className="flex items-center overflow-hidden transition-all duration-300"
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: "6px",
                  padding: "6px 12px",
                  width: searchOpen ? "280px" : "40px",
                  backgroundColor: searchOpen ? "#fafafa" : "transparent",
                  borderColor: searchOpen ? "#ccc" : "transparent",
                }}
              >
                <button
                  onClick={() => setSearchOpen(true)}
                  className="flex-shrink-0"
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                  <Search size={18} style={{ color: "#888" }} />
                </button>
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="outline-none"
                  style={{
                    marginLeft: "8px",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "#111",
                    backgroundColor: "transparent",
                    width: "100%",
                    opacity: searchOpen ? 1 : 0,
                    transition: "opacity 0.2s",
                  }}
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setSearchOpen(true); }}
                  onFocus={() => setSearchOpen(true)}
                />
              </div>
              {searchOpen && searchResults.length > 0 && (
                <div
                  className="absolute top-full left-0 right-0 z-50"
                  style={{
                    marginTop: "6px",
                    backgroundColor: "#fff",
                    border: "1px solid #e5e5e5",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  }}
                >
                  {searchResults.map((p) => (
                    <Link
                      key={p.id}
                      href={`/san-pham/${p.id}`}
                      onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                      className="flex items-center gap-3 transition-colors"
                      style={{
                        padding: "10px 14px",
                        borderBottom: "1px solid #f5f5f5",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#fafafa")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
                    >
                      <div
                        className="flex-shrink-0"
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "6px",
                          background: p.image,
                        }}
                      />
                      <div className="min-w-0">
                        <p className="truncate" style={{ fontSize: "13px", fontWeight: 500, color: "#111" }}>
                          {p.name}
                        </p>
                        <p style={{ fontSize: "11px", fontWeight: 400, color: "#999" }}>
                          {p.brand} &middot; {p.sport}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Cart */}
            <Link
              href="/gio-hang"
              className="relative flex items-center justify-center transition-colors"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "6px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <ShoppingCart size={20} style={{ color: "#111" }} />
              {totalItems > 0 && (
                <span
                  className="absolute flex items-center justify-center"
                  style={{
                    top: "4px",
                    right: "4px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#FF6B00",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center transition-colors"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "6px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {mobileOpen ? <X size={20} style={{ color: "#111" }} /> : <Menu size={20} style={{ color: "#111" }} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <div
            className="absolute right-0 top-0 h-full overflow-y-auto"
            style={{
              width: "300px",
              backgroundColor: "#fff",
              boxShadow: "-4px 0 24px rgba(0,0,0,0.08)",
              animation: "slideInRight 0.25s ease-out",
            }}
          >
            {/* Mobile header */}
            <div
              className="flex items-center justify-between"
              style={{
                padding: "20px 20px 16px",
                borderBottom: "1px solid #eee",
              }}
            >
              <span style={{ fontWeight: 800, fontSize: "16px", color: "#111" }}>
                HUTRUONG STORE
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                <X size={20} style={{ color: "#111" }} />
              </button>
            </div>

            {/* Mobile search */}
            <div style={{ padding: "16px 20px 8px" }}>
              <div
                className="flex items-center"
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: "6px",
                  padding: "8px 12px",
                  backgroundColor: "#fafafa",
                }}
              >
                <Search size={16} style={{ color: "#999" }} />
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="outline-none"
                  style={{
                    marginLeft: "8px",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "#111",
                    backgroundColor: "transparent",
                    width: "100%",
                    border: "none",
                  }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Mobile nav */}
            <nav style={{ padding: "8px 12px 20px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block transition-colors"
                  style={{
                    padding: "12px 12px",
                    fontSize: "14px",
                    fontWeight: pathname === link.href ? 600 : 400,
                    color: pathname === link.href ? "#111" : "#555",
                    borderLeft: pathname === link.href ? "2px solid #111" : "2px solid transparent",
                    backgroundColor: pathname === link.href ? "#f9f9f9" : "transparent",
                    borderRadius: "0 4px 4px 0",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
