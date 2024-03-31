

import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import {
  Link,
} from "@nextui-org/react";

import { AppNavbar } from "./Components/navbar";

export const metadata: Metadata = {
  title: "Mohammad Rafieefard",
  description: "Mohammad Rafieefard biography web site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <Providers>
        <AppNavbar/>
          {children}
          <footer>
            <p className="text-center mt-8 mb-4 px-8">Made by <Link target="_blank" href="https://react.dev/">React</Link> and <Link target="_blank" href="https://react.dev/">NextUi</Link> with ❤️ by <Link target="_blank" href="https://github.com/mrafieefard">Mrafieefard</Link></p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
