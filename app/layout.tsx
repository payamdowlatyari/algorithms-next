import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/app/providers';
import './globals.css';
import Header from '@/app/Header';
import Footer from '@/app/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Algorithms For Life',
  description: 'A list of most important and widely used algorithms',
  metadataBase: new URL('https://algorithms-next.vercel.app/'),
  openGraph: {
    title: 'Algorithms For Life',
    description: 'A list of most important and widely used algorithms',
    url: 'https://algorithms-next.vercel.app/',
    siteName: 'Algorithms For Life',
    locale: 'en-US',
    type: 'website',
  },
  keywords: [
    'algorithms',
    'data structures',
    'arrays',
    'pointers',
    'backtracking',
    'recursion',
    'search algorithms',
    'sorting algorithms',
    'graph algorithms',
    'tree algorithms',
    'string algorithms',
    'mathematical algorithms',
    'bit manipulation',
    'dynamic programming',
    'divide and conquer',
    'backtracking algorithms',
  ],
  authors: [{ name: 'Payam Dowlatyari' }],
  creator: 'Payam Dowlatyari',
  publisher: 'Payam Dowlatyari',
};

/**
 * The root layout component of the app, which wraps the entire app.
 *
 * It renders an `html` element with a `body` element inside it, which
 * contains the main app content.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className='min-h-screen my-8 w-10/12 max-w-5xl mx-auto'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
