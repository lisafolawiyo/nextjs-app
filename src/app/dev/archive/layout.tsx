import { Header, Footer, LenisScroll } from '@/components/archive';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LenisScroll>
      <div className="flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </div>
    </LenisScroll>
  );
}
