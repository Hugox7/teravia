import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Site vitrine | Teravia",
  description: "Présentation publique de la plateforme et de ses modules.",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="fr"><body>{children}</body></html>;
}
