export default function Partners() {
  return (
    <section className="section partners" aria-labelledby="partners-title">
      <div className="shell">
        <p className="eyebrow section-label">Respaldo</p>
        <div className="partners-layout">
          <div className="partners-heading">
            <h2 id="partners-title">Tecnología +<br /> conocimiento +<br /> <span>respaldo</span></h2>
            <p>Somos Authorized Partner de Dell Technologies, Cisco y Microsoft, lo que fortalece nuestra capacidad para diseñar e implementar soluciones de infraestructura tecnológica para entornos industriales.</p>
          </div>
          {/* TODO: incorporar archivos oficiales de los partners cuando estén disponibles. */}
          <ul className="partner-names" aria-label="Partners tecnológicos">
            <li>Dell Technologies</li>
            <li>Cisco</li>
            <li>Microsoft</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
