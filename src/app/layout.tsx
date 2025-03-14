import { cn } from "@/shared/lib/utils";
import { Footer } from "@/shared/widgets/footer";
import { Header } from "@/shared/widgets/header";
import { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import { baseUrl } from "./sitemap";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Yelsultan Niyaztay Portfolio",
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
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "bg-neutral-950 antialiased text-neutral-50 container py-10 tracking-wide px-4 sm:px-8",
          overpass.className,
        )}
      >
        <Header />
        <main className="w-full pt-16 mb-[10%]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
