import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "K&E Wedding",
  description: "Our wedding website"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#e6e1df] text-black antialiased">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
          <SiteNav />
          <main className="flex-1 py-6 sm:py-8">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
