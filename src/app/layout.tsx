import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"] 
});

export const metadata: Metadata = {
  title: "AUDC Portfolio",
  description: "Asad Ali's Unique Design & Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
