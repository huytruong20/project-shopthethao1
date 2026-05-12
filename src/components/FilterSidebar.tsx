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
    <div className="space-y-6">
      {/* Sort */}
      <div>
        <label className="block text-sm font-bold text-secondary mb-2">Sắp xếp theo</label>
        <select
          value={filters.sort}
          onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
          className="w-full px-3 py-2 border rounded-lg text-sm bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
        >
          <option value="default">Mặc định</option>
          <option value="price-asc">Giá tăng dần</option>
          <option value="price-desc">Giá giảm dần</option>
          <option value="rating">Đánh giá cao nhất</option>
          <option value="reviews">Phổ biến nhất</option>
        </select>
      </div>

      {/* Sports */}
      <div>
        <button onClick={() => toggleSection("sport")} className="flex items-center justify-between w-full text-sm font-bold text-secondary mb-2">
          Môn thể thao
          {openSections.sport ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openSections.sport && (
          <div className="space-y-1.5 max-h-48 overflow-y-auto">
            {availableSports.map((sport) => (
              <label key={sport} className="flex items-center gap-2 cursor-pointer text-sm hover:text-primary transition-colors">
                <input
                  type="checkbox"
                  checked={filters.sports.includes(sport)}
                  onChange={() => toggleFilter("sports", sport)}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                {sport}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div>
        <button onClick={() => toggleSection("brand")} className="flex items-center justify-between w-full text-sm font-bold text-secondary mb-2">
          Thương hiệu
          {openSections.brand ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openSections.brand && (
          <div className="space-y-1.5 max-h-48 overflow-y-auto">
            {availableBrands.map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer text-sm hover:text-primary transition-colors">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => toggleFilter("brands", brand)}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                {brand}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div>
        <button onClick={() => toggleSection("price")} className="flex items-center justify-between w-full text-sm font-bold text-secondary mb-2">
          Khoảng giá
          {openSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openSections.price && (
          <div className="space-y-2">
            {[
              { label: "Dưới 500K", range: [0, 500000] as [number, number] },
              { label: "500K - 1 triệu", range: [500000, 1000000] as [number, number] },
              { label: "1 - 3 triệu", range: [1000000, 3000000] as [number, number] },
              { label: "3 - 5 triệu", range: [3000000, 5000000] as [number, number] },
              { label: "Trên 5 triệu", range: [5000000, 50000000] as [number, number] },
            ].map((opt) => (
              <button
                key={opt.label}
                onClick={() => setFilters((prev) => ({
                  ...prev,
                  priceRange: prev.priceRange[0] === opt.range[0] && prev.priceRange[1] === opt.range[1]
                    ? [0, 50000000]
                    : opt.range,
                }))}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  filters.priceRange[0] === opt.range[0] && filters.priceRange[1] === opt.range[1]
                    ? "bg-primary text-white"
                    : "bg-surface hover:bg-surface-dark"
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
          className="w-full py-2 border-2 border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
        >
          Xóa bộ lọc ({activeCount})
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-sm font-medium shadow-sm mb-4"
      >
        <SlidersHorizontal size={16} />
        Bộ lọc
        {activeCount > 0 && (
          <span className="bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{activeCount}</span>
        )}
      </button>

      {/* Desktop sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 sticky top-24">
          <h3 className="font-bold text-secondary mb-4 flex items-center gap-2">
            <SlidersHorizontal size={18} /> Bộ lọc
          </h3>
          {filterContent}
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto animate-slide-in">
            <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white z-10">
              <h3 className="font-bold flex items-center gap-2">
                <SlidersHorizontal size={18} /> Bộ lọc
              </h3>
              <button onClick={() => setMobileOpen(false)}><X size={20} /></button>
            </div>
            <div className="p-4">{filterContent}</div>
          </div>
        </div>
      )}
    </>
  );
}
