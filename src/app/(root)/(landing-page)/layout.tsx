import LandingPageHeader from "@/components/LandingPageHeader";
import "@/styles/globals.css";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <LandingPageHeader />
      <div>{children}</div>
    </div>
  );
}
