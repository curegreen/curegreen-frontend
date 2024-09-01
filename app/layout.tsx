import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | CureGreen",
    default: "CureGreen",
  },
  description: "Healing Begins With Green",
  openGraph: {
    title: {
      template: "%s | CureGreen",
      default: "CureGreen",
    },
    description: "Healing Begins With Green",
    url: "https://curegreen.com.au",
    images: [
      {
        url: "/images/opengraph.png",
        width: 1200,
        height: 630,
        alt: "CureGreen",
      },
      {
        url: "/images/dummyPic.jpeg",
        width: 1200,
        height: 630,
        alt: "CureGreen",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
