import type { Metadata } from "next";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className="bg-[#2a2d6c] text-white">{children}</body>
      </html>
    </ViewTransitions>
  );
}
