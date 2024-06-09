import type { Metadata } from "next";
import Footer from "./ui/footer";
import Navbar from "./ui/navbar";

// These styles apply to every route in the application
import "./globals.css";

export const metadata: Metadata = {
  title: "Yoga App NextJS",
  description: "Yoga app made with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
