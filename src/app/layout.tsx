import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nilanjan Mandal — Full-stack Engineer",
  description: "I build thoughtful web and mobile experiences. Explore my work in React, Next.js, React Native, and the systems behind them.",
  openGraph: {
    title: "Nilanjan Mandal — Full-stack Engineer",
    description: "Thoughtful code. Useful things. Web, mobile, and the systems in between.",
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary" },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
