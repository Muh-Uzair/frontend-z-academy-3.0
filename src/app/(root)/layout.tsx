import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";
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
        <Toaster
          position="top-center"
          richColors
          expand={false}
          toastOptions={{
            classNames: {
              toast: "font-medium",
            },
          }}
        />
      </body>
    </html>
  );
}
