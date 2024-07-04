// Styles
import "@/app/styles/globals.css";
//Utils
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/redux/Providers";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies",
  description: "Millions of movies for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          < Footer />
        </Providers>
      </body>
    </html>
  );
}
