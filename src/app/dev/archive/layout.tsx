import { Header, Footer, LenisScroll } from '@/components/archive';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LenisScroll>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </div>
    </LenisScroll>
  );
}
