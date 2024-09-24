import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MuiProvider from "./providers/muiProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Outta Time ! - le Times's up en ligne",
  description:
    "Cette application est une replication du celebre jeu de société TIME'S UP!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}
      >
        <MuiProvider>
          <Header />
          <div className="grow p-2 flex flex-col gap-4">{children}</div>
          <Footer />
        </MuiProvider>
      </body>
    </html>
  );
}
