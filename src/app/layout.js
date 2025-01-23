import { Roboto } from 'next/font/google';

import { NavbarComponent } from '../components/NavbarComponent';
import './globals.css';

export const metadata = {
  title: 'Home | PostExplorer',
  description: 'PostExplorer app for blogers',
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <NavbarComponent />

        <main className=' container mx-auto min-h-[calc(100vh-134px)]'>
          {children}
        </main>

        <footer className='text-center text-sm bg-slate-200 py-5 text-black'>
          © 2023 - {new Date().getFullYear()} PostExplorer . All rights
          reserved.
        </footer>
      </body>
    </html>
  );
}
