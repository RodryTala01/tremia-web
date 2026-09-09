const steps = ["Relevamiento", "Ingeniería", "Desarrollo", "Implementación", "Puesta en marcha", "Soporte"];

export default function Process() {
  return (
    <section className="section process" aria-labelledby="process-title">
      <div className="shell">
        <p className="eyebrow section-label">Forma de trabajo</p>
        <h2 id="process-title">En Tremia acompañamos el proyecto <span>de principio a fin.</span></h2>
        <ol className="process-steps">
          {steps.map((step, index) => <li key={step}><span className="step-number" aria-hidden="true">0{index + 1}</span><span className="step-node" aria-hidden="true" /><h3>{step}</h3></li>)}
        </ol>
        <div className="process-detail"><p>Partimos de las necesidades reales de cada instalación para diseñar e implementar la solución adecuada, integrando las distintas tecnologías involucradas.</p><p>Y seguimos presentes después de la puesta en marcha, brindando soporte y mantenimiento.</p></div>
      </div>
    </section>
  );
}
