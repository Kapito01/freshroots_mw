import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

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
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
