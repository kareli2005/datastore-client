import type { Metadata } from "next";
import "./globals.css";
import SideBar from "@/components/SideBar";

export const metadata: Metadata = {
    title: "DataStore",
    description: "Create your own database in seconds.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="antialiased w-full h-screen flex">
                <SideBar />
                <main className="flex-1 h-full w-full flex flex-col overflow-auto">
                    <header className="header">
                        <p className="font-bold cursor-pointer">DataStore</p>
                    </header>
                    <div className="flex-1 w-full">{children}</div>
                </main>
            </body> 
        </html>
    );
}
