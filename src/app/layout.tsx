import "@/styles/index.scss";
import Wrapper from "@/components/SessionWrapper/Wrapper";
import { Metadata } from "next";
import Script from "next/script";
import { Inter_Tight, Kanit } from "next/font/google";

// Using Next.js Font Optimization
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter-tight",
  display: "swap",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fhgroupoc.com"),
  title: "FH GROUP - ONE STEP SOLUTION",
  description:
    "FH Group: Your One-Step Solution Provider - Where Ideas Ignite, Solutions Excel!",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1725019696/FHGROUPOC/rxi79qxl2a9qw8jc0teo.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1725019696/FHGROUPOC/apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  other: {
    "google-site-verification": "Ov62s65XoM1J-pbOSFCIaMJtR30ndoDaD4iQFazm10c",
    "google-adsense-account": "ca-pub-3092206730918791",
  },
  openGraph: {
    title: "FH GROUP - ONE STEP SOLUTION",
    description:
      "FH Group: Your One-Step Solution Provider - Where Ideas Ignite, Solutions Excel!",
    url: "https://www.fhgroupoc.com/",
    siteName: "FH Group",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dgtk4rthy/image/upload/v1734621782/FHGROUPOC/LOGOS/wylfbd45nxwjcnsh0uhc.jpg",
        width: 1200,
        height: 630,
        alt: "FH GROUP Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FH GROUP - ONE STEP SOLUTION",
    description:
      "FH Group: Your One-Step Solution Provider - Where Ideas Ignite, Solutions Excel!",
    images: [
      "https://res.cloudinary.com/dgtk4rthy/image/upload/v1734621782/FHGROUPOC/LOGOS/wylfbd45nxwjcnsh0uhc.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${kanit.variable}`}>
      <body className={`${interTight.className} ${kanit.className}`}>
        
        {/* =========================================================
           VOX BRIDGE CUSTOM VOICE WIDGET INTEGRATION
           ========================================================= */}
        <Script
          src="https://voxbbridge-demo-production.up.railway.app/widget.js"
          data-client-id="j97asdqv8wnxhenwr4qczzwkj58akny4"
          strategy="afterInteractive" // Safely loads right after page becomes interactive
        />

        {/* Google Analytics (Gtag) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6EG7W24KDJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6EG7W24KDJ');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '522876131964677');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=522876131964677&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>

        <Wrapper>{children}</Wrapper>

        {/* Tidio Chat */}
        <Script
          src="//code.tidio.co/dyp4hdcy3dd2y3ulxxsii6piirsdpw0w.js"
          strategy="lazyOnload"
        />

        {/* Google AdSense */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3092206730918791"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}