import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Poppins } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Circle of Life by Rekha Gupta - Relationship, Marriage & Family Consultancy",
  description: "Expert relationship counseling and marriage guidance. From breakup healing to pre-marital preparation and family harmony. Culturally aware, confidential sessions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${poppins.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}