import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geist = localFont({
  src: "../assets/fonts/geist-latin.woff2",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nilanjan.xyz"),
  title: "Nilanjan Mandal | Full stack engineer",
  description: "I build thoughtful web and mobile experiences. Explore my work in React, Next.js, React Native, and the systems behind them.",
  openGraph: {
    title: "Nilanjan Mandal | Full stack engineer",
    description: "Thoughtful code. Useful things. Web, mobile, and the systems in between.",
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.variable}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
