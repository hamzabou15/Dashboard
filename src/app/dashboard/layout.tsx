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
    <div className="h-screen flex " >
      {/* left section */}
      <div className="w-[14%] max-lg:w-[8%] lg:w-[16%] max-md:w-[50px]  " >
          <MenuD/>
      </div>
      {/* right section */}
      <div className=" lg:w-[calc(84%)] p-3  flex flex-col gap-3 bg-white rounded-tl-[40px] overflow-hidden ">
         <MenuT/>
         <div className = " w-full overflow-y-auto  ">
             {children}
         </div>
      </div>
    </div>
  );
}
