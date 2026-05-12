"use client";

import { useCart } from "@/context/CartContext";
import { CheckCircle } from "lucide-react";

export default function CartNotification() {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div className="fixed top-20 right-4 z-[100] animate-fade-in-up">
      <div className="bg-success text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 text-sm font-medium">
        <CheckCircle size={18} />
        {notification}
      </div>
    </div>
  );
}
