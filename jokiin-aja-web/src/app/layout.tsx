import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./custom.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

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
      <body className={poppins.className}>
        <AppNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
