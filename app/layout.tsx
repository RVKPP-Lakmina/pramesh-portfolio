import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RVK Pramesh Lakmina - Portfolio",
  description:
    "Portfolio of RVK Pramesh Lakmina, showcasing skills in web development, AI, and more.",
  generator: "Next.js",
  applicationName: "RVK Pramesh Lakmina Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
