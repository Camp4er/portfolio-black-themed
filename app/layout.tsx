import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Poorva Saxena - Portfolio",
  description: "Minimal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
className={`${inter.className} bg-background text-foreground`}      >
        {children}
      </body>
    </html>
  );
}
