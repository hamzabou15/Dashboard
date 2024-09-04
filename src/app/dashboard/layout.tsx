import { MenuD, MenuT } from "@/components";
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
    <div className="h-screen flex gap-3" >
      {/* left section */}
      <div className="w-[14%] max-lg:w-[8%] lg:w-[16%] max-md:w-[50px] bg-white " >
          <MenuD/>
      </div>
      {/* right section */}
      <div className="w-[calc(86%-24px)] max-md:w-[calc(92%-24px)] lg:w-[calc(84%-24px)] mt-3 flex flex-col gap-3">
         <MenuT/>
         <div className = "h-[calc(100%-98px)] w-full ">
             {children}
         </div>
      </div>
    </div>
  );
}
