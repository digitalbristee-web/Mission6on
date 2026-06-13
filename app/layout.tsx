import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bristee-consultation.vercel.app"),
  title: {
    default: "Free 1:1 Digital Marketing Consultation | Digital Marketing Consultation",
    template: "%s | Bristee",
  },
  description:
    "Book a free 1:1 digital marketing consultation call and get a customized plan for your Nepal-based business.",
  openGraph: {
    title: "Struggling to grow your business?",
    description:
      "Grab a FREE 1:1 Digital Marketing consultation call and get a customized plan you can implement immediately.",
    url: "/",
    siteName: "Digital Marketing Consultation",
    images: [
      {
        url: "/consultant-logo.png",
        width: 512,
        height: 512,
        alt: "Digital Marketing Consultation logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 1:1 Digital Marketing Consultation",
    description:
      "Get a customized digital marketing plan for your business.",
    images: ["/consultant-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
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
