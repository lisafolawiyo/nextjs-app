import type { Metadata } from "next";
import "../styles/globals.scss";
import '../styles/shop.scss';
import '../styles/single_product.scss';
import '../styles/checkout.scss';
import '../styles/confirmation.scss';
import '../styles/page.scss';
import '../styles/editorials.scss';
import { Toaster } from "react-hot-toast";
import { Geist, Geist_Mono } from "next/font/google";
import NavbarTwo from "@/components/NavbarTwo";
// Only needed if you want to prevent auto-injecting CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import FooterTwo from "@/components/FooterTwo";

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Lisafolawiyo",
  description: " go-to online store for high-quality men’s fashion and accessories in Nigeria, offering premium products that combine style, durability, and uniqueness",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
        <Toaster position="top-right" reverseOrder={false} /> 
          <NavbarTwo />
            <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
              {children}
            </div>
          <FooterTwo />
        </>
  );
}
