'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';

export default function DungCuPage() {
  const categoryProducts = useMemo(
    () => products.filter((p) => p.category === 'dung-cu'),
    []
  );
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(categoryProducts);
  const [showFilter, setShowFilter] = useState(false);

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
            <span className="text-[#1E293B] font-medium">Dụng Cụ Thể Thao</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1E293B]">
              Dụng Cụ Thể Thao
            </h1>
            <p className="text-gray-500 mt-2">
              {filteredProducts.length} sản phẩm
            </p>
          </div>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-[#1E293B] font-medium hover:border-[#FF6B00] transition-colors"
          >
            {showFilter ? <X className="w-5 h-5" /> : <SlidersHorizontal className="w-5 h-5" />}
            Bộ lọc
          </button>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <div
            className={`${
              showFilter ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto lg:static lg:z-auto lg:p-0' : 'hidden'
            } lg:block lg:w-72 lg:flex-shrink-0`}
          >
            <div className="lg:hidden flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#1E293B]">Bộ lọc</h2>
              <button onClick={() => setShowFilter(false)}>
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <FilterSidebar
              products={categoryProducts}
              onFilter={(filtered) => {
                setFilteredProducts(filtered);
                setShowFilter(false);
              }}
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-4xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1E293B] mb-2">
                  Không tìm thấy sản phẩm
                </h3>
                <p className="text-gray-500 max-w-md">
                  Không có sản phẩm nào phù hợp với bộ lọc của bạn. Hãy thử thay đổi tiêu chí tìm kiếm.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
