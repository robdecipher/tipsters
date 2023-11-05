// Required Imports
import { Inter } from 'next/font/google';

// Components, Styles, Assets
import './globals.css'

// Template font setting
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Tipsters',
  description: 'Think you know football? Play the game and see how you measure up.',
}

export default function RootLayout({ children }) {

  return(
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );

}
