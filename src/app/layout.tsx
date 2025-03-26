import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://juris.dk'),
  title: {
    default: "Juris AI | Legal AI Assistant",
    template: "%s | Juris AI"
  },
  description: "Juris AI er en juridisk AI-assistent, der giver adgang til domstolsafgørelser, ankesystemet og avancerede juridiske værktøjer.",
  keywords: ["juridisk AI", "legal tech", "domstolsafgørelser", "ankesystemet", "juridisk assistent", "AI", "jura"],
  authors: [{ name: "Juris AI" }],
  creator: "Juris AI",
  publisher: "Juris AI",
  formatDetection: {
    email: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://juris.dk",
    siteName: "Juris AI",
    title: "Juris AI | Juridisk AI-assistent",
    description: "Juris AI er en juridisk AI-assistent, der giver adgang til domstolsafgørelser, ankesystemet og avancerede juridiske værktøjer.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juris AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juris AI | Juridisk AI-assistent",
    description: "Juris AI er en juridisk AI-assistent, der giver adgang til domstolsafgørelser, ankesystemet og avancerede juridiske værktøjer.",
    images: ["/og-image.jpg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Juris AI",
  },
  alternates: {
    canonical: "https://juris.dk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
