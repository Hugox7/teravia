import { PageShell } from "@teravia/ui";

export default function Home() {
  return (
    <PageShell title="Site vitrine" description="Présentation publique de la plateforme et de ses modules.">
      <div className="panel">
        <span className="status">Socle initial prêt</span>
        <p>Cette application est indépendante et partage le composant PageShell avec les autres.</p>
      </div>
    </PageShell>
  );
}
