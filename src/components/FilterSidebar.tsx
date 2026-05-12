"use client";

import { useState, useEffect, useMemo } from "react";
import { Product } from "@/data/products";
import { SlidersHorizontal, X, ChevronDown, ChevronUp } from "lucide-react";

interface FilterState {
  sports: string[];
  brands: string[];
  priceRange: [number, number];
  sort: string;
}

export default function FilterSidebar({
  products,
  onFilter,
}: {
  products: Product[];
  onFilter: (filtered: Product[]) => void;
}) {
  const availableSports = useMemo(() => [...new Set(products.map((p) => p.sport))].sort(), [products]);
  const availableBrands = useMemo(() => [...new Set(products.map((p) => p.brand))].sort(), [products]);

  const [filters, setFilters] = useState<FilterState>({
    sports: [],
    brands: [],
    priceRange: [0, 50000000],
    sort: "default",
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSections, setOpenSections] = useState({ sport: true, brand: true, price: true });

  useEffect(() => {
    let result = [...products];

    if (filters.sports.length > 0) {
      result = result.filter((p) => filters.sports.includes(p.sport));
    }
    if (filters.brands.length > 0) {
      result = result.filter((p) => filters.brands.includes(p.brand));
    }
    result = result.filter((p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);

    switch (filters.sort) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "reviews": result.sort((a, b) => b.reviews - a.reviews); break;
    }

    onFilter(result);
  }, [filters, products, onFilter]);

  const toggleFilter = (type: "sports" | "brands", value: string) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };

  const resetFilters = () => {
    setFilters({ sports: [], brands: [], priceRange: [0, 50000000], sort: "default" });
  };

  const activeCount = filters.sports.length + filters.brands.length + (filters.sort !== "default" ? 1 : 0);

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filterContent = (
    <div className="space-y-8">
      {/* Sort */}
      <div>
        <label className="block text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-400 mb-3">
          Sap xep theo
        </label>
        <select
          value={filters.sort}
          onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
          className="w-full px-3 py-2 border border-[#E5E5E5] text-sm bg-white text-[#111] outline-none focus:border-[#111] transition-colors"
        >
          <option value="default">Mac dinh</option>
          <option value="price-asc">Gia tang dan</option>
          <option value="price-desc">Gia giam dan</option>
          <option value="rating">Danh gia cao nhat</option>
          <option value="reviews">Pho bien nhat</option>
        </select>
      </div>

      {/* Sports */}
      <div>
        <button
          onClick={() => toggleSection("sport")}
          className="flex items-center justify-between w-full text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-400 mb-3"
        >
          Mon the thao
          {openSections.sport ? <ChevronUp size={14} className="text-gray-300" /> : <ChevronDown size={14} className="text-gray-300" />}
        </button>
        {openSections.sport && (
          <div className="space-y-2.5 max-h-48 overflow-y-auto">
            {availableSports.map((sport) => (
              <label key={sport} className="flex items-center gap-2.5 cursor-pointer text-sm text-[#333] hover:text-[#111] transition-colors">
                <input
                  type="checkbox"
                  checked={filters.sports.includes(sport)}
                  onChange={() => toggleFilter("sports", sport)}
                  className="w-3.5 h-3.5 accent-black border-[#E5E5E5] rounded-none"
                />
                <span className="text-[13px]">{sport}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div>
        <button
          onClick={() => toggleSection("brand")}
          className="flex items-center justify-between w-full text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-400 mb-3"
        >
          Thuong hieu
          {openSections.brand ? <ChevronUp size={14} className="text-gray-300" /> : <ChevronDown size={14} className="text-gray-300" />}
        </button>
        {openSections.brand && (
          <div className="space-y-2.5 max-h-48 overflow-y-auto">
            {availableBrands.map((brand) => (
              <label key={brand} className="flex items-center gap-2.5 cursor-pointer text-sm text-[#333] hover:text-[#111] transition-colors">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => toggleFilter("brands", brand)}
                  className="w-3.5 h-3.5 accent-black border-[#E5E5E5] rounded-none"
                />
                <span className="text-[13px]">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div>
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-400 mb-3"
        >
          Khoang gia
          {openSections.price ? <ChevronUp size={14} className="text-gray-300" /> : <ChevronDown size={14} className="text-gray-300" />}
        </button>
        {openSections.price && (
          <div className="space-y-2">
            {[
              { label: "Duoi 500K", range: [0, 500000] as [number, number] },
              { label: "500K - 1 trieu", range: [500000, 1000000] as [number, number] },
              { label: "1 - 3 trieu", range: [1000000, 3000000] as [number, number] },
              { label: "3 - 5 trieu", range: [3000000, 5000000] as [number, number] },
              { label: "Tren 5 trieu", range: [5000000, 50000000] as [number, number] },
            ].map((opt) => (
              <button
                key={opt.label}
                onClick={() => setFilters((prev) => ({
                  ...prev,
                  priceRange: prev.priceRange[0] === opt.range[0] && prev.priceRange[1] === opt.range[1]
                    ? [0, 50000000]
                    : opt.range,
                }))}
                className={`w-full text-left px-3 py-1.5 text-[13px] transition-all duration-200 border ${
                  filters.priceRange[0] === opt.range[0] && filters.priceRange[1] === opt.range[1]
                    ? "border-[#111] text-[#111] bg-[#111] text-white"
                    : "border-[#E5E5E5] text-[#555] hover:border-[#111] hover:text-[#111]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Reset */}
      {activeCount > 0 && (
        <button
          onClick={resetFilters}
          className="text-sm text-gray-400 hover:text-[#111] hover:underline transition-colors"
        >
          Xoa bo loc ({activeCount})
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E5E5] text-sm text-[#111] mb-4"
      >
        <SlidersHorizontal size={14} />
        Bo loc
        {activeCount > 0 && (
          <span className="bg-[#111] text-white text-[10px] w-4 h-4 flex items-center justify-center">{activeCount}</span>
        )}
      </button>

      {/* Desktop sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <div className="bg-white p-6 border border-[#E5E5E5] sticky top-24">
          <h3 className="text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-400 mb-6 flex items-center gap-2">
            <SlidersHorizontal size={12} /> Bo loc
          </h3>
          {filterContent}
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 bg-white overflow-y-auto animate-slide-in">
            <div className="p-5 border-b border-[#E5E5E5] flex justify-between items-center sticky top-0 bg-white z-10">
              <h3 className="text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-400 flex items-center gap-2">
                <SlidersHorizontal size={12} /> Bo loc
              </h3>
              <button onClick={() => setMobileOpen(false)} className="text-gray-400 hover:text-[#111] transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="p-5">{filterContent}</div>
          </div>
        </div>
      )}
    </>
  );
}
