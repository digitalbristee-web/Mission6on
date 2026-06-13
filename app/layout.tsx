import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '26852049454477461');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=26852049454477461&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
