import LandingPageHeader from "@/components/LandingPageHeader";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
