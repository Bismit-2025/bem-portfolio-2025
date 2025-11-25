import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar"; // 1. Import Navbar
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEM Fasilkom UI 2025",
  description: "Portfolio Profile Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-sans antialiased`}>

        <Navbar />
        
        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}