import { cn } from "@/shared/lib/utils";
import { Header } from "@/shared/widgets/header";
import { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import { baseUrl } from "./sitemap";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Yelsultan's Portfolio",
    template: "%s | Yelsultan's Portfolio",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "Yelsultan's Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-zinc-950 antialiased text-neutral-50 container py-10 tracking-wide",
          overpass.className,
        )}
      >
        <Header />
        <main className="min-h-screen w-full pt-16">{children}</main>
      </body>
    </html>
  );
}
