import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "Nuwara Eliya Guide — The Hill Country of Sri Lanka",
    template: "%s | Nuwara Eliya Guide",
  },
  description:
    "Honest travel advice for Nuwara Eliya, Sri Lanka. Handpicked experiences, trip ideas, and local knowledge — from someone who actually lives here.",
  keywords: [
    "Nuwara Eliya",
    "Sri Lanka travel",
    "things to do Nuwara Eliya",
    "Nuwara Eliya guide",
    "hill country Sri Lanka",
    "tea country Sri Lanka",
    "Horton Plains",
    "World's End Sri Lanka",
  ],
  openGraph: {
    title: "Nuwara Eliya Guide",
    description: "The hill country, properly explored.",
    url: "https://nuwaraeliyaguide.com",
    siteName: "Nuwara Eliya Guide",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuwara Eliya Guide",
    description: "The hill country, properly explored.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}