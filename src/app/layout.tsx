import type { Metadata } from "next";
import { Montserrat, Hind } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Goldenshiruhllc | Complete Amazon Account Management Agency",
  description:
    "Goldenshiruhllc is an elite Amazon account management agency. We architect growth through full-service optimization, PPC scaling, FBA operations, and algorithm-first SEO. Your total category dominance, managed.",
  keywords: [
    "Amazon account management agency",
    "Full-service Amazon growth",
    "Amazon marketplace intelligence",
    "Elite Amazon scaling partner",
    "Goldenshiruhllc solutions",
  ],
  openGraph: {
    title: "Goldenshiruhllc | Elite Amazon Account Management",
    description:
      "Scale your brand with the architects of the Amazon future. Full-service account management, PPC, and operational excellence for global leaders.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${montserrat.variable} ${hind.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
