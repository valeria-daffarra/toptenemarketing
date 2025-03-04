import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Top Ten eMarketing",
  description: "Agenzia di marketing digitale in Italia. Sviluppo di siti, social network, servizi pubblicitari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
