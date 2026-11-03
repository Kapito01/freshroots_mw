import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Freshroots Malawi | Integrated Agribusiness",
    template: "%s | Freshroots Malawi",
  },
  description:
    "Freshroots is an integrated Malawian agribusiness focused on producing quality crops, including rice and maize, and developing agricultural solutions.",
  applicationName: "Freshroots Malawi",
  openGraph: {
    type: "website",
    title: "Freshroots Malawi | Integrated Agribusiness",
    description:
      "Growing quality crops and developing agricultural solutions in Malawi.",
    siteName: "Freshroots Malawi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
