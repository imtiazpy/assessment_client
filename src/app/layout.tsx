import Navbar from '@/Components/Navigation/Header/Navbar'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/context/authContext/authContext'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Assessment',
  description: 'Best place to test your potential employee.',
}

export default function RootLayout({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main>
          <AuthProvider>
            {children}
            {modal}
            <ToastContainer />
          </AuthProvider>
        </main>
        <footer>
          
        </footer>
      </body>
    </html>
  )
}
