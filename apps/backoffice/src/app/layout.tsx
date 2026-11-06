import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Back-office | Teravia",
  description: "Administration des collectivités, utilisateurs et droits.",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="fr"><body>{children}</body></html>;
}
