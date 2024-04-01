

import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import {
  Link,
} from "@nextui-org/react";

import { AppNavbar } from "./Components/navbar";

const config = require("../mypage.config.json");

export const metadata: Metadata = {
  title: config.name,
  description: `${config.name}'s web page`,
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
