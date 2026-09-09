const services = [
  { title: "Desarrollo de ingeniería", description: "Desarrollamos ingeniería eléctrica, documentación técnica y especificaciones para llevar cada proyecto desde su definición hasta su implementación." },
  { title: "Automatización industrial", description: "Desarrollamos sistemas de control industrial, integrando procesos, equipos e instrumentos sobre diferentes plataformas." },
  { title: "Redes industriales", description: "Diseñamos e implementamos redes Ethernet de alta velocidad, disponibilidad y confiabilidad para entornos industriales exigentes." },
  { title: "Datacenters industriales", description: "Diseñamos, implementamos y configuramos infraestructura de servidores, virtualización, almacenamiento, backup, alta disponibilidad, firewalls y VPNs." },
  { title: "Software Factory", description: "Creamos soluciones de software a medida: IoT, sistemas de reportes, bases de datos y aplicaciones web." },
];

export default function Services() {
  return (
    <section id="servicios" className="section services" aria-labelledby="services-title" tabIndex={-1}>
      <div className="shell">
        <div className="section-heading"><h2 id="services-title">Servicios</h2><span className="technical-mark" aria-hidden="true">↘</span></div>
        <ol className="service-list">
          {services.map((service, index) => (
            <li className="service-row" key={service.title}>
              <span className="service-number" aria-hidden="true">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
