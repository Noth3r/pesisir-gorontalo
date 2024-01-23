import { beach, cocogoose, futura, montserrat } from "~/utils/font";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import "~/styles/globals.css";


export const metadata = {
  title: "KKN Pesisir Gorontalo 2024",
  description: "KKN PPM UGM Pesisir Gorontalo 2024 Universitas Gadjah Mada (UGM)",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
    style={{
      scrollBehavior: "smooth" ,
    }}
    lang="en">
      <body className={`font-futura ${montserrat.variable} ${beach.variable} ${cocogoose.variable} ${futura.variable}`}>{children}
      <SpeedInsights/>
      <Analytics/>
      </body>
    </html>
  );
}
