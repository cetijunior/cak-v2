import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "CAK Web Solutions | Your Partner for Professional Web and Social Media Growth",
  description:
    "CAK Web Solutions is a dynamic web agency based in Germany, dedicated to elevating your digital presence with custom website design, responsive development, and targeted social media marketing. Specializing in affordable, high-quality solutions, we offer tailored packages that combine web and social media strategies to boost your online visibility and engagement. Whether you're starting from scratch or aiming to enhance your current digital footprint, CAK Web Solutions is your trusted partner for innovative and effective digital marketing services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="CAK-icon" sizes="any" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
