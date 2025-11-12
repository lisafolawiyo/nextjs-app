import FooterThree from '@/components/FooterThree';
import { Header, LenisScroll } from '@/components/archive';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
        <FooterThree />
      </div>
    </LenisScroll>
  );
}
