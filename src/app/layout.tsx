import './globals.css';
import { Inter } from 'next/font/google';
import DesktopView from '@/components/layout/MainView';

import MessengerButton from "@/components/layout/MessengerButton";
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CARAIELTS - Free IELTS Practice Tests',
  description: 'Prepare for IELTS with free online tests and expert courses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Desktop and Responsive Navigation */}
        <DesktopView />

        {/* Main Content */}
        {children}

        {/* Messenger Button */}
        <MessengerButton />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}