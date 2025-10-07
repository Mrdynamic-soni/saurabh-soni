import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Saurabh Soni - Full Stack Developer & Tech Innovator",
    template: "%s | Saurabh Soni",
  },
  description: "Experienced Full Stack Developer specializing in modern web technologies, React, Next.js, and cloud solutions. Building innovative digital experiences with cutting-edge technology.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Software Engineer", "Tech Innovation"],
  authors: [{ name: "Saurabh Soni" }],
  creator: "Saurabh Soni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saurabh.vercel.app",
    title: "Saurabh Soni - Full Stack Developer & Tech Innovator",
    description: "Experienced Full Stack Developer specializing in modern web technologies, React, Next.js, and cloud solutions.",
    siteName: "Saurabh Soni Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Soni - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark`}>
      <body className="antialiased font-inter bg-dark text-light">
        {children}
      </body>
    </html>
  );
}
