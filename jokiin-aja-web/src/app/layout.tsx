import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./custom.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JOKIIN-AJA",
  description: "Solusi Tugas Cepat dan Terpercaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>
        <AppNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
