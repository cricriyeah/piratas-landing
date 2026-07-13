import type { Metadata } from 'next';
import { EB_Garamond, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';

const ebGaramond = EB_Garamond({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

const hankenGrotesk = Hanken_Grotesk({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-hanken-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Piratas Adventures | Puerto Chale, BCS',
  description: 'Descubre la magia de Baja California Sur con Piratas Adventures. Avistamiento de ballenas, pesca deportiva y safaris marinos en Puerto Chale.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${ebGaramond.variable} ${hankenGrotesk.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
