import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { NAME } from "@/constants";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: NAME,
  description: `Portfolio website of ${NAME}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={mPlusRounded.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
