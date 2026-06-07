import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bristee-consultation.vercel.app"),
  title: {
    default: "Free 1:1 Digital Marketing Consultation | Bristee",
    template: "%s | Bristee",
  },
  description:
    "Book a free 1:1 consultation and get a customized digital marketing strategy designed specifically for your business.",
  openGraph: {
    title: "Get More Customers, More Sales, and Predictable Business Growth",
    description:
      "Book a free 1:1 consultation and get a customized digital marketing strategy designed specifically for your business.",
    url: "/",
    siteName: "Bristee Meta Ads Expert",
    images: [
      {
        url: "/bristee-logo.png",
        width: 512,
        height: 512,
        alt: "Bristee Meta Ads Expert logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 1:1 Digital Marketing Consultation | Bristee",
    description:
      "Get a customized digital marketing strategy designed specifically for your business.",
    images: ["/bristee-logo.png"],
  },
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
