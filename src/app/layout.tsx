import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Abuba Portal",
  description: "Fully compiled interactive prototype from Google Stitch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`light h-full antialiased ${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-background">
        <CartProvider>
          <Navbar />
          <Breadcrumbs />
          <div className="flex-grow flex flex-col">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
