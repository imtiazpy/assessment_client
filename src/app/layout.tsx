import Navbar from '@/Components/Navigation/Header/Navbar'
import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Assessment',
  description: 'Best place to test your potential employee.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          
        </footer>
      </body>
    </html>
  )
}
