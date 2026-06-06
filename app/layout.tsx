import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";


export const metadata: Metadata = {
  title: {
    default: "Nuwara Eliya Guide — The Hill Country of Sri Lanka",
    template: "%s | Nuwara Eliya Guide",
  },
  description:
    "Honest travel advice for Nuwara Eliya, Sri Lanka. Handpicked stays, things to do, and free local advice via WhatsApp — from someone who actually lives here.",
  keywords: [
    "Nuwara Eliya",
    "Sri Lanka travel",
    "things to do Nuwara Eliya",
    "places to stay Nuwara Eliya",
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
    <html
      lang="en" suppressHydrationWarning


    >
      <head>
        {/* Google Fonts — loaded via <link> NOT @import in CSS (PostCSS drops external imports) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,700;1,9..144,900&family=Cormorant+Garamond:ital,wght@0,300;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>
          {children}</main>
        <Footer />
      </body>
    </html>
  );
}
