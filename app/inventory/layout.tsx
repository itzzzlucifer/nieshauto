import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory | JINPENG LINGBOX-Z 410km",
  description: "Explore the JINPENG LINGBOX-Z 410km edition. High-performance, eco-friendly electric hatchback with premium features and smart technology.",
  openGraph: {
    title: "Inventory | JINPENG LINGBOX-Z",
    description: "Discover the future of urban mobility with the JINPENG LINGBOX-Z.",
    images: ["/Lingbox-Z/green/front_45.webp"],
  },
};

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
