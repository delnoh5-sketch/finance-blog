import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

// Import your new global components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import { GoogleAnalytics } from '@next/third-parties/google';


const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const merriweather = Merriweather({ 
  weight: ["400", "700"], 
  subsets: ["latin"], 
  variable: "--font-merriweather",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Wealth & Wisdom | Personal Finance Blog",
    template: "%s | Wealth & Wisdom"
  },
  description: "Actionable, jargon-free personal finance advice to help you build wealth, eliminate debt, and achieve financial independence.",
  keywords: ["personal finance", "budgeting", "investing", "financial independence", "debt payoff"],
  openGraph: {
    title: "Wealth & Wisdom",
    description: "Master your money. Design your life.",
    url: "https://yourwebsite.com",
    siteName: "Wealth & Wisdom",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans bg-finance-light text-gray-800 antialiased min-h-screen flex flex-col">
        
       
        <Navbar />

        
        <main className="grow">
          {children}
        </main>

       
        <Footer />

     
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}

      </body>
    </html>
  );
}