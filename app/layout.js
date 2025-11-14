import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Contact from "./(home)/components/Contact";
import Copyright from "./(home)/components/Copyright";
import Footer from "./(home)/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Encoderbytes",
  description: "Encoderbytes Offical Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Topbar />
        <Navbar />
        {children}
        <Contact />
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
