import "./globals.css";
import { Nunito } from "next/font/google";
import { Providers } from "./providers";
import { ReactNode } from "react";
const nunito = Nunito({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Woovi | Challenge",
  description: "Woovi Challenge for Junior Front-End Developer",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
