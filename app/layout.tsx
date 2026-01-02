import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PaperPublishIQ - Research Paper Mentoring & Peer Review Platform",
  description: "Transform your research paper from draft to publication-ready with expert mentoring, blind peer review, and ethical incentive management. Secure MVP for research paper submission and editorial decisioning.",
  keywords: [
    "research paper",
    "peer review",
    "academic publishing",
    "mentoring",
    "blind review",
    "editorial decision",
    "research platform",
    "paper submission",
    "academic writing",
    "publication",
  ],
  authors: [{ name: "PaperPublishIQ Team tkarthikeyan@gmail.com" }],
  openGraph: {
    title: "PaperPublishIQ - Research Paper Mentoring & Peer Review Platform",
    description: "Transform your research paper from draft to publication-ready with expert mentoring and blind peer review.",
    type: "website",
    url: "https://paperpublishiq.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "PaperPublishIQ - Research Paper Mentoring & Peer Review Platform",
    description: "Transform your research paper from draft to publication-ready with expert mentoring and blind peer review.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
