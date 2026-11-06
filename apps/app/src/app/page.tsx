import { PageShell } from "@teravia/ui";

export default function Home() {
  return (
    <PageShell title="Espace collectivités" description="Espace de travail réservé aux utilisateurs des collectivités.">
      <div className="panel">
        <span className="status">Socle initial prêt</span>
        <p>Cette application est indépendante et partage le composant PageShell avec les autres.</p>
      </div>
    </PageShell>
  );
}
