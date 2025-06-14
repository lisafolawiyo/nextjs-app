import type { Metadata } from "next";
import localFont from 'next/font/local';
// import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.scss";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


const centuryGothic = localFont({
  src: [
    {
      path: './fonts/CenturyGothic.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CenturyGothic-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/CenturyGothic-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/CenturyGothic-BoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-century-gothic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Lisa Folawiyo | Luxury African Fashion with Hand Embellishment",
  description: "Discover Lisa Folawiyo's luxury African fashion, where hand embellishment meets contemporary elegance. Shop our latest collections today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${centuryGothic.variable}  antialiased`}>
            {children}
      </body>
    </html>
  );
}
