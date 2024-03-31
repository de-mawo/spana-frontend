import type { Metadata } from "next";

import "./globals.css";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Spana Front End",
  description: "Front End Nextjs of Spana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
