import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";
import {Inter} from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Providers from "@/providers";

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
    title: "HomeAway",
    description: "Feel Right at HomeAway",
};

const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>

        <Providers>
            <Navbar/>
            <main className='containe py-10'>{children}</main>

        </Providers>

        </body>
        </html>

    );
}
