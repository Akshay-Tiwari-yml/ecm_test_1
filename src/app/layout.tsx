import type { Metadata } from "next";

import "./globals.css";
import "@radix-ui/themes/styles.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Website name",
  description: "C&T Next.js starter template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
