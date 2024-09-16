import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { ColorSchemeScript } from '@mantine/core';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <MantineProvider>{children}</MantineProvider>
    </html>
  );
}
