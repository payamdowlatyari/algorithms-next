import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Providers} from "./providers";
import './globals.css'
import Header from './Header';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Algorithms For Life',
  description: 'A list of most important and widely used algorithms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
          <Providers>
            <Header/>
            <main className=' min-h-screen my-2 w-10/12 mx-auto'>
            {children}
            </main>
            <Footer />
          </Providers>
        </body>
    </html>
  )
}
