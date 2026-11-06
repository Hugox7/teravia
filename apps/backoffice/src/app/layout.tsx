import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teravia | Back-office",
  description: "Administration de la plateforme Teravia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <SidebarProvider>
          <AppSidebar />

          <main className="flex min-h-screen flex-1 flex-col">
            <header className="flex h-14 items-center border-b px-4">
              <SidebarTrigger />
              <span className="ml-4 font-medium">Teravia — Administration</span>
            </header>

            <div className="flex-1 p-6">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
