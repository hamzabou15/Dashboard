import { MenuD } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex " >
      {/* left section */}
      <div className="w-[14%] max-lg:w-[8%] lg:w-[16%] " >
          <MenuD/>
      </div>
      {/* right section */}
      <div className="w-[86%] max-md:w-[92%] lg:w-[84%] bg-[#f7F8Fa]">

      </div>
    </div>
  );
}
