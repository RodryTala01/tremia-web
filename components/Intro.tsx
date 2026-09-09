export default function Intro() {
  return (
    <section id="nosotros" className="section intro" aria-labelledby="intro-title" tabIndex={-1}>
      <div className="shell">
        <p className="eyebrow section-label">Nosotros</p>
        <h2 id="intro-title" className="intro-lead">
          Somos una empresa de <span>servicios e ingeniería</span> especializada en el desarrollo e implementación de <span>soluciones tecnológicas para la industria.</span>
        </h2>
        <div className="intro-layout">
          <div className="expertise-strip" aria-hidden="true">
            <span>Ingeniería</span>
            <span>Automatización</span>
            <span>Infraestructura IT/OT</span>
          </div>
          <div className="intro-detail">
            <p>Integramos ingeniería, automatización e infraestructura IT/OT para resolver las necesidades de cada proyecto de forma integral.</p>
            <p>Nuestro diferencial está en combinar experiencia, conocimiento técnico e integración de tecnologías, acompañando a nuestros clientes desde la ingeniería hasta la puesta en marcha.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
