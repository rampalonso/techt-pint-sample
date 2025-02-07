import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";

const fontSans = Roboto({
  variable: "--font-primary-sans",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

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
    <html lang="en">
      <body className={`${fontSans.variable} bg-gray-100 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
