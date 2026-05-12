import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartNotification from "@/components/CartNotification";

const montserrat = Montserrat({ subsets: ["latin", "vietnamese"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Hutruong Store - Thiên Đường Đồ Thể Thao",
  description: "Điểm đến lý tưởng cho người đam mê thể thao. Trang phục, phụ kiện và thiết bị thể thao từ các nhãn hiệu danh tiếng toàn cầu với ưu đãi hấp dẫn.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${montserrat.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          <CartNotification />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
