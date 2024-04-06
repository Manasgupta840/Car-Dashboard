"use client";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useLayoutEffect } from "react";

export default function DashboardPage() {
  useLayoutEffect(() => {
    const updateRemSize = () => {
      const fontSizeInPercent = (document.body.clientWidth * 100) / 1440;
      if (fontSizeInPercent < 100) {
        document.documentElement.style.fontSize = `${fontSizeInPercent}%`;
      }
    };
    updateRemSize();
    window.addEventListener("resize", updateRemSize);
    return () => window.removeEventListener("resize", updateRemSize);
  }, []);
  return <Dashboard />;
}
