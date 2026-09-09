const industries = ["Alimentos y bebidas", "Farmacéutica", "Biotecnología", "Agroindustria", "Tratamiento de agua y efluentes"];

export default function Industries() {
  return (
    <section id="industrias" className="section industries" aria-labelledby="industries-title" tabIndex={-1}>
      <div className="shell industries-layout">
        <div><p className="eyebrow section-label">Industrias</p><h2 id="industries-title">Conocemos la industria porque <span>trabajamos en ella.</span></h2></div>
        <ul className="industry-list">
          {industries.map((industry, index) => <li key={industry}><span className="industry-index" aria-hidden="true">0{index + 1}</span><h3>{industry}</h3><span className="industry-node" aria-hidden="true" /></li>)}
        </ul>
      </div>
    </section>
  );
}
