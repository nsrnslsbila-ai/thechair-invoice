import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'REI Creative Studio • Invoice & Omzet Tracker',
  description: 'Aplikasi manajemen invoice, follow up tagihan klien WhatsApp, dan monitoring omzet jasa kreatif REI (Social Media, Video, Motion, UI/UX Web).',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <body className={`${inter.className} min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-violet-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
