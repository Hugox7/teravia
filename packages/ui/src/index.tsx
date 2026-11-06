import type { ReactNode } from "react";

export function PageShell({ title, description, children }: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <main className="shell">
      <div className="eyebrow">TERAVIA · ENVIRONNEMENT DE DÉVELOPPEMENT</div>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </main>
  );
}
