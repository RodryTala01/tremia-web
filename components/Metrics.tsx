const metrics = [["+8", "Años de experiencia"], ["+100", "Proyectos realizados"], ["+15", "Clientes"]];

export default function Metrics() {
  return (
    <section className="section metrics" aria-labelledby="metrics-title">
      <div className="shell">
        <div className="metrics-intro"><h2 id="metrics-title" className="eyebrow">Experiencia</h2><p>Nuestra experiencia nos permite abordar proyectos de distinta escala y complejidad en diferentes sectores industriales.</p></div>
        <dl className="metrics-grid">
          {metrics.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}
