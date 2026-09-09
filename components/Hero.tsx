import Arrow from "@/components/Arrow";

function InfrastructureDiagram() {
  return (
    <svg viewBox="0 0 560 550" fill="none" aria-hidden="true" className="infrastructure-diagram">
      <defs>
        <pattern id="technical-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0v40" stroke="currentColor" strokeOpacity=".12" />
        </pattern>
      </defs>
      <rect x="1" y="1" width="558" height="548" fill="url(#technical-grid)" />
      <g stroke="currentColor" strokeWidth="1">
        <path d="M20 40V20h20M520 20h20v20M20 510v20h20M520 530h20v-20" />
        <path d="m80 366 200-110 200 110-200 110Z" fill="var(--tremia-dark-blue)" strokeOpacity=".55" />
        <path d="m80 366 200 110 200-110v20L280 496 80 386Z" strokeOpacity=".3" />
        <path d="m80 266 200-110 200 110-200 110Z" fill="var(--tremia-dark-blue)" strokeOpacity=".75" />
        <path d="m80 266 200 110 200-110v20L280 396 80 286Z" strokeOpacity=".4" />
        <path d="m80 166 200-110 200 110-200 110Z" fill="var(--tremia-dark-blue)" />
        <path d="m80 166 200 110 200-110v20L280 296 80 186Z" strokeOpacity=".5" />
        <path d="M80 186v180m400-180v180M280 296v180M280 56V20M80 366l-40 22v62m440-84 40 22v62" strokeDasharray="4 7" strokeOpacity=".55" />
        <path d="m140 166 140-77 140 77-140 77Z" strokeOpacity=".3" />
        <path d="m210 128 140 77m-140 0 140-77" strokeOpacity=".3" />
        <path d="m224 166 56-31 56 31-56 31Z" fill="var(--tremia-light-blue)" fillOpacity=".12" />
        <path d="m160 310 55 30 65-36 65 36 55-30M160 410l120 66 120-66" strokeWidth="2" />
        <path d="M80 266H46v-62H20m460 62h34v-62h26M280 496v34" strokeOpacity=".5" />
      </g>
      <g fill="var(--tremia-dark-blue)" stroke="currentColor" strokeWidth="2">
        {[[80,166],[280,56],[480,166],[280,276],[160,310],[345,340],[400,410],[280,476]].map(([cx,cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" />)}
      </g>
      <g fill="currentColor"><circle cx="280" cy="166" r="5" /><circle cx="40" cy="450" r="3" /><circle cx="520" cy="450" r="3" /><rect x="16" y="200" width="8" height="8" /><rect x="536" y="200" width="8" height="8" /></g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="shell hero-body">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-square" />Tecnología aplicada</p>
          <h1 id="hero-title">Soluciones<br /> integrales para<br /> <span>la industria</span></h1>
          <a className="button button-light" href="#contacto">Hablemos <Arrow diagonal /></a>
        </div>
        <div className="hero-art"><InfrastructureDiagram /></div>
      </div>
      <div className="shell hero-baseline">
        <p>Ingeniería · Automatización · Redes · Tecnología</p>
        <a href="#nosotros" aria-label="Ir a Nosotros"><span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
