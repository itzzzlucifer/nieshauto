import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Test Drive",
  description: "Schedule your exclusive test drive for the JINPENG LINGBOX-Z. Experience the precision and comfort of premium electric mobility.",
};

export default function TestDriveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
