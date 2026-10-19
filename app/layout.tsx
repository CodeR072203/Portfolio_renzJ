import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "@/app/providers";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { BackToTop } from "@/components/ui/BackToTop";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  weight: "300 700",
  variable: "--font-display",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/Inter.ttf",
  weight: "100 900",
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono.ttf",
  weight: "100 800",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Providers>
          <LoadingScreen />
          {children}
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
