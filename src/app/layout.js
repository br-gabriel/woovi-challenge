import "./globals.css";
import { Nunito } from "next/font/google";
import { Providers } from "./providers";
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Woovi | Challenge",
  description: "Woovi Challenge for Junior Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
