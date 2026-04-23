type StatCard = {
  label: string;
  value: string;
  note: string;
};

type Stage = {
  title: string;
  copy: string;
};

const stats: StatCard[] = [
  {
    label: 'Frontend',
    value: 'Thin client',
    note: 'React + Vite shell with local cache and offline-first layout.',
  },
  {
    label: 'API Gateway',
    value: 'Go',
    note: 'JWT, WebSocket streams, and request orchestration.',
  },
  {
    label: 'Compute Core',
    value: 'Rust',
    note: 'CPU-bound calculations isolated from IO concerns.',
  },
  {
    label: 'Ephemeris Layer',
    value: 'AGPL isolated',
    note: 'Dedicated service boundary for Swiss Ephemeris integration.',
  },
];

const stages: Stage[] = [
  {
    title: 'Stage 1 / Compose',
    copy: 'Single-node deployment for fast iteration on a VPS.',
  },
  {
    title: 'Stage 2 / K3s',
    copy: 'Horizontal scaling for Rust workers and stateful infra.',
  },
  {
    title: 'Stage 3 / Managed K8s',
    copy: 'Cloud-native deployment with managed data services.',
  },
];

export function App() {
  return (
    <div className="page">
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <main className="shell">
        <section className="hero panel">
          <p className="eyebrow">Astro-Analytical Engine</p>
          <h1>Thin client architecture for predictive ephemeris workflows.</h1>
          <p className="lede">
            A compact landing page scaffold for the monorepo: Go gateway, Rust compute
            services, isolated ephemeris boundary, and a frontend designed around local
            caching and streamed updates.
          </p>

          <div className="actions">
            <a className="button button-primary" href="#architecture">
              View architecture
            </a>
            <a className="button button-secondary" href="#stages">
              Deployment stages
            </a>
          </div>
        </section>

        <section className="grid" id="architecture">
          {stats.map((stat) => (
            <article className="panel stat" key={stat.label}>
              <span className="stat-label">{stat.label}</span>
              <strong className="stat-value">{stat.value}</strong>
              <p>{stat.note}</p>
            </article>
          ))}
        </section>

        <section className="panel roadmap" id="stages">
          <div className="section-head">
            <p className="eyebrow">Roadmap</p>
            <h2>Infra evolves from compose to managed Kubernetes.</h2>
          </div>

          <div className="timeline">
            {stages.map((stage) => (
              <article className="timeline-item" key={stage.title}>
                <span className="dot" />
                <div>
                  <h3>{stage.title}</h3>
                  <p>{stage.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
