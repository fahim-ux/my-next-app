import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./components/Providers";
import {Roboto_Mono,Iceland} from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const consolas = localFont({
  src: "./fonts/Consolas.woff",
  variable: '--font-consolas',
  weight: "700 400",
});
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['200','400', '700'], 
  variable: '--font-roboto-mono',
  display: 'swap', 
});
const iceland = Iceland({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-iceland',
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "Portfolio | Fahim",
  description: "This is the official portfolio of Fahim, NIT Durgapur",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.variable} ${consolas.variable} ${iceland.variable} antialiased`}>
        <header>
          <Navbar/>
        </header>
        <Providers >
        {children}
        </Providers>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
