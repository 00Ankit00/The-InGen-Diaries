import type { Metadata } from 'next';
import { Inter, Bebas_Neue, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Atmosphere } from '@/components/Atmosphere';
import { AudioManager } from '@/components/AudioManager';
import { SiteHeader } from '@/components/SiteHeader';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'The InGen Diaries',
  description: 'A comprehensive archive of prehistoric and synthesized lifeforms.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${bebas.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased selection:bg-accent selection:text-base`}>
        <ThemeProvider>
          <Atmosphere />
          <div className="glitch-layer mix-blend-exclusion"></div>
          <SiteHeader />
          {children}
          <AudioManager />
        </ThemeProvider>
      </body>
    </html>
  );
}
