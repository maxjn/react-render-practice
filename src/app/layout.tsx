import Header from "@/components/Header/Header";
import "./globals.css";
import { Nunito } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "React Render Practice",
  description: "Demonstration of how react render works",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} bg-neutral-200 `}
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="flex items-center justify-center min-h-screen py-4 bg-neutral-200 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
