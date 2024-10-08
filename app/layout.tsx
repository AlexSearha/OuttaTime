import type { Metadata } from "next"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MuiProvider from "./providers/MuiProvider"
import { roboto } from "@/fonts/Font"
import "./globals.css"

export const metadata: Metadata = {
    title: "Outta Time ! - le Times's up en ligne",
    description: "Cette application est une replication du celebre jeu de société TIME'S UP!",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr">
            <body className={`${roboto.className} antialiased flex flex-col h-screen`}>
                <MuiProvider>
                    <Header />
                    <div className="grow p-2 flex flex-col gap-4 md:items-center">{children}</div>

                    <Footer />
                </MuiProvider>
            </body>
        </html>
    )
}
